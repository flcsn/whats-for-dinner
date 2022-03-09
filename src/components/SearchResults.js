import React from 'react'
import SearchItem from './SearchItem'
import SkeletonResults from './SkeletonResults'

const SearchResults = ({ recipes }) => {
  console.log('search results recipes', recipes)

  return (
    <div className='search-results'>
      { recipes
        ? recipes.length !== 0
          ? recipes.map(recipe =>
            <SearchItem key={recipe.id} recipe={recipe} />)
          : <p>No matches found</p>
        : <SkeletonResults />
      }
    </div>
  )
}

export default SearchResults