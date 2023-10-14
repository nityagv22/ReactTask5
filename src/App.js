import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(0);
  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    setAge(age);
  };
  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <h4>Enter your date of birth</h4>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      /><br/>
      <button onClick={calculateAge}>Calculate Age</button>
      <h2>Your age is {age} years old</h2>
    </div>
  );
};
export default App;