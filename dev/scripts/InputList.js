import React from "react";

const InputList = (props) => {
    return props.skincareArray.map((step,i) => {
        return (
            <div className="inputContainer" key={i}>
                <input type="checkbox" id={step.id} value={step.value} />
                <label htmlFor={step.id}>
                    <img src={step.img} alt={step.alt}/>
                    {step.name}
                </label>
            </div>
        )
    }) 
};
export default InputList;