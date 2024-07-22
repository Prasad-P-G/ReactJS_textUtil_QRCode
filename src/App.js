import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Home from "./components/Home";
import QrcodeGenerator from "./components/QrcodeGenerator";
import About from "./components/About";
import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QR_Code_Generator from "./components/QR_Code_Generator";

function App() {
  const changeTheme = () => {
    setStyle(
      ctmStyle.color === "white"
        ? {
            color: "Black",
            backgroundColor: "white",
            border: "2px solid black",
          }
        : { color: "white", backgroundColor: "grey", border: "2px solid black" }
    );
  };

  const [ctmStyle, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
    border: "2px solid black",
  });

  return (
    <Router>
      <Navbar title="TextUtil" aboutText="About"></Navbar>

      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Qrgenerator" element={<QrcodeGenerator />}></Route>
        <Route
          path="/home"
          element={<TextForm heading="Enter the text to analyze" />}
        ></Route>
        {/* <Route path="/qrcode_generator" element={<QR_Code_Generator />}></Route> */}
        <Route
          path="/"
          element={<TextForm heading="Enter the text to analyze"></TextForm>}
        >
          {/* <div style={ctmStyle}>
            <div className="my-3">
              
            </div>
          </div> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
