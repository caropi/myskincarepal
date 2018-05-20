import React from 'react';
import ReactDOM from 'react-dom';
// import skincareItem from './skincareItem';
import InputList from './InputList';
import SkincareItem from './SkincareItem';
import firebase from "firebase"; 

const config = {
  apiKey: "AIzaSyDk8V33MtF9noyzOrUeOiYP2YquU-Ofd_c",
  authDomain: "myskincarepal.firebaseapp.com",
  databaseURL: "https://myskincarepal.firebaseio.com",
  projectId: "myskincarepal",
  storageBucket: "myskincarepal.appspot.com",
  messagingSenderId: "36948592241"
};
firebase.initializeApp(config);


// var provider = new firebase.auth.GoogleAuthProvider();


class App extends React.Component {
  //Skincare step will be pushed to ol on click
  constructor() {
    super();
    this.state = {
      skincareOptions: [],
      mySkincareItems: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //sort their personal list by the value of each input in ascending order
  //items in inputList need to have a default of false
  //Pulling data from firebase database (am using it like an API) and am turning it into an array to be used in InputList.js
  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on("value", snapshot => {
      const data = snapshot.val();
      const myskincarepalArray = [];

      for (let entry in data) {
        data[entry].key = entry;
        myskincarepalArray.push(data[entry]);
      }
      const mySkincareItems = myskincarepalArray.filter((skincare) => {
        return skincare.selected === true;
      });

      mySkincareItems.sort(function(a,b) {
        return a.value - b.value;
      })
      console.log(mySkincareItems)
      this.setState({ 
        skincareOptions: myskincarepalArray, 
        mySkincareItems: mySkincareItems});

    });
    // console.log(this.state.mySkincareItems);
  }

  handleChange(event) {
    const target = event.target;
    // const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleCheckbox(keyToUpdate, selected) {
    firebase.database().ref(`${keyToUpdate}`)
      .update({
        selected: selected === true ? false : true
      });
  }

  handleSubmit(e) {
    //make axios call in handle submit
    //On click of checkbox, add step to their personal list for the respective part of the day (morning/evening)
    //push data on submit to firebase and pull true values to li
    e.preventDefault();
    const dbRef = firebase.database().ref("myskincarepal");
  }


  //User should able to check off items as they go - but ensure that it doesn't remove from the list

  render() {
    return (
      <div>
        <header className="wrapper">
          <h1>My.Skincare.Pal</h1>
          <div className="instructions" />
        </header>
        <main className="wrapper">
          <section className="routineInput">
            <form onSubmit={this.handleSubmit}>
              {this.state.skincareOptions.map(skincareOption => {
                return (
                  <InputList
                    selected={skincareOption.selected}
                    firebaseKey={skincareOption.key}
                    id={skincareOption.key}
                    handleCheckbox={this.handleCheckbox}
                    name={skincareOption.name}
                    img={skincareOption.img}
                    alt={skincareOption.alt}
                  />
                );
              })}
              <input type="submit" value="Add to Personal Routine"/>
            </form>
          </section>
          <section className="results">
            <div className="yourRoutine">
              <h5>My Routine</h5>
              <ul>
                {this.state.mySkincareItems.map(mySkincareItems=> {
                  return (
                    <SkincareItem 
                    firebaseKey={mySkincareItems.key}
                    name={mySkincareItems.name}
                    description={mySkincareItems.description}
                    />
                  )
                })}
              </ul>
            </div>
          </section>
        </main>
        <footer className="wrapper">
          <h4>
            Developed and designed by{" "}
            <a href="http://www.carolinepisano.com">Caroline Pisano</a>.
            Copyright &copy; 2018. All rights reserved.
          </h4>
        </footer>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
