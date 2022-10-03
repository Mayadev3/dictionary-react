import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
    console.log(response.data[0]);
  }

  function search(event) {
    //dictionary API source: https://dictionaryapi.dev/
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <div className="form-header-container">
        <h1>Dictionary</h1>
        <form onSubmit={search}>
          <input
            type="text"
            placeholder="Search for meaning..."
            onChange={handleKeywordChange}
          />
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </form>
      </div>
      <Results results={results} />
    </div>
  );
}
