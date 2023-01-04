import React from 'react'

const SearchBar = ({posts, setTools}) => {

  const handleSearchChange = (e) => {
    if(!e.target.value) return setTools(posts);

    const resultArr = posts.filter(post => post.GONGUNAME === e.target.value);
    setTools(resultArr);
  }


  return (
     <input
          className="search__input"
          type="text"
          id="search"
          onChange={handleSearchChange}
      />
  )
}

export default SearchBar