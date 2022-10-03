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
        </div>
      </div>
    );
  } else {
    return null;
  }
}

/* Mapping: {props.results.meanings.map(function (meaning, index) {
                return meaning.definitions[0].definition;
              })}*/

/* HTML: <div className="text-audio">
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

        <p>
          <span className="label">
            <strong>Definition: </strong>
          </span>{" "}
          {props.meaning}
        </p>
      </div>*/
