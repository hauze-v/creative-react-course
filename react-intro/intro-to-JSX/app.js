// Babel is a JavaScript transpiler and takes beautiful JSX syntax and turns it into the ugly React.createElement() code we don't want to write

function App(){
  const time = new Date().toLocaleDateString();
  const buttonStyle = {color: "red", fontSize: 20};
  const alertHandler = () => {
    alert("Hey");
  }
  
  return(
    <div>
      <h1>Hello React</h1>
      <p>The time is {time}</p>
      <button onClick={alertHandler} style={buttonStyle}>Submit</button>
      <Tweet/>
    </div>
  );
}

// Create another component
function Tweet(){
  return (
    <div>
      <h2>Tweet</h2>
      <p>This stuff is pretty cool, no?</p>
    </div>
  );
}

// Render the JSX elements to the screen
ReactDOM.render(<App />, document.querySelector("#root"));

// In React, we normally have a main App component which holds the smaller, sub-components.