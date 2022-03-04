import React from 'react'

import StatusHeader from './StatusHeader'
import SearchResults from './SearchResults'

const RightMainContainer = ({ recipes, ingredient, tag, displayStatusHeader }) => {
  return (
    <div className='right-main-container'>
      <StatusHeader
        ingredient={ingredient}
        tag={tag}
        displayStatusHeader={displayStatusHeader}
      />
      <SearchResults
        recipes={recipes}
      />
    </div>
  )
}

export default RightMainContainer