import React from 'react';

const SkincareItem = (props) => {
    return (<li>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <img src={props.img} alt={props.alt}/>
      </li>
      )
};

export default SkincareItem;