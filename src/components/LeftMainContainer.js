import React from 'react'

import AppTitle from './AppTitle'
import UserInputForm from './UserInputForm'

const LeftMainContainer = ({ setRecipes }) => {
  return (
    <div className='left-main-container'>
      <AppTitle />
      <UserInputForm setRecipes={setRecipes} />
    </div>
  )
}

export default LeftMainContainer