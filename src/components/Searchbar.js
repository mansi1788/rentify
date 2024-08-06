

import React, { useState } from 'react';
import { FaSearch, FaMale, FaFemale } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('Men');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    // Fetch or filter suggestions based on the query
    setSuggestions(
      query ? ['Suggestion 1', 'Suggestion 2', 'Suggestion 3'].filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      ) : []
    );
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch({ query: searchQuery, category });
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setSuggestions([]);
    handleSearch();
  };

  return (


    



    <div className="flex flex-col items-center w-full max-w-xl mx-auto">
      <div className="flex items-center w-full bg-white shadow rounded-lg overflow-hidden">
        <select
          value={category}
          onChange={handleCategoryChange}
          className="p-2 bg-gray-100 border-none focus:outline-none"
        >
          <option value="Men">
            <FaMale className="inline-block mr-1" /> Men
          </option>
          <option value="Women">
            <FaFemale className="inline-block mr-1" /> Women
          </option>
        </select>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search..."
          className="flex-grow p-2 border-none focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 hover:bg-blue-600 transition-colors flex items-center justify-center"
        >
          <FaSearch />
        </button>
      </div>
      {suggestions.length > 0 && (
        <ul className="bg-white shadow rounded-lg mt-2 w-full transition-all duration-300">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;