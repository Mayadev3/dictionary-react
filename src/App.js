import hiker from "./hiker.png";
import "./App.css";
import Dictionary from "./Dictionary.js";
import "./Dictionary.css";

export default function App() {
  return (
    <div className="App">
      <div className="header-container">
        <div className="hiker-image-container">
          <img src={hiker} className="hiker-image" alt="logo" />
        </div>
        <Dictionary />
      </div>
      <div className="text-audio">
        <p>
          <span className="label">
            <strong>text</strong>
          </span>{" "}
          : "hə'ləʊ",
        </p>
        <p>
          <span className="label">
            <strong>audio</strong>
          </span>
          :
          "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3"
        </p>
      </div>
    </div>
  );
}
