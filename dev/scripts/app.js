import React from 'react';
import ReactDOM from 'react-dom';
// import skincareItem from './skincareItem';
import InputList from './InputList';
import firebase from "firebase";

var config = {
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
  //Create checkbox, starting point
  //On click of checkbox,  add step to their personal list for the respective part of the day (morning/evening)
  //sort their personal list by the value of each input in ascending order
  //Skincare step will be pushed to ol on click
  constructor() {
    super();
    this.state = {

    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  


  componentDidMount() {

  };

  handleChange(e) {
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log('jeeeiywehfjabe');
  }

  //
  //Add ability to remove step from their list (but not with checkbox)


  //User should able to check off items as they go - but ensure that it doesn't remove from the list

  render() {
    return (
      <div>
        <header className="wrapper">
          <h1>My.Skincare.Pal</h1>
          <div className="instructions" />
        </header>
        <main className="wrapper">
          {/* Routine for Morning */}
          <section className="routineInput">
            {/* User checks off morning routine */}
            <form action="" onSubmit={this.handleSubmit}>
              <InputList />
              <input type="submit" onSubmit={this.handleSubmit} value="Add to Routine"/>
            </form>

            <div className="personalList">
              <h5>My Personal Routine</h5>
              
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
