import React from 'react'

const StatusHeader = ({
  ingredient,
  tag,
  displayStatusHeader,
  searchOngoing
}) => {
  return (
    <div className='status-header'>
      { displayStatusHeader
        ? searchOngoing
          ? <p className='status-line'>
            Searching for { ingredient === 'Any' ? '' : `${ingredient} `}
            recipes{ tag === 'Any' ? '...' : ` that are ${tag}...` } </p>
          : <p className='status-line'>
              Displaying results for {ingredient} recipes that are {tag}
          </p>
        : <p className='status-line'>
            Select an ingredient and tag to begin searching! </p>
      }
    </div>
  )
}

export default StatusHeader