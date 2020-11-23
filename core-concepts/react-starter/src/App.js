import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
  // Here is the place where you can add normal JS
  const name = "Adam Savage";
  const message = "I went to sleep today, wow.";

  return (
    <div className="App">
      <h1>Hello React</h1>
      <CreateTweet />
      <TweetList name={name} message={message} />
    </div>
  );
}

export default App;
