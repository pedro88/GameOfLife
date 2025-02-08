import React from 'react'

const Button = ({ prevGen, play, nextGen, clearGrid, handleColCntChange, handleLineCntChange }) => {
  return (
    <div className='BtnContainer' >
      <button onClick={prevGen}>Previous Generation</button>
      <button onClick={play}>Play</button>
      <button onClick={nextGen}>Next Generation</button>
      <button onClick={clearGrid}>Clear Grid</button>
      <br />
      <label htmlFor="lineCount">Number of line...........</label>
      <input onChange={handleLineCntChange} type="range" min="1" max="100" className="slider" id="lineCount"></input>
      <br />
      <label htmlFor="colCount">Number of column.....</label>
      <input onChange={handleColCntChange} type="range" min="1" max="100" className="slider" id="colCount"></input>

    </div>
  )
}

export default Button