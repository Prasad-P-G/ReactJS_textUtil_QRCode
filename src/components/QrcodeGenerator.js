import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useRef, useState } from "react";
import QRCode from "react-qr-code";
import ReactToPrint from "react-to-print";
import CryptoJS from "crypto-js";

const pageStyle = `

@page{
    size: 80mm 80mm
};

@media all{
    .pageBreak{
        dispay:none
    }
};

@media print{
    .pageBreak{
        page-break-before:always;
    }
}
    `;

export default function QrcodeGenerator() {
  const [CustomerId, setCustomerId] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [encrptedData, setEncrptedData] = useState("");

  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();

  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  const [isActive, setStatus] = useState("false");

  let qrInputValue =
    inputValue +
    date.getDate() +
    date.getMonth() +
    date.getFullYear() +
    date.getHours() +
    date.getMinutes() +
    date.getSeconds();

  const ref = useRef();

  const SECRET_PASS = "XkhZG4fW2t2W";

  const encryptData = () => {
    try {
      const data = CryptoJS.AES.encrypt(
        JSON.stringify(inputValue),
        SECRET_PASS
      ).toString();
      setEncrptedData(data);
      console.log(data);
      //setErrorMessage("");
    } catch (error) {
      //setErrorMessage("Encryption failed. Please check your input.");
    }
  };

  const onIdChange = (event) => {
    let id = event.target.value;

    setInputValue(id.toLocaleUpperCase());
    encryptData();
    setCustomerId(id.toLocaleUpperCase());

    let status = id.length > 0 ? false : true;
    setStatus(status);
    console.log(status);
  };

  return (
    <>
      {/* <h1>{qrInputValue}</h1> */}

      <div
        className="container flex-d mt-5"
        style={{
          backgroundColor: "lightgray",
          width: "50%",
          height: "100%",
        }}
      >
        <div className="container">
          <h3 className="mt-5">QR CODE GENERATOR</h3>
          <input
            className="mt-2"
            type="text"
            value={inputValue}
            onChange={onIdChange}
            placeholder="Enter the Customer ID"
            style={{ height: "30px" }}
          ></input>
          <p
            className="mt-2"
            style={{
              backgroundColor: "lightseagreen",
              fontweight: "bold",
              fontFamily: "Century Gothic",
              width: "400px",
            }}
          >
            Your Id preview : {inputValue}
          </p>
        </div>
        <div className="container flex-d mt-3">
          <QRCode
            ref={ref}
            width={1}
            height={40}
            bgColor="white"
            fgColor="black"
            value={encrptedData}
            preserveAspectRatio="*"
            type="password"
          ></QRCode>
        </div>
        <div
          className="container flex-d mt-2 mx-4 my-4"
          style={{ paddingBottom: "10px" }}
        >
          <ReactToPrint
            trigger={() => (
              <button
                disabled={isActive}
                className="btn btn-primary mt-3 flex-d"
              >
                Print QR Code
              </button>
            )}
            content={() => ref.current}
            pageStyle={pageStyle}
          ></ReactToPrint>
          {/* <button disabled={isActive} className="btn btn-primary mt-3 flex-d">
            Print QR Code
          </button> */}
          {/* <button
            disabled={isActive}
            style={{
              backgroundColor: "lightgrey",
              color: "blue",
              fontweight: "bold",
              fontFamily: "Century Gothic",
              border: "1px solid",
            }}
            className="btn btn-warning mt-3 flex-d"
          >
            Print QR Code
          </button> */}
        </div>
      </div>
    </>
  );
}
