import React from 'react'

const RecipeDetails = ({ instructions }) => {
  return (
    <div className='recipe-details'>
      {instructions.map(instruction =>
        <p key={instruction.id}>
          Step {instruction.position}: {instruction.display_text}
        </p>)
      }
    </div>
  )
}

export default RecipeDetails