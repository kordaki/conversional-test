import React from "react";

// components
import Box from "../components/Box";
import List from "../components/List";
import Paragraph from "../components/Paragraph";
import DefaultElement from "../components/DefaultElement";

function useGenerator(data) {
  function detectElement({ type }) {
    switch (type) {
      case "BoxComponent":
        return Box;
      case "ListComponent":
        return List;
      case "ParagraphComponent":
        return Paragraph;
      case "H1Component":
      case "H2Component":
      default:
        return DefaultElement;
    }
  }

  function generate(obj, name) {
    if (!obj.Content) return;
    const Element = detectElement(obj.Content);
    if (obj.Children) {
      return (
        <Element name={name} type={obj.Content.type} {...obj.Content.props}>
          {Object.keys(obj.Children).map((key) =>
            generate(obj.Children[key], key)
          )}
        </Element>
      );
    }
    return (
      <Element name={name} type={obj.Content.type} {...obj.Content.props} />
    );
  }

  return generate(data);
}

export default useGenerator;
