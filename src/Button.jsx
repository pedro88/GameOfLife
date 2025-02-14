import React from 'react'

const Button = ({ prevGen, play, nextGen, clearGrid, handleColCntChange, handleLineCntChange }) => {
  return (
    <div className='BtnContainer flex-container' >
      <button onClick={prevGen}>Previous Generation</button>
      <button onClick={play}>Play/Stop</button>
      <button onClick={nextGen}>Next Generation</button>
      <button onClick={clearGrid}>Clear Grid</button>
      <br />
      <label htmlFor="lineCount">Number of line</label>
      <input onChange={handleLineCntChange} type="range" min="3" max="50" className="slider" id="lineCount"></input>
      <br />
      <label htmlFor="colCount">Number of column</label>
      <input onChange={handleColCntChange} type="range" min="3" max="50" className="slider" id="colCount"></input>

    </div>
  )
}

export default Button