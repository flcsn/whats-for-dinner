import React from 'react'

import StatusHeader from './StatusHeader'
import SearchResults from './SearchResults'

const RightMainContainer = ({ recipes }) => {
  return (
    <div className='right-main-container'>
      <StatusHeader />
      <SearchResults recipes={recipes} />
    </div>
  )
}

export default RightMainContainer