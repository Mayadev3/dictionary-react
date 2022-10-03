import React from "react";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="section-1">
          <span className="label">
            <p>
              <strong>{props.results.word}</strong>
            </p>
          </span>
          <p>{props.results.phonetic}</p>
          <p>
            {" "}
            {props.results.meanings.map(function (meaning, index) {
              return meaning.definitions[0].definition;
            })}
          </p>
          {props.results.phonetics.map(function (phonetic, index) {
            return phonetic.audio;
          })}
        </div>
        <div className="section-2">
          <span className="label">
            <strong>{props.results.meanings[0].partOfSpeech}</strong>
          </span>
          <p className="mt-2">
            {props.results.meanings[0].definitions[0].definition}
          </p>
          <span className="label">
            <strong>{props.results.meanings[1].partOfSpeech}</strong>
          </span>
          <p className="mt-2">
            {props.results.meanings[1].definitions[0].definition}
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
