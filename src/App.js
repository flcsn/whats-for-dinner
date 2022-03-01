import React from 'react'

const App = () => {
  return (
    <div className='main-container'>
      <div className='left-main-container'>
        <h2 className='app-title'>What&apos;s for Dinner?</h2>
        <div>
          <p className='step-label'>Step 1: Select an ingredient </p>
          <select className='select-ingredient' name='ingredient'>
            <option selected='selected'>Any</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div>
          <p className='step-label'>Step 2: Select a tag</p>
          <select className='select-tag' name='tag'>
            <option selected='selected'>Any</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div>
          <p className='step-label'>Step 3: Find dinner ideas!</p>
          <div className='btn-container'>
            <button className='submit-btn'>Go!</button>
          </div>
        </div>
      </div>
      <div className='right-main-container'>
        <p>Hello!</p>
      </div>
    </div>
  )
}

export default App