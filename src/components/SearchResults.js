import React from 'react'
import SearchItem from './SearchItem'
import SkeletonItem from './SkeletonItem'

const SearchResults = ({ recipes }) => {
  console.log('search results recipes', recipes)

  return (
    <div className='search-results'>
      { recipes
        ? recipes.length !== 0
          ? recipes.map(recipe =>
            <SearchItem key={recipe.id} recipe={recipe} />)
          : <p>No matches found</p>
        : <SkeletonItem />
      }
    </div>
  )
}

export default SearchResults