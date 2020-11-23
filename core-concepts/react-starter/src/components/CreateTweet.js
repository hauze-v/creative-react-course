import React from "react";

/* When we're working with JSX, you cannot have HTML elements directly next to each other. You must encapsulate everything in a parent div */
const CreateTweet = () => {
  return (
    <form>
      <textarea cols="50" rows="5"></textarea>
      <button>Submit</button>
    </form>
  );
};

export default CreateTweet;
