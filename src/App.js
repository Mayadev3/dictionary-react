import hiker from "./hiker.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="header-container">
        <div className="hiker-image-container">
          <img src={hiker} className="hiker-image" alt="logo" />
        </div>
        <div className="search">
          <h1>Dictionary</h1>
          <input type="text" placeholder="Search for meaning..." />
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>
      </div>
    </div>
  );
}
