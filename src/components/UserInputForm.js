import React from 'react'
import recipeService from '../services/recipeService'

const UserInputForm = ({ setRecipes }) => {
  const handleSubmit = async (event) => {
    event.preventDefault()
    const ingredient = event.target.ingredient.value
    const tag = event.target.tag.value
    console.log('searching for recipes', { ingredient, tag })
    try {
      const data = await recipeService.getRecipe(ingredient, tag)
      console.log('setting recipes to', data.results)
      setRecipes(data.results)
    } catch (e) {
      console.error(e)
    }
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
          <option>chicken</option>
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
          <option>under_30_minutes</option>
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