import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

const SearchField = () => {
  const [inputValue, setInputValue] = useState('');

  const getValue = (e) => {
    setInputValue(e.target.value);
  }

  let navigate = useNavigate();


  const search = () => {
    navigate(`/cocktailList/search.php%3Fs=${inputValue}`);
  }

  return (
    <form className="search-field" onSubmit={(e) => e.preventDefault()}>
      <input onChange={getValue} type="text" name="text" placeholder="type something" />
      <input onClick={search} type="button" value="Search" />
    </form>
  );
}

export default SearchField;