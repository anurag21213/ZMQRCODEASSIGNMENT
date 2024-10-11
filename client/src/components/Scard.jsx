import React from 'react'

const Scard = ({name,styles,description}) => {
  return (
    <div className={`${styles} flex items-center justify-center flex-col`}>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Scard
