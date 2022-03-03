import React from 'react'

const RecipeDetails = ({ name, instructions }) => {
  return (
    <div className='recipe-details-container'>
      <div className='recipe-details'>
        <h2>{name}</h2>
        {instructions.map(instruction =>
          <p key={instruction.id}>
            Step {instruction.position}: {instruction.display_text}
          </p>)
        }
      </div>
    </div>
  )
}

export default RecipeDetails