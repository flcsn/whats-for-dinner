import React from 'react'

import StatusHeader from './StatusHeader'
import SearchResults from './SearchResults'

const RightMainContainer = ({
  recipes,
  ingredient,
  tag,
  displayStatusHeader,
  searchOngoing
}) => {
  return (
    <div className='right-main-container'>
      <StatusHeader
        ingredient={ingredient}
        tag={tag}
        displayStatusHeader={displayStatusHeader}
        searchOngoing={searchOngoing}
      />
      <SearchResults
        recipes={recipes}
        searchOngoing={searchOngoing}
      />
    </div>
  )
}

export default RightMainContainer