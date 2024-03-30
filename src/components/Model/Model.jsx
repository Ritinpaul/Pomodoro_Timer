import React from 'react'
import Backdrop from './Backdrop'
import ModelContainer from './ModelContainer'

const Model = ({isOpen, onClose}) => {
  return (
    <div>
      {isOpen &&(
      <>
      <Backdrop/>
      <ModelContainer isOpen={isOpen} onClose={onClose}/>
      </>
      )}
    </div>
  )
}

export default Model