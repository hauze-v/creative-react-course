import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

/* When we're working with JSX, you cannot have HTML elements directly next to each other. You must encapsulate everything in a parent div */
const CreateTweet = ({ textInput, setTextInput, tweets, setTweets }) => {
  // Functions
  const userInputHandler = (event) => {
    setTextInput(event.target.value);
  };

  const submitTweetHandler = (event) => {
    event.preventDefault(); // prevents the default behavior of a form refreshing the page on submit
    setTweets([...tweets, { message: textInput, id: uuidv4() }]);
    setTextInput("");
  };

  return (
    <form onSubmit={submitTweetHandler}>
      <textarea
        value={textInput}
        onChange={userInputHandler}
        cols="50"
        rows="5"
      ></textarea>
      <button>Submit</button>
    </form>
  );
};

export default CreateTweet;
