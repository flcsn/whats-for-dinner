import React from 'react'
import SearchItem from './SearchItem'
import SkeletonResults from './SkeletonResults'

const SearchResults = ({ recipes, searchOngoing }) => {
  console.log('search results recipes', recipes)

  if (searchOngoing) {
    return (
      <SkeletonResults />
    )
  }

  return (
    <div className='search-results'>
      { recipes
        ? recipes.length !== 0
          ? recipes.map(recipe =>
            <SearchItem key={recipe.id} recipe={recipe} />)
          : <p>No matches found</p>
        : <p>Search results of up to 20 matches will be displayed here</p>
      }
    </div>
  )
}

export default SearchResults