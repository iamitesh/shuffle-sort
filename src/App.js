import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState([3, 4, 5, 6, 7, 8, 9, 1, 2]);
  // useEffect(() => {
  //   console.log(count);
  // }, [count]);
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }
  function shortArray() {
    console.log("sort");
    let newArr = [...count];
    newArr.sort((a, b) => (a < b ? -1 : 1));
    setCount(newArr);
  }

  const shuffleBoxes = () => {
    console.log("shu");
    let newArr = shuffleArray(count);
    setCount([...newArr]);
    console.log(count);
  };
  return (
    <div>
      <h1> Shuffle and Sort</h1>
      <div className="dashboard">
        <div className="wrapper">
          {count.map((ele, key) => (
            <div className="items" id={`item-${key}`} key={key}>
              {ele}
            </div>
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
