import React from "react";
import componentsImage from "../assets/images/components.png";
const Concept = (props) => {
  const mapping = props.data.map((item) => {
    return (
      <li>
        <img src={componentsImage} alt={item.title} />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </li>
    );
  });

  return <ul id="concepts">{mapping}</ul>;
};

export default Concept;
