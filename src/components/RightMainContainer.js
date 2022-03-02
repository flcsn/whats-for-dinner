import React from 'react'

import StatusHeader from './StatusHeader'
import SearchResults from './SearchResults'

const RightMainContainer = () => {
  return (
    <div className='right-main-container'>
      <StatusHeader />
      <SearchResults />
    </div>
  )
}

export default RightMainContainer