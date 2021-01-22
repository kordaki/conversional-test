import React from "react";
import PropTypes from "prop-types";

const H1 = (props) => {
  const { text } = props;

  return <h1>{text}</h1>;
};

H1.propTypes = {
  text: PropTypes.string,
};

export default React.memo(H1);
