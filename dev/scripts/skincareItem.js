import React from 'react';

const SkincareItem = (props) => {
    return (<div className="resultsStep">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <img src={props.img} alt={props.alt}/>
      </div>
      )
};

export default SkincareItem;