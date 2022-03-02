import React, { useState } from 'react'

import LeftMainContainer from './components/LeftMainContainer'
import RightMainContainer from './components/RightMainContainer'

const App = () => {
  const [recipes, setRecipes] = useState([])

  return (
    <div className='main-container'>
      <LeftMainContainer setRecipes={setRecipes} />
      <RightMainContainer recipes={recipes}/>
    </div>
  )
}

export default App