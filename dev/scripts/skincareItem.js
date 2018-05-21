import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";

const SkincareItem = (props) => {
    return <div className="resultsStep slide-in-right">
        <h3>{props.name}</h3>
        <div className="description">
          <img src={props.img} alt={props.alt} />
          <p>{props.description}</p>
        </div>
      </div>;
};

export default SkincareItem;