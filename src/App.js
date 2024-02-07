import React, {useState} from "react";
import data from './data'
import Tours from "./components/Tours";
const App = () => {
  const [tours, setTours] = useState(data);
  // this data is imported from data.js file
  //  so all data is gone to tours(object) in initialization
  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0) {
    return (
        <div className="refresh">
          <h2>No Tours Left</h2>
          <button className="btn-white" onClick={() => setTours(data)}>
            Refresh
          </button>
        </div>
    );
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
      {/* passing tours(in line 7 which contains all the data) to Tours component
      also passing removeTours as a prop function to pass the id of the card to be removed*/}
    </div>
  )
};

export default App;
