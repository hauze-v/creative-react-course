import React, { useState } from "react";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
  // Here is the place where you can add normal JS
  // const [name, setName] = useState("Adam Savage");

  // Create event functions
  // const sayHelloHandler = (event) => {
  //   setName("Florin Pop");
  // };

  const [name, setName] = useState("Adam Savage");
  const message = "hello";

  return (
    <div className="App">
      <CreateTweet />
      <TweetList name={name} message={message} />
    </div>
  );
}

export default App;
