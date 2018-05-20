import React from 'react';

const SkincareItem = (props) => {
    return (
        <li>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </li>)
};

export default SkincareItem;