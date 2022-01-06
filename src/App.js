import React from "react";
import {useState} from "react";
import Counter from "./components/counter";

function App() {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState("Text");

  return (
    <div className="App">
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;
