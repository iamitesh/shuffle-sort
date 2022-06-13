import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));

      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }
  function shortArray() {
    let newArr = [...count];
    newArr.sort((a, b) => (a < b ? -1 : 1));
    setCount(newArr);
  }

  const shuffleBoxes = () => {
    setCount(shuffleArray(count));
  };
  return (
    <div>
      <h1> Shuffle and Sort</h1>
      <div className="dashboard">
        <div className="wrapper">
          {count.map((ele) => (
            <div className="items">{ele}</div>
          ))}
        </div>
        <div className="btn-wrapper">
          <button className="change-button sort" onClick={shortArray}>
            SORT
          </button>
          <button className="change-button sort" onClick={shuffleBoxes}>
            SHUFFLE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
