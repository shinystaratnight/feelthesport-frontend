import React from "react";
import "./TermsAndConditions.css";

export default function TermsAndConditions({ termsAndConditions }) {
  return (
    <ul className="TermsAndConditions--container">
      {termsAndConditions.map((term, index) => (
        <li key={index}>
          <p className="fnt-subtitle4 fgc-gray">{term}</p>
        </li>
      ))}
    </ul>
  );
}
