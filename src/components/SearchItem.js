import React from 'react'

const SearchItem = ({ recipe }) => {
  return (
    <div className='search-item'>
      <img
        src={recipe.thumbnail_url}
        className='search-item-image'
      />
      <div className='search-item-details'>
        <p className='search-item-name'>{recipe.name}</p>
        <a className='search-item-link' href='#'>Link to Recipe</a>
      </div>
    </div>
  )
}

export default SearchItem