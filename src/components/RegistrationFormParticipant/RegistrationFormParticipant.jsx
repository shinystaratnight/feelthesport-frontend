import React from "react";
import Select from "react-select";
import "./RegistrationFormParticipant.css";

export default function RegistrationFormParticipant({
  participantNumber,
  form,
  submission,
  submissionChangeHandler
}) {
  const handleChange = (newValue, participantNum, fieldId) => {
    let err = true;

    const fieldIdIndex = form.findIndex(field => field.id === fieldId);

    if (form[fieldIdIndex].required) {
      if (
        form[fieldIdIndex].type === "radio" ||
        form[fieldIdIndex].type === "checkbox"
      ) {
        if (
          newValue !== null &&
          JSON.stringify(newValue) !== JSON.stringify({}) &&
          JSON.stringify(newValue) !== JSON.stringify([])
        ) {
          err = false;
        }
      } else if (newValue.length !== 0) {
        err = false;
      }
    } else {
      err = false;
    }

    submissionChangeHandler({
      ...submission,
      [participantNum]: {
        ...submission[participantNum],
        [fieldId]: {
          ...submission[participantNum][fieldId],
          input: newValue,
          dirty: true,
          error: err
        }
      }
    });
  };

  const blurHandler = (participantNum, fieldId) => {
    if (!submission[participantNum][fieldId].touched) {
      submissionChangeHandler({
        ...submission,
        [participantNum]: {
          ...submission[participantNum],
          [fieldId]: {
            ...submission[participantNum][fieldId],
            touched: true
          }
        }
      });
    }
    // console.log("SUB", submission);
  };

  return (
    <div className="RegistrationFormParticipant--container">
      <p className="fnt-subtitle2 fgc-black">{`Participant ${participantNumber}`}</p>
      <div className="RegistrationFormParticipant--form">
        {form.map(({ id, name, type, required, values }, index) => (
          <div
            className={`RegistrationFormParticipant--field${
              type === "radio" || type === "checkbox"
                ? " RegistrationFormParticipant--noBorder"
                : ""
            }${
              submission[participantNumber][id].error &&
              submission[participantNumber][id].dirty &&
              submission[participantNumber][id].touched &&
              !(type === "radio" || type === "checkbox")
                ? " RegistrationFormParticipant--redBorder"
                : ""
            }`}
            key={index}
          >
            <p className="fnt-text1 fgc-lightOrange">{name}</p>
            {type === "alpha" && (
              <input
                name={name}
                value={submission[participantNumber][id].input}
                onChange={e =>
                  handleChange(e.target.value, participantNumber, id)
                }
                onBlur={() => blurHandler(participantNumber, id)}
                type="text"
                required={required}
                className="fnt-text1 fgc-black"
              />
            )}
            {type === "numeric" && (
              <input
                name={name}
                value={submission[participantNumber][id].input}
                onChange={e =>
                  handleChange(e.target.value, participantNumber, id)
                }
                onBlur={() => blurHandler(participantNumber, id)}
                type="number"
                required={required}
                className="fnt-text1 fgc-black"
              />
            )}
            {type === "alphanumeric" && (
              <input
                name={name}
                value={submission[participantNumber][id].input}
                onChange={e =>
                  handleChange(e.target.value, participantNumber, id)
                }
                onBlur={() => blurHandler(participantNumber, id)}
                type="text"
                required={required}
                className="fnt-text1 fgc-black"
              />
            )}
            {type === "radio" && (
              <Select
                name={name}
                value={submission[participantNumber][id].input}
                onChange={e => handleChange(e, participantNumber, id)}
                onBlur={() => blurHandler(participantNumber, id)}
                options={values.map(v => ({ value: v, label: v }))}
                isClearable
                className={`fnt-text1 fgc-black${
                  submission[participantNumber][id].error &&
                  submission[participantNumber][id].dirty &&
                  submission[participantNumber][id].touched
                    ? " RegistrationFormParticipant--selectError"
                    : ""
                }`}
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
            {type === "checkbox" && (
              <Select
                name={name}
                value={submission[participantNumber][id].input}
                onChange={e => handleChange(e, participantNumber, id)}
                onBlur={() => blurHandler(participantNumber, id)}
                options={values.map(v => ({ value: v, label: v }))}
                isMulti
                className={`fnt-text1 fgc-black${
                  submission[participantNumber][id].error &&
                  submission[participantNumber][id].dirty &&
                  submission[participantNumber][id].touched
                    ? " RegistrationFormParticipant--selectError"
                    : ""
                }`}
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
            {type === "date" && (
              <input
                name={name}
                value={submission[participantNumber][id].input}
                onChange={e =>
                  handleChange(e.target.value, participantNumber, id)
                }
                onBlur={() => blurHandler(participantNumber, id)}
                type="date"
                required={required}
                className="fnt-text1 fgc-black"
              />
            )}
            {type === "email" && (
              <input
                name={name}
                value={submission[participantNumber][id].input}
                onChange={e =>
                  handleChange(e.target.value, participantNumber, id)
                }
                onBlur={() => blurHandler(participantNumber, id)}
                type="email"
                required={required}
                className="fnt-text1 fgc-black"
              />
            )}
            {type === "phone" && (
              <input
                name={name}
                value={submission[participantNumber][id].input}
                onChange={e =>
                  handleChange(e.target.value, participantNumber, id)
                }
                onBlur={() => blurHandler(participantNumber, id)}
                type="tel"
                required={required}
                className="fnt-text1 fgc-black"
              />
            )}
            {type === "uri" && (
              <input
                name={name}
                value={submission[participantNumber][id].input}
                onChange={e =>
                  handleChange(e.target.value, participantNumber, id)
                }
                onBlur={() => blurHandler(participantNumber, id)}
                type="url"
                required={required}
                className="fnt-text1 fgc-black"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
