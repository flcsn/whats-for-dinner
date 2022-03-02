import React from 'react'
import { GiChickenOven } from 'react-icons/gi'

const SearchItem = () => {
  return (
    <div className='search-item'>
      <GiChickenOven style={{ height: '100px', width: '100px' }}/>
      <div className='search-item-details'>
        <h2 className='search-item-name'>Roast Chicken</h2>
        <a className='search-item-link'>Link to Recipe</a>
      </div>
    </div>
  )
}

export default SearchItem