import React from "react";

const List = ({ li, name, bullet = true }) => {
  return (
    <ul name={name} style={{ listStyle: bullet ? "outside" : "none" }}>
      {li.length && li.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
};

export default React.memo(List);
