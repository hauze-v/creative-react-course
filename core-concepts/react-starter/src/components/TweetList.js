import React from "react";
import Tweet from "./Tweet";

/* With JSX and props, we cannot pass directly from App() down to Tweet() so we have to perform what's known as props drilling and pass from App() to TweetList() to Tweet(). */

const TweetList = ({ name, message, setName }) => {
  return (
    <div className="tweet-list">
      <Tweet name={name} message={message} />
      <Tweet name={name} message={message} />
      <Tweet name={name} message={message} />
      <Tweet name={name} message={message} />
    </div>
  );
};

export default TweetList;
