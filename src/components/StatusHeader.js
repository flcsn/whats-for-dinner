import React from 'react'

const StatusHeader = ({
  ingredient,
  tag,
  displayStatusHeader,
  searchOngoing
}) => {
  const ingredientText = ingredient === 'Any' ? '' : `${ingredient.toLowerCase()} `
  const tagText = tag === 'Any' ? '' : `that are ${tag.toLowerCase()}`

  return (
    <div className='status-header'>
      { displayStatusHeader
        ? searchOngoing
          ? <p className='status-line'>
            Searching for {ingredientText}
            recipes {tagText}</p>
          : <p className='status-line'>
              Displaying results for {ingredientText}
              recipes {tagText}</p>
        : <p className='status-line'>
            Select an ingredient and tag to begin searching! </p>
      }
    </div>
  )
}

export default StatusHeader