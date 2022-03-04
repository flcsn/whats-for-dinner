import React, { useState } from 'react'

import LeftMainContainer from './components/LeftMainContainer'
import RightMainContainer from './components/RightMainContainer'

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [ingredient, setIngredient] = useState('Any')
  const [tag, setTag] = useState('Any')
  const [displayStatusHeader, setDisplayStatusHeader] = useState(false)

  return (
    <div className='main-container'>
      <LeftMainContainer
        setRecipes={setRecipes}
        setIngredient={setIngredient}
        setTag={setTag}
        setDisplayStatusHeader={setDisplayStatusHeader}
      />
      <RightMainContainer
        recipes={recipes}
        ingredient={ingredient}
        tag={tag}
        displayStatusHeader={displayStatusHeader}
      />
    </div>
  )
}

export default App