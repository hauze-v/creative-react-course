import React, { useState } from "react";

/* When we're working with JSX, you cannot have HTML elements directly next to each other. You must encapsulate everything in a parent div */
const CreateTweet = () => {
  // State (can only be passed down, not up)
  const [textInput, setTextInput] = useState("");

  // Functions
  const userInputHandler = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <form>
      <textarea
        value={textInput}
        onChange={userInputHandler}
        cols="50"
        rows="5"
      ></textarea>
      <button onClick={userInputHandler}>Submit</button>
      <h1 onClick={() => setTextInput("")}>{textInput}</h1>
    </form>
  );
};

export default CreateTweet;
