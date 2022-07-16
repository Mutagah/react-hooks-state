import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  //Testing while using the call back in the set function
  const [countDownTrial, setCountdownTrial] = useState(10)
  function increment() {
    console.log(`Before setState : ${count}`)
    setCount(count + 1);
    console.log(`After setState : ${count}`)
  }
  function decrement(){
    console.log(`Before setState(Counting Downwards) : ${countDownTrial}`)
    setCountdownTrial((countingdownwards) => countingdownwards - 1)
    console.log(`After setState(Counting Downwards) : ${countDownTrial}`)
  }

  return <>
  <button onClick={increment}>I have been clicked {count} times</button>;
  <button onClick={decrement}>I am decrementing a number here: {countDownTrial}</button>
  </>
}

export default Counter;
