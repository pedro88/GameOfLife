import React from 'react'

const Button = ({prevGen, play, nextGen, clearGrid}) => {
  return (
    <div className='BtnContainer' >
        <button onClick={prevGen}>Previous Generation</button>
        <button onClick={play}>Play</button>
        <button onClick={nextGen}>Next Generation</button>
        <button onClick={clearGrid}>Clear Grid</button>

    </div>
  )
}

export default Button