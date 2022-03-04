import React from 'react'

const StatusHeader = ({ ingredient, tag, displayStatusHeader }) => {
  console.log('ingredient', ingredient)
  console.log(tag === 'Any')
  if (!displayStatusHeader) return (
    <div className='status-header'>
      <p className='status-line'>
        Select an ingredient and tag on the left to begin searching!
      </p>
    </div>
  )

  return (
    <div className='status-header'>
      <p className='status-line'>
        Searching for { ingredient === 'Any' ? '' : `${ingredient} `}
        recipes{ tag === 'Any' ? '...' : ` that are ${tag}...` }
      </p>
    </div>
  )
}

export default StatusHeader