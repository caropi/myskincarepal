import React from 'react';
import ReactDOM from 'react-dom';
// import skincareItem from './skincareItem';
import InputList from './InputList';
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
    
    
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  
  //sort their personal list by the value of each input in ascending order
  //items in inputList need to have a default of false
  
  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (snapshot) => {
      const data = snapshot.val();
      const myskincarepalArray = [];

      for (let entry in data) {
        myskincarepalArray.push(data[entry]);
      }
      console.log(myskincarepalArray);
      this.setState({skincareOptions:myskincarepalArray})
    })
    // const addStep = 
    //get all of the data from firebase store in state, then pass that data as a prop to input list 
  };
  
  handleChange(e) {

  };
  
  
  handleSubmit(e) {
    //make axios call in handle submit
    //On click of checkbox, add step to their personal list for the respective part of the day (morning/evening)

    e.preventDefault();
    console.log('jeeeiywehfjabe');


    const dbRef = firebase.database().ref('myskincarepal');

    dbRef.push(step)
  }

  removeStep() {
    //Add ability to remove step from their list (but not with checkbox)
    
  }




  //User should able to check off items as they go - but ensure that it doesn't remove from the list

  render() {
    return <div>
        <header className="wrapper">
          <h1>My.Skincare.Pal</h1>
          <div className="instructions" />
        </header>
        <main className="wrapper">
          <section className="routineInput">
            <form action="" onSubmit={this.handleSubmit}>
              <InputList 
              skincareArray={this.state.skincareOptions}  />
              <input type="submit" onSubmit={this.handleSubmit} value="Add to Routine" />
            </form>

          </section>
          <section className="results">
            <div className="morning">
              <h5>My Routine</h5>
              <ul>

              </ul>
            </div>
          </section>
        </main>
        <footer className="wrapper">
          <h4>
            Developed and designed by <a href="http://www.carolinepisano.com">
              Caroline Pisano
            </a>. Copyright &copy; 2018. All rights reserved.
          </h4>
        </footer>
      </div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
