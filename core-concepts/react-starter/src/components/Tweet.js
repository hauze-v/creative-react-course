import React from "react";

/* When we're working with JSX, you cannot have HTML elements directly next to each other. You must encapsulate everything in a parent div */
/* The component function will take in an argument props which is an object that contains the properites given from the other component */
const Tweet = ({ name, message }) => {
  const tweetDate = "24/06/2001"; // how do we send the date (tweetDate) back up to App() component. Well, we can't use props. It only works downwards.s
  /* One easy way to see if you can send props is to look at your component and see what it renders out */

  return (
    <div className="tweet">
      <h2>Name: {name}</h2>
      <h3>{message}</h3>
      <button>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
