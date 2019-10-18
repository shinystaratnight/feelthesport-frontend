import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import Breadcrumbs from "../../components/Breadcrumbs";
import CartBox from "../../components/CartBox";
import CartCoupon from "../../components/CartCoupon";
import CartTotalCost from "../../components/CartTotalCost";
import Dialog from "../../components/Dialog";
import TransactionBox from "../../components/TransactionBox";
import TransactionCost from "../../components/TransactionCost";
import { getTransaction } from "../../redux/modules/cartInfo";
import "./TransactionPage.css";

const mapStateToProps = state => ({
  transaction: state.cartState.transaction,
  apiLoading: state.apiState.apiLoading,
  apiError: state.apiState.apiError
});

const mapDispatchToProps = {
  getTransaction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function TransactionPage({
  match,
  transaction,
  apiLoading,
  apiError,
                             getTransaction: getTransactionDispatcher
}) {
  const [badPage, setBadPage] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (isNaN(match.params.id)) {
      setBadPage(true);
    } else {
      getTransactionDispatcher(Number(match.params.id));
    }
  }, []);
  // if (apiLoading || !cart) return <div className="TransactionPage--container" />;

  // if (cart.length === 0) {
  //   return (
  //     <div className="TransactionPage--container">
  //       <main>
  //         <div>
  //           <Breadcrumbs />
  //           <h1 className="fnt-title1 fgc-darkOrange">CART</h1>
  //         </div>
  //         <h1 className="fnt-title1 fgc-red">Nothing in cart</h1>
  //       </main>
  //     </div>
  //   );
  // }

  // console.log("IN TRANSACCTIONS");
  // if (apiError) return <Redirect to="/404" />;

  // console.log("CARTINFO:", cart);

  if (apiError || badPage) return <Redirect to="/404"/>;
  if (!transaction || transaction.length === 0) {
    return <div>Empty Order</div>;
  }
  return (
    <div className="TransactionPage--container">
      {transaction.bookaslots &&
        Object.entries(transaction.bookaslots).map((bookaslot, index) => (
          <TransactionBox type="bookaslots" data={bookaslot} key={index} />
        ))}
      <TransactionCost data={transaction} />
    </div>
  );
});
//   return (
//     <div className="TransactionPage--container">
//       transactions
//       {/* <CartTotalCost
//           cost={cart.cost}
//           getOrderDispatcher={getOrderDispatcher}
//         /> */}
//     </div>
//   );
// });
