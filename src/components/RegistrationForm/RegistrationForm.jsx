/* eslint-disable no-plusplus */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from "react";
import Select from "react-select";
import RegistrationFormParticipant from "../RegistrationFormParticipant";
import "./RegistrationForm.css";

export default function RegistrationForm({
  header,
  details,
  maxParticipants,
  form,
  submitHandler
}) {
  const [numOfParticipants, setNumOfParticipants] = useState({
    value: 1,
    label: 1
  });
  const [participantOptions, setParticipantOptions] = useState(null);
  const [submission, setSubmission] = useState(null);

  useEffect(() => {
    setParticipantOptions(
      new Array(maxParticipants)
        .fill(0)
        .map((_, index) => ({ value: index + 1, label: index + 1 }))
    );

    const sub = {};
    new Array(maxParticipants).fill(0).forEach((_, index) => {
      sub[index + 1] = {};
      form.forEach(field => {
        sub[index + 1][field.id] = {
          input:
            field.type === "radio" || field.type === "checkbox" ? null : "",
          error: field.required,
          dirty: false,
          touched: false
        };
      });
    });

    // console.log("SSS", sub);

    setSubmission(sub);
  }, [form, maxParticipants]);

  const handleSubmit = () => {
    let foundErrors = false;
    const sub = { ...submission };

    for (let i = 0; i < numOfParticipants.value; i++) {
      const [participantIndex, participantDetails] = Object.entries(submission)[
        i
      ];
      const fieldIds = Object.keys(participantDetails);
      for (let j = 0; j < fieldIds.length; j++) {
        sub[participantIndex][fieldIds[j]].dirty = true;
        sub[participantIndex][fieldIds[j]].touched = true;
        if (sub[participantIndex][fieldIds[j]].error) foundErrors = true;
      }
    }

    if (foundErrors) {
      setSubmission(sub);
    } else {
      const newPar = [];

      Object.values(sub)
        .slice(0, numOfParticipants.value)
        .forEach(participant => {
          const newSub = [];
          Object.entries(participant).forEach(([fieldId, { input }], index) => {
            if (form[index].type === "radio") {
              newSub.push({
                fieldId,
                input: input.value
              });
            } else if (form[index].type === "checkbox") {
              newSub.push({
                fieldId,
                input: input.map(inp => inp.value)
              });
            } else {
              newSub.push({
                fieldId,
                input
              });
            }
          });
          newPar.push(newSub);
        });

      submitHandler(newPar);
    }
  };

  return (
    <div className="RegistrationForm--container">
      <h3 className="fnt-subtitle1 fgc-lightOrange">{header}</h3>
      <div className="RegistrationForm--details">
        <div>
          <h4 className="fnt-subtitle2 fgc-black">{details.name}</h4>
          <p className="fnt-text1 fgc-gray">{details.description}</p>
        </div>

        <h4 className="fnt-subtitle2 fgc-black">{`₹${details.price}`}</h4>
        <div>
          <p className="fnt-subtitle2 fgc-black">Participants</p>
          {participantOptions && (
            <Select
              value={numOfParticipants}
              onChange={p => setNumOfParticipants(p)}
              options={participantOptions}
              name="participants"
              className="RegistrationForm--select fnt-text1"
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
          )}
        </div>
      </div>
      <h5 className="fnt-subtitle3 fgc-lightOrange">Please fill in the form</h5>
      <div className="RegistrationForm--participantForms">
        {submission &&
          new Array(numOfParticipants.value)
            .fill(0)
            .map((_, index) => (
              <RegistrationFormParticipant
                form={form}
                participantNumber={index + 1}
                key={index}
                submission={submission}
                submissionChangeHandler={setSubmission}
              />
            ))}
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className="btn btn2 fnt-button2 bgc-white fgc-lightOrange brdc-lightOrange"
      >
        Proceed
      </button>
    </div>
  );
}
