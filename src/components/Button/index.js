import React from "react";

const Button = ({ text, name }) => {
  return <button onClick={() => console.log(name + " clicked")}>{text}</button>;
};

export default React.memo(Button);
