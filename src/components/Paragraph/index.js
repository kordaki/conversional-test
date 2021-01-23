import React from "react";
import PropTypes from "prop-types";

const Paragraph = (props) => {
  const { text, name } = props;
  return <p name={name}>{text}</p>;
};

Paragraph.propTypes = {
  text: PropTypes.string,
};

export default React.memo(Paragraph);
