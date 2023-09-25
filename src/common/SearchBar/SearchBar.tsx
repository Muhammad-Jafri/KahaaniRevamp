import React, { useState } from 'react';
import Navbar from '../../common/navbar/Navbar';
import './SearchBar.css';
import { FcSearch } from 'react-icons/fc';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log('Search for:', searchQuery);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>

      <div className="searchbar">
        <div className="searchinput">
          <input
            type="text"
            placeholder="Search for kahaani..."
            placeholder-sm="Search..."
            name="search"
            value={searchQuery}
            onChange={handleSearchInputChange}
            onKeyPress={handleKeyPress}
          />
          <IconButton onClick={handleSearch}>
            <FcSearch className="searchIcon" />
          </IconButton>
        </div>
      </div>


    </>
  );
};

export default SearchBar;
