import React, { useEffect, useState } from "react";
import Button from "./ButtonComponent";

const ParentComponent = () => {
  const [counter, setCounter] = useState(0);
  const [status, setStatus] = useState(false);
  let timer;
  const startButton = () => {
    setStatus(true);
  };
  const stopButton = () => {
    setStatus(false);
  };
  const Reset = () => {
    setStatus(false);
    setCounter(0);
    clearTimeout(timer);
  };
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setCounter(counter + 1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [counter, status]);

  return (
    <div>
      <p>{counter}</p>
      <Button buttonName={"Start"} btnHandler={startButton} />
      <Button buttonName={"Stop"} btnHandler={stopButton} />
      <Button buttonName={"Reset"} btnHandler={Reset} />
    </div>
  );
};

export default ParentComponent;
