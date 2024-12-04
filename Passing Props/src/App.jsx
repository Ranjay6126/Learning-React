import Card from "./assets/components/Card";
import "./App.css";
import { useState } from "react";
import Button from "./assets/components/Button";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <Button handleClick={handleClick} text="click me">
          <h1>{count}</h1>
        </Button>

        {/* 
        <Card name="Ranjay Prajapati">
          <h1>Best try I have given first Time</h1>
          <p>Trying to be consistent in this</p>
          <p>Will complete the coures soon</p>

       </Card>

       <Card children="Mai ek children hu">
        
        </Card> */}
      </div>
    </>
  );
}

export default App;
