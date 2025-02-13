import React, { useState, useEffect } from 'react'
import Button from './Button'
import NewGeneration from './NewGeneration'

const GridGenerator = () => {
    let cellsGrid = []
    let passedCellsGrid = []
    let stateBoolean
    let aliveBoolean


    const livingCell = { alive: true, value: 1 }
    const deadCell = { alive: false, value: 0 }
    const [lineCount, setLineCount] = useState(20)
    const [colCount, setColCount] = useState(20)
    const [historic, setHistoric] = useState([])

    //Build new grid with random value
    const generateInitialGrid = () => {
        console.log("initialisation de la grille...")
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
        const h = []
        h.push(initialGrid)
        setHistoric(h)
        return initialGrid
    }

    const [grid, setGrid] = useState(generateInitialGrid)
    //console.log("grid at first: ", grid)

    //Check the state of cells beetween 2 generation
    const checkCellState = (line, column) => {
        passedCellsGrid = grid.map((nested) => nested.map(cell => ({ ...cell })))
        //console.log("passedCell: ", passedCellsGrid)
        const sum =
            passedCellsGrid[line - 1][column - 1].value +
            passedCellsGrid[line - 1][column].value +
            passedCellsGrid[line - 1][column + 1].value +
            passedCellsGrid[line][column - 1].value +
            passedCellsGrid[line][column + 1].value +
            passedCellsGrid[line + 1][column - 1].value +
            passedCellsGrid[line + 1][column].value +
            passedCellsGrid[line + 1][column + 1].value

        passedCellsGrid[line][column].alive === true ?
            (
                sum === 3 || sum === 2 ? stateBoolean = true : stateBoolean = false
            ) : (
                sum === 3 ? stateBoolean = true : stateBoolean = false
            )
        return stateBoolean
    }

    //Pass to the next generation
    const nextGen = () => {
        passedCellsGrid = grid.map((nested) => nested.map(cell => ({ ...cell })))
        cellsGrid = grid.map((nested) => nested.map(cell => ({ ...cell })))
        for (let i = 2; i < lineCount - 2; i++) {
            for (let j = 2; j < colCount - 2; j++) {
                checkCellState(i, j)
                cellsGrid[i][j].alive = stateBoolean
                if (stateBoolean === true) {
                    //console.log("vivant")
                    cellsGrid[i][j].value = 1
                } else {
                    //console.log("dead")
                    cellsGrid[i][j].value = 0
                }
            }
        }
        setGrid(cellsGrid)
        const h = historic.map((generation) => generation.map((nested) => nested.map(cell => ({ ...cell }))))
        h.push(cellsGrid)
        setHistoric(h)
        //console.log("historic: ", historic)
    }

    //Access to the previous generation
    const previousGen = () => {
        const h = historic.map((generation) => generation.map((nested) => nested.map(cell => ({ ...cell }))))
        if (h.length >= 2) {
            setGrid(h[h.length - 2])
            h.pop()
            setHistoric(h)
        }
    }


    //Clear all the grid
    const clearGrid = () => {
        //console.log("clear grid")
        const clearGrid = grid.map((nested) => nested.map(cell => ({ ...cell })))
        clearGrid.forEach((nested) => nested.forEach((e) => {
            e.alive = false
            e.value = 0
        }
        ))
        setGrid(clearGrid)
    }

    //Allow you to determine the value of each cell
    const changeValue = (e) => {
        //console.log(e.target.id)
        const destructuredId = e.target.id.split(",")
        //console.log(destructuredId)
        const newGrid = grid.map((nested) => nested.map(cell => ({ ...cell })))
        //console.log(newGrid)
        const newAlive = e.target.className === "dead" ? true : false
        const newValue = e.target.className === "dead" ? 1 : 0
        //console.log("aliveState", newAlive)
        newGrid[destructuredId[0]].splice(destructuredId[1], 1, { alive: newAlive, value: newValue })
        //console.log("destruc: ", newGrid)
        setGrid(newGrid)
    }

    const handleLineCntChange = (e) => {
        const lineNbr = e.target.value
        setLineCount(lineNbr)
        setGrid(generateInitialGrid)
    }

    const handleColCntChange = (e) => {
        const colNbr = e.target.value
        setColCount(colNbr)
        setGrid(generateInitialGrid)
    }


    //console.log("cellsGrid: ", cellsGrid)


    // useEffect(() => {
    //     console.log("prout")
    // }, [grid])



    return (
        <div className='grid-container'>
            <section className='section-button'>
                <Button
                    nextGen={nextGen}
                    clearGrid={clearGrid}
                    handleColCntChange={handleColCntChange}
                    handleLineCntChange={handleLineCntChange}
                    prevGen={previousGen}
                />
            </section>

            <section className='section-grid'>
                <div className='gameoflife-grid'>
                {
                    <NewGeneration
                    grid={grid}
                    changeValue={changeValue}
                    />
                }
                </div>
            </section>
        </div>
    )
}

export default GridGenerator
