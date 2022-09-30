import React, { useState } from "react";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("null");
  function search(event) {
    event.preventDefault();
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyWord(event.target.value);
    console.log(keyWord);
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
