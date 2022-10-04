import React from "react";
import Meaning from "./Meaning.js";
import ReactAudioPlayer from "react-audio-player";
export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <div className="section-1">
          <p>
            <span className="label top-word">
              <strong>{props.results.word}</strong>
            </span>
          </p>
          <p>{props.results.phonetic}</p>{" "}
          <ReactAudioPlayer
            src={props.results.phonetics[0].audio}
            autoPlay
            controls
          />
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
              rel="noreferrer"
            >
              Github
            </a>
            , and hosted on{" "}
            <a
              href="https://transcendent-shortbread-f10f7b.netlify.app/"
              target="_blank"
              rel="noreferrer"
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
