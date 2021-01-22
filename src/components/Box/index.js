import React from "react";

const Box = (props) => {
  const { borderSize, children } = props;
  return <section style={{ borderWidth: borderSize }}>{children}</section>;
};

export default React.memo(Box);
