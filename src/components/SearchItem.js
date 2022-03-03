import React, { useState } from 'react'
import RecipeDetails from './RecipeDetails'

const SearchItem = ({ recipe }) => {
  const [displayDetails, setDisplayDetails] = useState(false)

  return (
    <div className='search-item'>
      <img
        src={recipe.thumbnail_url}
        className='search-item-image'
      />
      <div className='search-item-details'>
        <p className='search-item-name'>{recipe.name}</p>
        <button
          className='search-item-link'
          onClick={() => setDisplayDetails(true)}
        >Link to Recipe</button>
      </div>
      {displayDetails && <RecipeDetails name={recipe.name} instructions={recipe.instructions} />}
    </div>
  )
}

export default SearchItem