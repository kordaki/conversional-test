import React from "react";
import PropTypes from "prop-types";

const Paragraph = (props) => {
  const { text } = props;

  return <p>{text}</p>;
};

Paragraph.propTypes = {
  text: PropTypes.string,
};

export default React.memo(Paragraph);
