import React from 'react'

import AppTitle from './AppTitle'
import UserInputForm from './UserInputForm'

const LeftMainContainer = ({ setRecipes, setIngredient, setTag, setDisplayStatusHeader }) => {
  return (
    <div className='left-main-container'>
      <AppTitle />
      <UserInputForm
        setRecipes={setRecipes}
        setIngredient={setIngredient}
        setTag={setTag}
        setDisplayStatusHeader={setDisplayStatusHeader}
      />
    </div>
  )
}

export default LeftMainContainer