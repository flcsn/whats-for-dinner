import React from 'react'

const UserInputForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({
      ingredient: event.target.ingredient.value,
      tag: event.target.tag.value
    })
  }

  return (
    <form className='user-input-form' onSubmit={handleSubmit}>
      <div className='step-1-container'>
        <label className='step-label'>Step 1: Select an ingredient </label>
        <select className='select-ingredient'
          defaultValue='Any'
          name='ingredient'
        >
          <option>Any</option>
          <option>Chicken</option>
          <option>Beef</option>
          <option>Vegetable</option>
        </select>
      </div>
      <div className='step-2-container'>
        <label className='step-label'>Step 2: Select a tag</label>
        <select className='select-tag'
          defaultValue='Any'
          name='tag'
        >
          <option>Any</option>
          <option>Under 30 minutes</option>
          <option>Vegetarian</option>
          <option>Lactose-free</option>
        </select>
      </div>
      <div className='step-3-container'>
        <label className='step-label'>Step 3: Find dinner ideas!</label>
        <p>Search for dinner ideas with INGREDIENT and TAG</p>
        <div className='btn-container'>
          <button className='submit-btn' type='submit'>Go!</button>
        </div>
      </div>
    </form>
  )
}

export default UserInputForm