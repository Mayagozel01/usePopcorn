import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PropTypes from "prop-types";
import StarRating from "./StarRating";

StarRating.protoTypes={
  maxRating:PropTypes.number.isRequired,
  color:PropTypes.string,
  size:PropTypes.number,
  defaultRating:PropTypes.number
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating maxRating = {5}/> */}
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={24} color="red" className="test" defaultRating={2} /> */}

    {/* <Test /> */}
  </React.StrictMode>
);
