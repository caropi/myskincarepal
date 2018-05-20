import React from "react";
//add boolean turnery operater true false 



class InputList extends React.Component {
    render(){
        return (
        <div className="inputContainer">
            <input type="checkbox" className="visuallyhidden" id={this.props.firebaseKey} checked={this.props.selected} onChange={()=>this.props.handleCheckbox(this.props.firebaseKey, this.props.selected)}/>
            <label htmlFor={this.props.firebaseKey}>
            {this.props.name}
            </label>
        </div>) 
    }
}
export default InputList;