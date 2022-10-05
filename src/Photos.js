import React from "react";
import "./Photos.css";
import Footer from "./Footer.js";
export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <div className="Photos ">
        <div className="row section-3">
          {props.photos.map(function (photo, index) {
            return (
              <div className=" col-4 img-container" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.tiny}
                    className=" pexelImage img-fluid"
                    rel="noreferrer"
                    alt={photo.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    );
  } else {
    return null;
  }
}
