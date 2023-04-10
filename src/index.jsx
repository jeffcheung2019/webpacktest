import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../font.css"
import Pages from "components/pages";
import Buttons from "components/buttons";

class App extends React.Component {
  render() {
    return (
      <div> 
        <div>App title</div>
        <Pages/>
        <Buttons />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
