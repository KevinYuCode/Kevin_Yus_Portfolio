import React from "react";

function Container({ children, classProp}) {
  return <div className={`container ${classProp}`}>{children}</div>;
}

export default Container;
