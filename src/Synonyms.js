import React from "react";
import "./Synonyms.css";
export default function Synonyms(props) {
  console.log(props.synonyms);
  return (
    <div className="Synonyms">
      {props.synonyms.map(function (synonym, index) {
        return (
          <div key={index}>
            <ul>
              <li className="synonymss">{synonym}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
