import React from "react";

const Link = ({ name, text, url }) => {
  return (
    <a href={url} name={name}>
      {text}
    </a>
  );
};

export default React.memo(Link);
