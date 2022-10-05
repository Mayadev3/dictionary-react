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
          <p>{props.results.phonetic}</p>
          {props.results.phonetics.map(function (phonetic, index) {
            if (phonetic.audio)
              return (
                <ReactAudioPlayer
                  src={phonetic.audio}
                  autoPlay={false}
                  controls
                  key={index}
                />
              );
            else return null;
          })}
        </div>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
