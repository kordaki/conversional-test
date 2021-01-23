import React from "react";

const DefaultElement = ({ type, name, children, text, ...other }) => {
  const trimmedType = type.toLowerCase().replace("component", "");
  const CustomTag = `${trimmedType}`;
  return (
    <CustomTag name={name}>
      {text && text}
      {children && children}
    </CustomTag>
  );
};

export default React.memo(DefaultElement);
