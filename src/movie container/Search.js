import React, { useState } from "react";

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

 const onSubmit = e => {
    e.preventDefault();
    if ((searchValue !== "") && (searchValue.trim())){
    search(searchValue);
    setSearchValue("");}
  };

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />

      <input  onClick={onSubmit} type="submit" value="Search"  />
    </form>
  );
};

export default Search;