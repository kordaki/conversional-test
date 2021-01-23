import React from "react";
import { useCustomEvent } from "../../hooks/useCustomEvent";

const Link = ({ name, text, url, action = "openModal", target = "Modal" }) => {
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
  }

  return (
    <a
      href={url}
      onClick={handleClick}
      name={name}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};

export default React.memo(Link);
