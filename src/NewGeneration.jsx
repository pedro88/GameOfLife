import React from 'react'

const NewGeneration = ({ grid, changeValue }) => {

    return (
        <div className='grid'>
{

        grid.map((nested, rowIndex) =>
            <div className='line' key={rowIndex} >
                {nested.map((cell, colIndex) =>
                    cell.alive === true ?
                    <div className='alive' id={[rowIndex, colIndex]} value="1" key={colIndex} onClick={changeValue}></div>
                    :
                    <div className='dead' key={colIndex} id={[rowIndex, colIndex]} value="0" onClick={changeValue}></div>
                )}
            </div>
        )
    }
                </div>
    )
}

export default NewGeneration