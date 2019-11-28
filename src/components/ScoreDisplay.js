import React from "react";
import "../App.css";

function ScoreDisplay(props) {
  return <div className="ScoreDisplay">Score: {props.score}</div>;
}

export default ScoreDisplay;
