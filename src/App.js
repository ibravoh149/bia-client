import React from "react";
import "./App.scss";
import HomePage from "./Pages/Home/Home";

function App(props) {
  return (
    <div className="App">
      <HomePage {...props} />
    </div>
  );
}

export default App;
