import React, { useState } from 'react'
import RecipeDetails from './RecipeDetails'

const SearchItem = ({ recipe }) => {
  const [displayDetails, setDisplayDetails] = useState(false)

  const displayOn = () => {
    console.log('on')
    document.body.style.top = `-${window.scrollY}px`
    document.body.style.position = 'fixed'
    setDisplayDetails(true)
  }

  const displayOff = () => {
    console.log('off')
    const scrollY = document.body.style.top
    console.log('y', scrollY)
    document.body.style.position = ''
    document.body.style.top = ''
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
    setDisplayDetails(false)
  }

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
          onClick={() => displayOn()}
        >Link to Recipe</button>
      </div>
      {displayDetails &&
        <RecipeDetails
          name={recipe.name}
          instructions={recipe.instructions}
          handleClick={() => displayOff()}
        />
      }
    </div>
  )
}

export default SearchItem