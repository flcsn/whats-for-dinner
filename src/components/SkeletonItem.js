import React from 'react'

const SkeletonItem = () => {
  return (
    <div className='search-item'>
      <img className='search-item-image skeleton'/>
      <div className='search-item-details'>
        <div className='skeleton-container'>
          <div className='search-item-name skeleton skeleton-text'></div>
          <div className='search-item-name skeleton skeleton-text'></div>
        </div>
        <div className='search-item-link skeleton skeleton-text'></div>
      </div>
    </div>
  )
}

export default SkeletonItem