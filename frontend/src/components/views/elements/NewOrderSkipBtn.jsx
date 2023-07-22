import React from "react";

import "../styles/forms.css";

const NewOrderSkipBtn = ({ direction, skipFunction, view, className }) => {
  return (
    <>
      <button className={className} onClick={(e) => skipFunction(view)}>
        {direction}
      </button>
    </>
  );
};

export { NewOrderSkipBtn };
