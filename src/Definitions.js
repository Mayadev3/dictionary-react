import React from "react";

export default function Definitions(props) {
  return (
    <div className="Definitions">
      {" "}
      <div className="text-audio">
        <p>
          {" "}
          <span className="label">
            <strong>Word: </strong>
          </span>
          {props.wordSearched}
        </p>
        <p>
          <span className="label">
            <strong>Phonetics: </strong>
          </span>{" "}
          {props.phonetics}
        </p>
        <p>
          <span className="label">
            <strong>audio: </strong>
            <audio src={props.audio}></audio>
          </span>
        </p>
      </div>
    </div>
  );
}
