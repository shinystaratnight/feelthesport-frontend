import React, { useState } from "react";
import Select from "react-select";
import RadioButton from "../RadioButton";
import Modal from "../Modal";
import "./OffersModal.css";

export default function OffersModal({
  isOpen,
  closeHandler,
  offers,
  selectedOffer,
  setSelectedOffer,
  setUsedOfferBySelectDispatcher
}) {
  const [selection, setSelection] = useState(null);
  const [selectedRadio, setSelectedRadio] = useState(selectedOffer);

  console.log("XYZ", offers);
  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler} overflow="auto">
      <div className="OffersModal--container">
        <Select
          menuPortalTarget={document.querySelector("body")}
          value={selection}
          onChange={s => setSelection(s)}
          options={offers.map(offer => ({
            value: offer.name,
            label: offer.name
          }))}
          isClearable
          isSearchable
          name="offers"
          className="OffersModal--select fnt-text1"
          styles={{
            menu: (base, state) => ({
              ...base,
              fontSize: "20px"
            })
          }}
          theme={theme => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: "#ffbf1a",
              primary50: "#ffaf18",
              primary75: "#fe9d06",
              primary: "#fc9b04"
            }
          })}
        />
        {offers
          .filter(({ name }) => (selection ? name === selection.value : true))
          .map(({ id, name, type, discountType, discount }) => (
            <div className="OffersModal--offer" key={id}>
              <RadioButton
                name="offers"
                value={id}
                checked={selectedRadio.id === id}
                onChange={() =>
                  setSelectedRadio({ id, name, type, discountType, discount })
                }
              />
              <div>
                <p className="fnt-subtitle2 fnt-bold fgc-black">{name}</p>
                <p className="fnt-text1 fgc-gray">Type: {type}</p>
                <p className="fnt-text1 fgc-gray">
                  {discountType === "amount"
                    ? `Amount: ₹${discount}`
                    : `Percentage: ${discount}%`}
                </p>
              </div>
            </div>
          ))}

        <button
          type="button"
          className="btn btn3 bgc-lightOrange fgc-white fnt-button2"
          onClick={
            selectedRadio
              ? () => {
                setUsedOfferBySelectDispatcher(selectedRadio.id);
                  closeHandler();
                }
              : undefined
          }
        >
          Apply
        </button>
      </div>
    </Modal>
  );
}
