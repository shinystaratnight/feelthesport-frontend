import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import Breadcrumbs from "../../components/Breadcrumbs";
import CartBox from "../../components/CartBox";
import CartCoupon from "../../components/CartCoupon";
import CartTotalCost from "../../components/CartTotalCost";
import Dialog from "../../components/Dialog";
import {
  initCart,
  setDialogOpen,
  getOrder,
  deleteItem,
  setUsedPoints,
  setUsedOfferBySelect,
  completeTransaction
} from "../../redux/modules/cartInfo";
import "./CartPage.css";

const mapStateToProps = state => ({
  cart: state.cartState.cart,
  offers: state.cartState.offers,
  points: state.userState.points,
  name: state.userState.name,
  email: state.userState.email,
  phone: state.userState.phone,
  usedOffer: state.cartState.usedOffer,
  usedPoints: state.cartState.usedPoints,
  razorKey: state.cartState.razorKey,
  dialogOpen: state.cartState.dialogOpen,
  orderId: state.cartState.orderId,
  apiLoading: state.apiState.apiLoading,
  apiError: state.apiState.apiError
});

const mapDispatchToProps = {
  initCart,
  setDialogOpen,
  getOrder,
  deleteItem,
  setUsedPoints,
  completeTransaction,
  setUsedOfferBySelect
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function CartPage({
  cart,
  points,
  offers,
  phone,
  name,
  email,
  usedOffer,
  usedPoints,
  razorKey,
  orderId,
  dialogOpen,
  apiLoading,
  apiError,
  initCart: initCartDispatcher,
  setDialogOpen: setDialogOpenDispatcher,
  getOrder: getOrderDispatcher,
  deleteItem: deleteItemDispatcher,
  setUsedPoints: setUsedPointsDispatcher,
  completeTransaction: completeTransactionDispatcher,
  setUsedOfferBySelect: setUsedOfferBySelectDispatcher
}) {
  const [razorOpen, setRazorOpen] = useState(false);
  useEffect(() => {
    console.log("CART Mounted");
    window.scrollTo({ top: 0, behavior: "smooth" });
    initCartDispatcher();
  }, [initCartDispatcher]);

  useEffect(() => {
    if (orderId) {
      setRazorOpen(true);
    }
  }, [orderId]);

  if (apiLoading || !cart) return <div className="CartPage--container" />;

  if (cart.length === 0) {
    return (
      <div className="CartPage--container">
        <main>
          <div>
            <Breadcrumbs />
            <h1 className="fnt-title1 fgc-darkOrange">CART</h1>
          </div>
          <h1 className="fnt-title1 fgc-red">Nothing in cart</h1>
        </main>
      </div>
    );
  }

  if (apiError) return <Redirect to="/404" />;

  console.log("CARTINFO:", cart);

  const onTransactionEnd = info => {
    console.log("TRANSACTIONEND: ", info);
    setRazorOpen(false);
    completeTransactionDispatcher();
  };

  if (!dialogOpen && razorOpen) {
    const options = {
      key: razorKey, // Enter the Key ID generated from the Dashboard
      name: "FTS",
      description: "Order Payment",
      image: "https://example.com/your_logo",
      order_id: orderId, // Order ID is generated as Orders API has been implemented. Refer the Checkout form table given below
      handler(response) {
        onTransactionEnd(response);
      },
      prefill: {
        name: name,
        email: email,
        contact: phone
      },
      notes: {
       // address: "note value"
      },
      theme: {
        color: "#F37254"
      },
      modal: {
        ondismiss() {
          setRazorOpen(false);
        }
      }
    };

    const rzp = new window.Razorpay(options);

    rzp.open();
  }

  return (
    <div className="CartPage--container">
      <Dialog
        type="info"
        isOpen={dialogOpen}
        closeHandler={() => setDialogOpenDispatcher(false)}
        yesHandler={() => setDialogOpenDispatcher(false)}
      >
        Some items have been removed from your cart
      </Dialog>
      <main>
        <div>
          <Breadcrumbs />
          <h1 className="fnt-title1 fgc-darkOrange">CART</h1>
        </div>
        {cart.bookaslots &&
          Object.entries(cart.bookaslots).map((bookaslot, index) => (
            <CartBox
              type="bookaslots"
              data={bookaslot}
              key={index}
              deleteItem={deleteItemDispatcher}
            />
          ))}
        {cart.events &&
          Object.entries(cart.events).map((event, index) => (
            <CartBox
              type="events"
              data={event}
              key={index}
              deleteItem={deleteItemDispatcher}
            />
          ))}
        {cart.memberships &&
          Object.entries(cart.memberships).map((membership, index) => (
            <CartBox type="memberships" data={membership} key={index} />
          ))}
        {cart.coachings &&
          Object.entries(cart.coachings).map((coaching, index) => (
            <CartBox type="coachings" data={coaching} key={index} />
          ))}
        <CartCoupon
          points={points}
          offers={offers}
          usedOffer={usedOffer}
          usedPoints={usedPoints}
          setUsedOfferBySelectDispatcher={setUsedOfferBySelectDispatcher}
          setUsedPoints={setUsedPointsDispatcher}
        />
        <CartTotalCost
          cost={cart.cost}
          getOrderDispatcher={getOrderDispatcher}
        />
      </main>
    </div>
  );
});
