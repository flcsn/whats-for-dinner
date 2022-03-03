import React from 'react'

import RecipeStep from './RecipeStep'

const RecipeDetails = ({ name, instructions, handleClick }) => {
  return (
    <div className='recipe-details-container'>
      <div className='recipe-details'>
        <h2>{name}</h2>
        {instructions.map(instruction =>
          <RecipeStep
            key={instruction.id}
            number={instruction.position}
            instruction={instruction.display_text}
          />)
        }
        <button
          className='close-recipe-details'
          onClick={handleClick}
        >
          &times;
        </button>
      </div>
    </div>
  )
}

export default RecipeDetails