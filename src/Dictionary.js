import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("null");

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    //dictionary API source: https://dictionaryapi.dev/
    event.preventDefault();
    alert(`Searching for ${keyWord}`);
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
  );
}
