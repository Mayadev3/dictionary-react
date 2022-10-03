import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms.js";
export default function Meaning(props) {
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
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
