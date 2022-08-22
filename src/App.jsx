import "./App.css";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("What would you like to send?");
  const [number, setNumber] = useState(0);

  const balance = 100;

  const newBalance = () => {
    if (number > balance) {
      setMessage("You do not have enough funds");
      console.log("broke");
    } else {
      setMessage("Thank you for your transfer");
      console.log("success");
    }
  };

  const newValue = (event) => {
    setNumber(event.target.valueAsNumber);
  };

  return (
    <>
      <div className="text-center">
        <header className="">
          <h1>Welcome to My Piggy Bank</h1>
        </header>
      </div>
      <div>
        <h2>Your balance is {balance} </h2>
        <label htmlFor="transfer">How much would you like to transfer?</label>
        <input
          type="number"
          placeholder="Enter your desired transfer balance"
          id="transfer"
          name="transfer"
          onChange={newValue}
        />
      </div>
      <button
        className="bg-green-600"
        type="submit"
        label="send"
        id="send"
        onClick={newBalance}
      >
        Send
      </button>
      <label htmlFor="feedback" hidden>
        Feedback
      </label>
      <p id="feedback" name="feedback">
        {message}
      </p>
    </>
  );
}

export default App;
