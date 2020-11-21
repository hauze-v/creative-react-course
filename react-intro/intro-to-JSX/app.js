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
    </div>
  );
}

ReactDOM.render(React.createElement(App), document.querySelector("#root"));