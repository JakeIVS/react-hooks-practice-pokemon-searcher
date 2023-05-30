import React from "react";

function Search({ onSearch, search }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={onSearch} value={search} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
