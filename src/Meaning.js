import React from "react";
import "./Meaning.css";
export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <div className="section-2">
        <p>
          <span className="label">
            <strong>{props.meaning.partOfSpeech}</strong>
          </span>
        </p>
        <p>{props.meaning.definitions[0].definition}</p>
        <p className="example">
          <em>{props.meaning.definitions[0].example}</em>
        </p>
        {props.meaning.synonyms.map(function (synonym, index) {
          return (
            <div key={index} className="synonyms">
              {synonym}
            </div>
          );
        })}
      </div>
    </div>
  );
}
