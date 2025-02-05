import React from 'react'

const NewGeneration = ({ grid, changeValue }) => {

    return (
        grid.map((nested, rowIndex) =>
            <div className='line' key={rowIndex} >
                {nested.map((cell, colIndex) =>
                    cell.alive === true ?
                        <div className='alive' id={[rowIndex, colIndex]} key={colIndex} onClick={changeValue}></div>
                        :
                        <div className='dead' key={colIndex} id={[rowIndex, colIndex]} onClick={changeValue}></div>
                )}
            </div>
        )
    )
}

export default NewGeneration