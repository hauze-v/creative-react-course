// First argument = type of element, second = attributes, third = content
React.createElement("h1", null, "Hello React");

// React DOM renders out the React code to the screen. Takes in a React element, and a location to render
ReactDOM.render(React.createElement("h2", null, "How are you"), document.querySelector("#root"));

// Adding multiple elements using a function and base div
function App(){
  const time = new Date().toLocaleDateString();
  const s = {
    color: "red",
    fontSize: 50
  }
  
  return (React.createElement("div", null, [
    React.createElement("h1", null, "Hello React"),
    React.createElement("h1", {style: s}, time),
    React.createElement("button", null, "Submit"),
  ]));
}

ReactDOM.render(React.createElement(App), document.querySelector("#root"));

// Note that this is not the way we write React code this is what's happening behind the scenes