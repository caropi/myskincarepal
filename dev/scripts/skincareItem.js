import React from 'react';

const SkincareItem = (props) => {
    return (
        <div className="resultsStep slide-in-right">
            <h3>{props.name}</h3>
            <div className="description">
                <img src={props.img} alt={props.alt} />
                <div className="text-container">
                    <p>
                        {props.description}
                    </p>
                        <i className="fas fa-stopwatch" /><strong> Time to wait before moving to next step:</strong> {props.waitTime}
                    <p />
                </div>
            </div>
        </div>
    )
};

export default SkincareItem;