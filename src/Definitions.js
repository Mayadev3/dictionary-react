import React from "react";

export default function Definitions(props) {
  return (
    <div className="Definitions">
      {" "}
      <div className="text-audio">
        <p>
          <span className="label">
            <strong>text: </strong>
          </span>{" "}
          "{props.text}",
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
