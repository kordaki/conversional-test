import React from "react";
import { useCustomEvent } from "../../hooks/useCustomEvent";

const Button = ({
  text,
  name,
  action = "openModal",
  target = "Modal",
}) => {
  const { dispatchEvent } = useCustomEvent({
    typeArg: "appActions",
  });

  function handleClick(e) {
    if (action) {
      dispatchEvent({
        action,
        target,
        resource: name
      });
    }
    console.log(name + " clicked");
  }

  return <button onClick={handleClick}>{text}</button>;
};

export default React.memo(Button);
