import React from "react";
import classNames from "classnames";
import ReactTooltip from "react-tooltip";
import "./LocationButton.css";

export default function LocationButton({ icon, children, className }) {
  const classes = classNames({
    "LocationButton--container": true,
    [className]: className
  });

  return (
    <div className={classes} data-tip={children}>
      <img src={icon} alt="button icon" />
      <ReactTooltip
        place="right"
        effect="solid"
        className="LocationButton--tooltipTheme"
      />
    </div>
  );
}
// export default function LocationButton({ icon, children, className }) {
//   const classes = classNames({
//     "LocationButton--container": true,
//     [className]: className
//   });

//   return (
//     <div className={classes}>
//       <div className="LocationButton--imageContainer">
//         <img src={icon} alt="button icon" data-tip={children} />
//       </div>
//       <ReactTooltip className="LocationButton--tooltipTheme" />
//       <p className="fnt-type2 fgc-white LocationButton--text">{children}</p>
//     </div>
//   );
// }
