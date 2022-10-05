import hiker from "./hiker.png";
import "./App.css";
import Dictionary from "./Dictionary.js";
import "./Dictionary.css";
import moonman from "./moonman3.png";

export default function App() {
  return (
    <div className="App ">
      <div className="  header-container">
        <div className="  hiker-image-container">
          <img src={hiker} className="hiker-image" alt="logo" />
        </div>
        <Dictionary />
        <div className="moonman-container ">
          <img src={moonman} className="moonman" alt="moonman" />
        </div>
      </div>
    </div>
  );
}
