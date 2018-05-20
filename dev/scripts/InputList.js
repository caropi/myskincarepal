import React from "react";

// toggle(event) {
//    this.setState({checkboxState: !this.state.checkboxState});
// }

class InputList extends React.Component {
    render(){
        return (<div className="inputContainer">
            <input type="checkbox" id={this.props.firebaseKey} checked={this.props.selected} onChange={()=>this.props.handleCheckbox(this.props.firebaseKey, this.props.selected)}/>
            <label htmlFor={this.props.firebaseKey}>
            <img src={this.props.img} alt={this.props.alt} />
              {this.props.name}
            </label>
          </div>) 
    }
}
export default InputList;