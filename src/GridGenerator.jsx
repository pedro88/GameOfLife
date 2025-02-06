import React, { useState, useEffect } from 'react'
import Button from './Button'
import NewGeneration from './NewGeneration'

const GridGenerator = () => {


    const lineCount = 50    
    const colCount = 50
    let cellsGrid = []
    let passedCellsGrid = []
    let stateBoolean
    let aliveBoolean

    const livingCell = { alive: true, value: 1 }
    const deadCell = { alive: false, value: 0 }

    const generateInitialGrid = () => {
        let initialGrid = []
        for (let i = 0; i < lineCount; i++) {
            const newLine = []
            initialGrid.push(newLine)
            for (let j = 0; j < colCount; j++) {
                const random = Math.random()
                random > 0.3 ?
                    newLine.push(deadCell) :
                    newLine.push(livingCell)
            }
        }
        return initialGrid
    }

    const [grid, setGrid] = useState(generateInitialGrid)
    console.log("grid at first: ", grid)
    // console.log(generateInitialGrid)

    const checkCellState = (line, column) => {
        const sum =
        passedCellsGrid[line - 1][column - 1].value +
        passedCellsGrid[line - 1][column].value +
        passedCellsGrid[line - 1][column + 1].value +
        passedCellsGrid[line][column - 1].value +
        passedCellsGrid[line][column + 1].value +
        passedCellsGrid[line + 1][column - 1].value +
        passedCellsGrid[line+1][column].value +
        passedCellsGrid[line + 1][column + 1].value

        passedCellsGrid[line][column].alive === true ? 
        (
            sum === 3 || sum === 2 ? stateBoolean = true : stateBoolean = false
        ) : (
            sum === 3 ? stateBoolean = true : stateBoolean = false
        )
        return stateBoolean
    }

    const nextGen = () => {
        // console.log("yoyoyo")
        // console.log("grid in nextGen: ", grid)
        passedCellsGrid = grid.map((nested) => nested.map(cell => ({ ...cell })))
        // console.log("passedGrid: ", passedCellsGrid)
        cellsGrid = grid.map((nested) => nested.map(cell => ({ ...cell })))
        // console.log("cellsGrid: ", cellsGrid)
        for (let i = 1; i < lineCount - 1; i++) {
            for (let j = 1; j < colCount - 1; j++) {
                checkCellState(i, j)
                cellsGrid[i][j].alive = stateBoolean
                if (stateBoolean === true) {
                    console.log("vivant")
                    cellsGrid[i][j].value = 1
                } else {
                    console.log("dead")
                    cellsGrid[i][j].value = 0
                }

            }
        }
        setGrid(cellsGrid)
        console.log("grid: ", grid)

    }

    const clearGrid = () => {
        console.log("clear grid")
        const clearGrid = grid.map((nested) => nested.map(cell => ({ ...cell })))
        clearGrid.forEach((nested) => nested.forEach((e) => {
            e.alive = false
            e.value = 0
        }
        ))
        setGrid(clearGrid)
    }

    const changeValue = (e) => {
        console.log(e.target.id)
        const destructuredId = e.target.id.split(",")
        console.log(destructuredId)
        const newGrid = grid.map((nested) => nested.map(cell => ({ ...cell })))
        console.log(newGrid)
        const newAlive = e.target.className === "dead" ? true : false
        const newValue = e.target.className === "dead" ? 1 : 0
        console.log("aliveState", newAlive)
        newGrid[destructuredId[0]].splice(destructuredId[1], 1, {alive : newAlive, value: newValue})
        console.log("destruc: ", newGrid)
        setGrid(newGrid)
    }


    console.log("cellsGrid: ", cellsGrid)


    // useEffect(() => {
    //     console.log("prout")
    // }, [grid])



    return (
        <div>

            <Button
                nextGen={nextGen}
                clearGrid={clearGrid}
            />

            {
                <NewGeneration
                    grid={grid}
                    changeValue={changeValue}
                />
                // grid.map((nested) =>
                //     <div className='line'>
                //     {nested.map((cell) =>
                //     cell.alive === true ?
                //     <div className='alive'></div>
                //     :
                //     <div className='dead'></div>
                // )}
                // </div>
                // )
            }
        </div>
    )
}

export default GridGenerator
