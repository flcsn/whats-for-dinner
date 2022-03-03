import React from 'react'

const RecipeStep = ({ number, instruction }) => {
  return (
    <div className='recipe-step'>
      <p className='recipe-step-number'>Step {number}:</p>
      <p className='recipe-step-instruction'>{instruction}</p>
    </div>
  )
}

export default RecipeStep