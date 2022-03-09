import React, { useState } from 'react'

import LeftMainContainer from './components/LeftMainContainer'
import RightMainContainer from './components/RightMainContainer'

const App = () => {
  const [recipes, setRecipes] = useState(null)
  const [ingredient, setIngredient] = useState('Any')
  const [tag, setTag] = useState('Any')
  const [displayStatusHeader, setDisplayStatusHeader] = useState(false)
  const [searchOngoing, setSearchOngoing] = useState(false)

  return (
    <div className='main-container'>
      <LeftMainContainer
        setRecipes={setRecipes}
        setIngredient={setIngredient}
        setTag={setTag}
        setDisplayStatusHeader={setDisplayStatusHeader}
        setSearchOngoing={setSearchOngoing}
      />
      <RightMainContainer
        recipes={recipes}
        ingredient={ingredient}
        tag={tag}
        displayStatusHeader={displayStatusHeader}
        searchOngoing={searchOngoing}
      />
    </div>
  )
}

export default App