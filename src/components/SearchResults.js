import React from 'react'
import SearchItem from './SearchItem'
import SkeletonResults from './SkeletonResults'

const SearchResults = ({ recipes, searchOngoing }) => {
  console.log('search results recipes', recipes)

  return (
    <div className='search-results'>
      { recipes
        ? recipes.length !== 0
          ? recipes.map(recipe =>
            <SearchItem key={recipe.id} recipe={recipe} />)
          : <p>No matches found</p>
        : searchOngoing
          ? <SkeletonResults />
          : <p>Search results of up to 20 matches will be displayed here</p>
      }
    </div>
  )
}

export default SearchResults