import React from 'react';
import ReactDOM from 'react-dom';
import skincareItem from './skincareItem';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      personalRoutine: []
    };
    this.removeStep=this.removeStep.bind();
  }
  //Add ability to remove step from their list
  removeStep(stepName) {
    console.log('remoove stepName');
  } 


  //On select add step to their personal list for the respective part of the day (morning/evening)

  //We want users to be able to check off items as they go 
  //Skincare step will be pushed to UL on click




    render() {
      return <div>
          <header className="wrapper">
            <h1>My.Skincare.Pal</h1>
            <div className="instructions" />
          </header>
          <main className="wrapper">
            {/* Routine for Morning */}
            <section className="morning">
              <h2>Morning</h2>
              <form action="">
                <input type="checkbox" id="oilCleanser" value="1" />
                <label htmlFor="oilCleanser">Oil cleanser</label>

                <input type="checkbox" id="secondCleanser" value="2" />
                <label htmlFor="secondCleanser">Second Cleanser</label>

                <input type="checkbox" id="toner" value="3" />
                <label htmlFor="toner">Toner</label>

                <input type="checkbox" id="lotion" value="4" />
                <label htmlFor="lotion">Lotion</label>

                <input type="checkbox" id="actives" value="5" />
                <label htmlFor="actives">Actives</label>

                <input type="checkbox" id="prescriptions" value="6" />
                <label htmlFor="prescriptions">Prescriptions</label>

                <input type="checkbox" id="essenceSerumAmpoule" value="7" />
                <label htmlFor="essenceSerumAmpoule">Essence/Serum/Ampoule</label>

                <input type="checkbox" id="oil" value="8" />
                <label htmlFor="oil">Oil</label>

                <input type="checkbox" id="cream" value="9" />
                <label htmlFor="cream">Cream</label>

                <input type="checkbox" id="eyeCream" value="10" />
                <label htmlFor="eyeCream">Eye Cream</label>

                <input type="checkbox" id="sleepingPack" value="11" />
                <label htmlFor="sleepingPack">Sleeping Pack</label>

                <input type="checkbox" id="sunblock" value="12"/>
                <label htmlFor="sunblock">Sun Block</label>
              </form>

              <ol>
                {
                  this.state.personalRoutine.map((routineItem,i) => {
                    return <skincareItem
                    key={i} />
                  })
                }
              </ol>
            </section>

            <section className="evening">
              <h2>Evening</h2>
              <form action="">
                <input type="checkbox" id="oilCleanser" />
                <label htmlFor="oilCleanser">Oil Cleanser</label>

                <input type="checkbox" id="secondCleanser" />
                <label htmlFor="secondCleanser">Second Cleanser</label>

                <input type="checkbox" id="toner" />
                <label htmlFor="toner">Toner</label>

                <input type="checkbox" id="lotion" />
                <label htmlFor="lotion">Lotion</label>

                <input type="checkbox" id="actives" />
                <label htmlFor="actives">Actives</label>

                <input type="checkbox" id="prescriptions" />
                <label htmlFor="prescriptions">Prescriptions</label>

                <input type="checkbox" id="essenceSerumAmpoule" />
                <label htmlFor="essenceSerumAmpoule">Essence/Serum/Ampoule</label>

                <input type="checkbox" id="oil" />
                <label htmlFor="oil">Oil</label>

                <input type="checkbox" id="cream" />
                <label htmlFor="cream">Cream</label>

                <input type="checkbox" id="eyeCream" />
                <label htmlFor="eyeCream">Eye Cream</label>

                <input type="checkbox" id="sleepingPack" />
                <label htmlFor="sleepingPack">Sleeping Pack</label>
              </form>

              <ol>

              </ol>
            </section>
          </main>
        </div>;
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
