import React from 'react'
import recipeService from '../services/recipeService'

const UserInputForm = ({ setRecipes, setIngredient, setTag, setDisplayStatusHeader }) => {
  const handleSubmit = async (event) => {
    event.preventDefault()
    setDisplayStatusHeader(true)
    const ingredient = event.target.ingredient.value
    const tag = event.target.tag.value
    console.log('searching for recipes', { ingredient, tag })
    setIngredient(ingredient)
    setTag(tag)
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
      <div className='step-container'>
        <p className='step-label'>Step 1: Select an ingredient </p>
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
      <div className='step-container'>
        <p className='step-label'>Step 2: Select a tag</p>
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
      <div className='step-container'>
        <p className='step-label'>Step 3: Find dinner ideas!</p>
        <div className='btn-container'>
          <button className='submit-btn' type='submit'>Search!</button>
        </div>
      </div>
    </form>
  )
}

export default UserInputForm