import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../font.css"
import Pages from "components/pages";
import Buttons from "components/buttons";
import image from "../assets/images/image_50376449.JPG"
class App extends React.Component {
  render() {
    return (
      <div style={{
        height: '700px'
      }}> 
        <div>App title</div>
        <Pages/>
        <Buttons />
        <image src={image} style={{

          width: '500px',
          height: '500px'
        }}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
