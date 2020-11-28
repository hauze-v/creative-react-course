import React from "react";
import Tweet from "./Tweet";

/* With JSX and props, we cannot pass directly from App() down to Tweet() so we have to perform what's known as props drilling and pass from App() to TweetList() to Tweet(). */
const TweetList = ({ name, tweets, setTweets }) => {
  return (
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <Tweet
          setTweets={setTweets}
          name={name}
          tweet={tweet}
          tweets={tweets}
          key={tweet.id}
        />
      ))}
    </div>
  );
};

export default TweetList;
