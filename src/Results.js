import React from "react";
import Meaning from "./Meaning.js";
export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="section-1">
          <p>
            <span className="label">
              <strong>{props.results.word}</strong>
            </span>
          </p>
          <p>{props.results.phonetic}</p>{" "}
        </div>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
        <footer>
          <p>
            Coded by Maya Barbir, open-sourced on{" "}
            <a
              href="https://github.com/Mayadev3/dictionary-react"
              target="_blank"
            >
              Github
            </a>
            , and hosted on{" "}
            <a
              href="https://transcendent-shortbread-f10f7b.netlify.app/"
              target="_blank"
            >
              Netlify
            </a>
          </p>
        </footer>
      </div>
    );
  } else {
    return null;
  }
}
/*   {props.results.phonetics.map(function (phonetic, index) {
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
        </div>*/
