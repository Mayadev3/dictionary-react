import React from "react";
import "./Synonyms.css";
export default function Synonyms(props) {
  return (
    <div className="Synonyms">
      {props.synonyms.map(function (synonym, index) {
        return <li key={index}>{synonym}</li>;
      })}
    </div>
  );
}
