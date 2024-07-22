import React from "react";

export default function QR_Code_Generator() {
  return (
    <>
      <div className="codeGenerator">
        <h1>QR CODE GENERATOR</h1>
        <div className="input-box">
          <div className="generator">
            <input type="text" placeholder="Enter text to Encode"></input>
            <button className="btn btn-primary">Generate Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
