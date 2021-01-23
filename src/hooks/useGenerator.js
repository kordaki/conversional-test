import React from "react";

// components
import Box from "../components/Box";
import List from "../components/List";
import Link from "../components/Link";
import Modal from "../components/Modal";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import DefaultElement from "../components/DefaultElement";

function useGenerator(data) {
  function detectElement({ type }) {
    switch (type) {
      case "BoxComponent":
        return Box;
      case "ListComponent":
        return List;
      case "LinkComponent":
        return Link;
      case "ButtonComponent":
        return Button;
      case "ModalComponent":
        return Modal;
      case "ParagraphComponent":
        return Paragraph;

      case "H1Component":
      case "H2Component":
      default:
        return DefaultElement;
    }
  }

  function generate(obj, name, index) {
    if (!obj.Content) return;
    const Element = detectElement(obj.Content);
    if (obj.Children) {
      return (
        <Element
          key={index}
          name={name}
          type={obj.Content.type}
          {...obj.Content.props}
        >
          {Object.keys(obj.Children).map((key, index) =>
            generate(obj.Children[key], key, index)
          )}
        </Element>
      );
    }
    return (
      <Element
        key={index}
        name={name}
        type={obj.Content.type}
        {...obj.Content.props}
      />
    );
  }

  return generate(data);
}

export default useGenerator;
