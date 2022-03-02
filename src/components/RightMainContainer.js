import React from 'react'
import { GiChickenOven } from 'react-icons/gi'

const RightMainContainer = () => {
  return (
    <div className='right-main-container'>
      <div className='status-header'>
        <p className='status-line'>Searching for INGREDIENT recipes that is TAG...</p>
      </div>
      <div className='search-results'>
        <div className='search-item'>
          <GiChickenOven style={{ height: '100px', width: '100px' }}/>
          <div className='search-item-details'>
            <h2 className='search-item-name'>Roast Chicken</h2>
            <a className='search-item-link'>Link to Recipe</a>
          </div>
        </div>
        <div className='search-item'>
          <GiChickenOven style={{ height: '100px', width: '100px' }}/>
          <div className='search-item-details'>
            <h2 className='search-item-name'>Roast Chicken</h2>
            <a className='search-item-link'>Link to Recipe</a>
          </div>
        </div>
        <div className='search-item'>
          <GiChickenOven style={{ height: '100px', width: '100px' }}/>
          <div className='search-item-details'>
            <h2 className='search-item-name'>Roast Chicken</h2>
            <a className='search-item-link'>Link to Recipe</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightMainContainer