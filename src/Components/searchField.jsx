import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

const SearchField = () => {
  const [inputValue, setInputValue] = useState('');

  const getValue = (e) => {
    setInputValue(e.target.value);
  }

  let navigate = useNavigate();


  const search = (event) => {
    event.preventDefault();

    const query = inputValue.trim();
    if (!query) {
      return;
    }

    navigate({
      pathname: '/cocktailList/search.php',
      search: `?s=${encodeURIComponent(query)}`
    });
  }

  return (
    <form className="search-field" onSubmit={search}>
      <input onChange={getValue} type="text" name="text" placeholder="type something" />
      <input type="submit" value="Search" />
    </form>
  );
}

export default SearchField;