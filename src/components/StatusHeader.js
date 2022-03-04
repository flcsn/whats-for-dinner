import React from 'react'

const StatusHeader = ({ ingredient, tag, displayStatusHeader }) => {
  return (
    <div className='status-header'>
      { displayStatusHeader
        ? <p className='status-line'>
            Searching for { ingredient === 'Any' ? '' : `${ingredient} `}
            recipes{ tag === 'Any' ? '...' : ` that are ${tag}...` } </p>
        : <p className='status-line'>
            Select an ingredient and tag on the left to begin searching! </p>
      }
    </div>
  )
}

export default StatusHeader