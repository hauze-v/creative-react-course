import React from "react";
import "../styles/Tweet.scss";

/* When we're working with JSX, you cannot have HTML elements directly next to each other. You must encapsulate everything in a parent div */
/* The component function will take in an argument props which is an object that contains the properites given from the other component */
const Tweet = ({ name, tweet, setTweets, tweets }) => {
  const deleteTweet = () => {
    // Determine which tweet needs to be deleted
    setTweets(tweets.filter((state) => state.id !== tweet.id));
  };

  return (
    <div className="tweet">
      <h2>Name: {name}</h2>
      <h3>{tweet.message}</h3>
      <button onClick={() => deleteTweet()}>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
