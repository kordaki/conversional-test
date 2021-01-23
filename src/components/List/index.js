import React from "react";

const List = ({ li, name }) => {
  return (
    <ul name={name}>
      {li.length && li.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
};

export default React.memo(List);
