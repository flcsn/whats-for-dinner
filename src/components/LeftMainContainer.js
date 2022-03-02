import React from 'react'

import AppTitle from './AppTitle'
import Step1Container from './Step1Container'
import Step2Container from './Step2Container'
import Step3Container from './Step3Container'

const LeftMainContainer = () => {
  return (
    <div className='left-main-container'>
      <AppTitle />
      <Step1Container />
      <Step2Container />
      <Step3Container />
    </div>
  )
}

export default LeftMainContainer