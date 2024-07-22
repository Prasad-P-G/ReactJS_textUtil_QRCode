import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  let themeText = "Enable Dark Mode";
  const changeTheme = () => {
    if (themeText === "Enable Dark Mode") {
      themeText = "Disable Dark Mode";
    } else {
      themeText = "Enable Dark Mode";
    }
    setStyle(
      ctmStyle.color === "white"
        ? {
            color: "Black",
            backgroundColor: "white",
          }
        : { color: "white", backgroundColor: "grey" }
    );
  };

  const [ctmStyle, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const handleUpClick = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearClick = () => {
    setText("");
  };
  const handleCopyClick = () => {
    let newText = document.getElementById("textAreaBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container mb-2" style={ctmStyle}>
        <h1>{props.heading}</h1>

        <div className="mb-2" style={ctmStyle}>
          <button
            className="d-flex btn btn-primary "
            value={themeText}
            onClick={changeTheme}
          >
            Enable/disable Dark Mode
          </button>
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            style={{
              border: "2px solid lighblue",
              backgroundColor: "lightgray",
            }}
            className="form-control"
            id="textAreaBox"
            value={text}
            rows="8"
            placeholder="Enter text here"
            onChange={handleOnChange}
          ></textarea>
          <button className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary my-3" onClick={handleLoClick}>
            Convert to LowerCase
          </button>
          <button
            className="btn btn-primary my-3 mx-3"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button
            className="btn btn-primary my-3 mx-3"
            onClick={handleCopyClick}
          >
            Copy Text
          </button>
        </div>
        <div className="container">
          <h2>Your text summery</h2>
          <p>
            {text.length === 0 ? 0 : text.split(" ").length} Words ,{" "}
            {text.length} Characters
          </p>
          <p>
            {text.length === 0 ? 0 : 0.08 * text.split(" ").length} Minutes to
            read
          </p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
