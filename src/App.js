import React, { useState, } from "react";
import { useSelector } from "react-redux";
import "./App.css";
function App() {
  const state=useSelector((state)=>state);
  const [ind, setInd] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  const [showResult, setShowResult] = useState(false);

  function checkAnswer() {
    let correctValue = state.questions[ind].correctAns;
    if (selectedValue == correctValue) {
      setScore(score + 1);
    }
    if (state.questions.length == ind + 1) {
      setShowResult(true);
    } else {
      setInd(ind + 1);
    }
  }
  console.log(score);
  return (
    <div className="App">
      <div className="p-2">
        <div className="container">
          {showResult ? (
            <div className="p-3 bg-success rounded shadow text-dark">
              <p className="fs-3">Result</p>
              <progress
                className="p-3"
                id="file"
                value={score}
                max={state.questions.length}
              ></progress>
              <h3>{((score / state.questions.length) * 100).toFixed(2)} %</h3>
              <h3>
                {(score / state.questions.length) * 100 < 60 ? "Fail" : "Pass"}{" "}
              </h3>
            </div>
          ) : null}
        </div>

        {!showResult ? (
          <div className="container p-5 my-2 rounded shadow bg-dark text-white">
            <p className="fs-4">
              Question Number <span className="fs-1">{ind + 1}</span> of{" "}
              {state.questions.length}
            </p>
            <h3>{state.questions[ind].question}</h3>
          </div>
        ) : null}
        {!showResult ? (
          <div className="container p-5 my-2 rounded shadow bg-secondary">
            <div className="row">
              {state.questions[ind].options.map((e, i) => {
                return (
                  <div key={i} className="col-md-4 py-2">
                    <button
                      onClick={() => setSelectedValue(e)}
                      className="btn btn-light rounded px-5"
                    >
                      {e}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
        {!showResult ? (
          <div className="container">
            <button
              onClick={() => checkAnswer()}
              className="btn btn-primary px-5 rounded-pill"
            >
              Next
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}


export default App;
