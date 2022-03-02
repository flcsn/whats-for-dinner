import React from 'react'
import SearchItem from './SearchItem'

const SearchResults = ({ recipes }) => {
  console.log('search results recipes', recipes)
  return (
    <div className='search-results'>
      { recipes.length !== 0
        ? recipes.map(recipe =>
          <SearchItem key={recipe.id} recipe={recipe} />)
        : <p>Search for dinner ideas on the left!</p>
      }
    </div>
  )
}

export default SearchResults