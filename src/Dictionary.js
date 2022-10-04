import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState(null);
  let [results, setResults] = useState(null);
  let [photo, setPhoto] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    //console.log(response.data.photos[0]);
    setPhoto(response.data.photos);
  }

  function search(event) {
    //dictionary API source: https://dictionaryapi.dev/
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
    //image API from pexels
    const PexelsApiKey =
      "563492ad6f9170000100000115213de1d39644c7b4185545f07c18f8";
    const PexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=1`;
    axios
      .get(PexelsApiUrl, {
        headers: { Authorization: `Bearer ${PexelsApiKey}` },
      })
      .then(handlePexelsResponse);
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
      <Photos images={photo} />
    </div>
  );
}
