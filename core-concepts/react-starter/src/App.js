import React, { useState, useEffect } from "react";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";
import "./styles/App.css";

function App() {
  // State (can only be passed down, not up)
  const [name, setName] = useState("Adam Savage");
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  /* The second argument we pass to useEffect determines which component update the function should run after
     Note that it will also run immediately when the main component (file) is mounted/run */
  useEffect(() => {
    console.log("we run a function, yay!");
  }, [tweets]);

  return (
    <div className="App">
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;
