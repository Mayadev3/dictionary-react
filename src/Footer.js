import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer">
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
}
