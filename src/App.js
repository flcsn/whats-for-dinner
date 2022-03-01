import React from 'react'

const App = () => {
  return (
    <div className='main-container'>
      <div className='left-main-container'>
        <h2 className='app-title'>What&apos;s for Dinner?</h2>
        <div>
          <p className='step-label'>Step 1: Select an ingredient </p>
        </div>
        <div>
          <p className='step-label'>Step 2: Select a tag</p>
        </div>
        <div>
          <p className='step-label'>Step 3: Find dinner ideas!</p>
        </div>
      </div>
      <div className='right-main-container'>
        <p>Hello!</p>
      </div>
    </div>
  )
}

export default App