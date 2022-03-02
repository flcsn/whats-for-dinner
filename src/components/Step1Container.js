import React from 'react'

const Step1Container = () => {
  return (
    <div className='step-1-container'>
      <p className='step-label'>Step 1: Select an ingredient </p>
      <select className='select-ingredient' name='ingredient'>
        <option selected='selected'>Any</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  )
}

export default Step1Container