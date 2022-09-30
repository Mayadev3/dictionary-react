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
    </div>
  );
}
