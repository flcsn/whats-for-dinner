import React from 'react'

const Step2Container = () => {
  return (
    <div className='step-2-container'>
      <p className='step-label'>Step 2: Select a tag</p>
      <select className='select-tag' name='tag'>
        <option selected='selected'>Any</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  )
}

export default Step2Container