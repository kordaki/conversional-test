import React from "react";
import PropTypes from "prop-types";

const H1 = (props) => {
  const { text, name } = props;
  return <h1 name={name}>{text}</h1>;
};

H1.propTypes = {
  text: PropTypes.string,
};

export default React.memo(H1);
