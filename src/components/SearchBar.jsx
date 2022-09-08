import React from 'react';

const SearchBar = (props) => {
  const handleChange = (event) => {
    const { fetchGiphy } = props;
    fetchGiphy(`${event.currentTarget.value} harry potter`);
  };
  return (
    <input className="form-search form-control" type="text" placeholder="Search for a Harry Potter gif" onChange={handleChange} />
  );
};

export default SearchBar;
