import React from "react";

const DefaultElement = ({ type, name, text, ...other }) => {
  const CustomTag = type.toLowerCase().replace("component", "");
  return (
    <CustomTag name={name}>
      {text && text}
    </CustomTag>
  );
};

export default React.memo(DefaultElement);
