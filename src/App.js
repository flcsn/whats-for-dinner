import React from 'react'
import { GiChickenOven } from 'react-icons/gi'

const App = () => {
  return (
    <div className='main-container'>
      <div className='left-main-container'>
        <h2 className='app-title'>What&apos;s for Dinner?</h2>
        <div className='step-1-container'>
          <p className='step-label'>Step 1: Select an ingredient </p>
          <select className='select-ingredient' name='ingredient'>
            <option selected='selected'>Any</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className='step-2-container'>
          <p className='step-label'>Step 2: Select a tag</p>
          <select className='select-tag' name='tag'>
            <option selected='selected'>Any</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className='step-3-container'>
          <p className='step-label'>Step 3: Find dinner ideas!</p>
          <p>Search for dinner ideas with INGREDIENT and TAG</p>
          <div className='btn-container'>
            <button className='submit-btn'>Go!</button>
          </div>
        </div>
      </div>
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
    </div>
  )
}

export default App