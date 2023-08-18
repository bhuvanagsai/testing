import React from "react";
import ReactDOM from "react-dom";
import ParentComponent from "./ParentComponent";

const App = () => {
  return (
    <>
      <ParentComponent />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
