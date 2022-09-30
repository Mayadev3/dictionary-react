import React from "react";

export default function Dictionary() {
  function search(event) {
    event.preventDefault();
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <form onSubmit={search}>
        <input type="text" placeholder="Search for meaning..." />
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
      </form>
    </div>
  );
}
