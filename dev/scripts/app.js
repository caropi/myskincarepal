import React from "react";
import ReactDOM from "react-dom";
import InputList from "./InputList";
import SkincareItem from "./SkincareItem";
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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      skincareOptions: [],
      mySkincareItems: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on("value", snapshot => {
      const data = snapshot.val();
      const myskincarepalArray = [];

      for (let entry in data) {
        data[entry].key = entry;
        myskincarepalArray.push(data[entry]);
      }
      const mySkincareItems = myskincarepalArray.filter(skincare => {
        return skincare.selected === true;
      });

      mySkincareItems.sort(function(a, b) {
        return a.value - b.value;
      });
      this.setState({
        skincareOptions: myskincarepalArray,
        mySkincareItems: mySkincareItems
      });
    });
  }

  handleChange(event) {
    const target = event.target;

    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleCheckbox(keyToUpdate, selected) {
    firebase
      .database()
      .ref(`${keyToUpdate}`)
      .update({
        selected: selected === true ? false : true
      });
  }

  handleSubmit(e) {

    e.preventDefault();
    const dbRef = firebase.database().ref("myskincarepal");
  }



  render() {
    return <div>
        <main className="wrapper inputResultContainer">
          <h1 className="tracking-in-expand responsive">
            My.Skincare.Pal <img src="../../assets/header.svg" alt="Icon of bubbles" />
          </h1>
          <h2>
            Deconstructing something a magazine probably told you to do...
            One step at a time
          </h2>
          <div className="headerFixed">
            <h1 className="tracking-in-expand">
              My.Skincare.Pal <img src="../../assets/header.svg" alt="Icon of bubbles" />
            </h1>
          </div>
          <section className="routineInput">
            <div className="selectContainer">
              <h5> Select Skincare items you already own</h5>
              <form onSubmit={this.handleSubmit}>
                {this.state.skincareOptions.map((skincareOption, i) => {
                  return <InputList key={i} selected={skincareOption.selected} firebaseKey={skincareOption.key} id={skincareOption.key} handleCheckbox={this.handleCheckbox} name={skincareOption.name} img={skincareOption.img} alt={skincareOption.alt} />;
                })}
              </form>
            </div>

            <div className="yourRoutine responsiveShift">
              <h5>Your Routine Order and Info</h5>
              <div className="yourRoutineStepContainer">
                {this.state.mySkincareItems.map((mySkincareItems, i) => {
                  return <SkincareItem key={i} firebaseKey={mySkincareItems.key} name={mySkincareItems.name} description={mySkincareItems.description} img={mySkincareItems.img} alt={mySkincareItems.alt} waitTime={mySkincareItems.waitTime} />;
                })}
              </div>
            </div>
            <div className="footerText">
              <h3>
                My.Skincare.Pal is not a replacement for a dermatologist. Just remember folks, your mileage may vary, and <a href="https://www.reddit.com/r/SkincareAddiction/">
                  Reddit
                </a> is your friend.
              </h3>
              <h4>
                Developed and designed by <a href="http://www.carolinepisano.com">
                  Caroline Pisano
                </a>. Copyright &copy; 2018. All rights reserved.
              </h4>
            </div>
          </section>
          <section className="results">
            <div className="yourRoutine">
              <h5>You Routine Order and Info</h5>
              <div className="yourRoutineStepContainer">
                {this.state.mySkincareItems.map((mySkincareItems, i) => {
                  return <SkincareItem key={i} firebaseKey={mySkincareItems.key} name={mySkincareItems.name} description={mySkincareItems.description} img={mySkincareItems.img} alt={mySkincareItems.alt} waitTime={mySkincareItems.waitTime} />;
                })}
              </div>
            </div>
          </section>
        </main>
      </div>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
