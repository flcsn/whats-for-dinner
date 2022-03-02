import React from 'react'

const SearchItem = ({ recipe }) => {
  return (
    <div className='search-item'>
      <img src={recipe.thumbnail_url} style={{ height: '100px', width: '100px' }}/>
      <div className='search-item-details'>
        <h2 className='search-item-name'>{recipe.name}</h2>
        <a className='search-item-link' href='#'>Link to Recipe</a>
      </div>
    </div>
  )
}

export default SearchItem