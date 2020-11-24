import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
  // Here is the place where you can add normal JS
  const name = "Adam Savage";
  const message = "I went to sleep today, wow.";

  // Create event functions
  const sayHelloHandler = (user) => {
    console.log(`hello there ${user}`);
  };

  return (
    <div className="App">
      {/* <CreateTweet />
      <TweetList name={name} message={message} /> */}
      <h1>Hello React</h1>
      <button onClick={() => sayHelloHandler("Mike")}>Click</button>
    </div>
  );
}

export default App;
