import React from "react";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="text-audio">
          <span className="label">
            <p>
              <strong>{props.results.word}</strong>
            </p>
          </span>
          <p>
            {" "}
            {props.results.meanings.map(function (meaning, index) {
              return meaning.definitions[0].definition;
            })}
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
