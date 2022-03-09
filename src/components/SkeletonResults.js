import React from 'react'

import SkeletonItem from './SkeletonItem'

const SkeletonResults = () => {
  return (
    <div className='search-results'>
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
    </div>
  )
}

export default SkeletonResults