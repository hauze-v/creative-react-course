import React, { useState } from "react";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
  // State (can only be passed down, not up)
  const [name, setName] = useState("Adam Savage");
  const message = "hello";
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  return (
    <div className="App">
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} message={tweets} />
    </div>
  );
}

export default App;
