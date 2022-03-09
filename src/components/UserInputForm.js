import React from 'react'
import recipeService from '../services/recipeService'

const UserInputForm = ({
  setRecipes,
  setIngredient,
  setTag,
  setDisplayStatusHeader,
  setSearchOngoing
}) => {

  const handleSubmit = async (event) => {
    event.preventDefault()
    setDisplayStatusHeader(true)
    setSearchOngoing(true)
    const ingredient = event.target.ingredient.value
    const tag = event.target.tag.value
    console.log('searching for recipes', { ingredient, tag })
    setIngredient(ingredient)
    setTag(tag)

    // Tasty API requires that ingredients and tags are formatted in snake_case
    const fixedIngredient = ingredient.toLowerCase().replace(/ /g,'_')
    const fixedTag = tag.toLowerCase().replace(/ /g,'_')
    console.log('fixed', { fixedIngredient, fixedTag })
    try {
      const data = await recipeService.getRecipe(fixedIngredient, fixedTag)
      console.log('setting recipes to', data.results)
      setRecipes(data.results)
    } catch (e) {
      console.error(e)
    }
    setSearchOngoing(false)
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
          <option>Chicken</option>
          <option>Beef</option>
          <option>Pork</option>
          <option>Fish</option>
          <option>Shrimp</option>
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
          <option>5 ingredients or less</option>
          <option>Under 30 minutes</option>
          <option>Healthy</option>
          <option>One pot or pan</option>
          <option>Kid friendly</option>
          <option>Comfort food</option>
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