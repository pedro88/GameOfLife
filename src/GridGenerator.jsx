import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import NewGeneration from "./NewGeneration";
import SidePanel from "./SidePanel";
import {block, blinker, glider, gosperGliderGun} from "./library"



const GridGenerator = () => {
	let cellsGrid = [];
	let passedCellsGrid = [];
	let stateBoolean;

	const livingCell = { alive: true, value: 1 };
	const deadCell = { alive: false, value: 0 };
	const [lineCount, setLineCount] = useState(20);
	const [colCount, setColCount] = useState(20);
	const [historic, setHistoric] = useState([]);
	const [playStop, setPlayStop] = useState(false);
	const [count, setCount] = useState(0);
	const [speed, setSpeed] = useState(500);
	const [counter, setCounter] = useState(0);

	//Build new grid with random value
	const generateInitialGrid = () => {
		console.log("initialisation de la grille...");
		setCount(0);
		let initialGrid = [];
		for (let i = 0; i < lineCount; i++) {
			const newLine = [];
			initialGrid.push(newLine);
			for (let j = 0; j < colCount; j++) {
				const random = Math.random();
				random > 0.3
					? newLine.push(deadCell)
					: newLine.push(livingCell);
			}
		}
		const h = [];
		h.push(initialGrid);
		setHistoric(h);
		return initialGrid;
	};

	const [grid, setGrid] = useState(generateInitialGrid);

	//Check the state of cells beetween 2 generation
	const checkCellState = (line, column) => {
		passedCellsGrid = grid.map((nested) =>
			nested.map((cell) => ({ ...cell }))
		);

		const getValue = (i, j) => {
			if (i < 0 || i >= lineCount || j < 0 || j >= colCount) {
				return 0;
			}
			return passedCellsGrid[i][j].value;
		};
		const sum =
			getValue(line - 1, column - 1) +
			getValue(line - 1, column) +
			getValue(line - 1, column + 1) +
			getValue(line, column - 1) +
			getValue(line, column + 1) +
			getValue(line + 1, column - 1) +
			getValue(line + 1, column) +
			getValue(line + 1, column + 1);

		passedCellsGrid[line][column].alive === true
			? sum === 3 || sum === 2
				? (stateBoolean = true)
				: (stateBoolean = false)
			: sum === 3
				? (stateBoolean = true)
				: (stateBoolean = false);
		return stateBoolean;
	};

	useEffect(() => {
		setGrid(generateInitialGrid());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lineCount, colCount]);

	//Pass to the next generation
	const nextGen = () => {
		setCounter(counter + 1);
		console.log("génération suivante...");
		passedCellsGrid = grid.map((nested) =>
			nested.map((cell) => ({ ...cell }))
		);
		cellsGrid = grid.map((nested) => nested.map((cell) => ({ ...cell })));
		for (let i = 0; i < lineCount; i++) {
			for (let j = 0; j < colCount; j++) {
				checkCellState(i, j);
				cellsGrid[i][j].alive = stateBoolean;
				if (stateBoolean === true) {
					cellsGrid[i][j].value = 1;
				} else {
					cellsGrid[i][j].value = 0;
				}
			}
		}
		setGrid(cellsGrid);
		const h = historic.map((generation) =>
			generation.map((nested) => nested.map((cell) => ({ ...cell })))
		);
		h.push(cellsGrid);
		setHistoric(h);
	};

	//Access to the previous generation
	const previousGen = () => {
		setCounter(counter - 1 < 0 ? 0 : counter - 1);
		const h = historic.map((generation) =>
			generation.map((nested) => nested.map((cell) => ({ ...cell })))
		);
		if (h.length >= 2) {
			setGrid(h[h.length - 2]);
			h.pop();
			setHistoric(h);
		}
	};

	//Clear all the grid
	const clearGrid = () => {
		setCounter(0);
		const clearGrid = grid.map((nested) =>
			nested.map((cell) => ({ ...cell }))
		);
		clearGrid.forEach((nested) =>
			nested.forEach((e) => {
				e.alive = false;
				e.value = 0;
			})
		);
		setGrid(clearGrid);
		console.log(grid.length);
		console.log(grid[0].length);
	};

	//Allow you to determine the value of each cell
	const changeValue = (e) => {
		const destructuredId = e.target.id.split(",");
		const newGrid = grid.map((nested) =>
			nested.map((cell) => ({ ...cell }))
		);
		const newAlive = e.target.className === "dead" ? true : false;
		const newValue = e.target.className === "dead" ? 1 : 0;
		newGrid[destructuredId[0]].splice(destructuredId[1], 1, {
			alive: newAlive,
			value: newValue,
		});
		setGrid(newGrid);
	};

	const handleLineCntChange = (e) => {
		const lineNbr = e.target.value;
		setLineCount(lineNbr);
		setGrid(generateInitialGrid);
	};

	const handleColCntChange = (e) => {
		const colNbr = e.target.value;
		setColCount(colNbr);
		setGrid(generateInitialGrid);
	};

	const handleSpeed = (e) => {
		const speedSetter = e.target.value;
		setSpeed(speedSetter);
		console.log(speed);
	};

	const play = async () => {
		setPlayStop(!playStop);
		console.log(playStop);
		setCount(count + 1);
	};

	const intervalRef = useRef(null);
	useEffect(() => {
		if (playStop === true) {
			intervalRef.current = setInterval(() => {
				setCount((prevCount) => prevCount + 1);
				console.log(count);
			}, speed);
		} else {
			console.log("clear");
			clearInterval(intervalRef.current);
		}
		return () => clearInterval(intervalRef.current);
	}, [count, playStop, speed]);

	useEffect(() => {
		console.log(count);
		count > 0 ? nextGen() : null;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [count]);

const handleLoadLibrary = (e) => {
		console.log(e.target.dataset.value)
		// setColCount(50)
		// setLineCount(50)
		console.log(e.target.dataset.value);
		switch (e.target.dataset.value) {
			case ("block"):
				setGrid(block)
				break			
			case ("blinker") :
				setGrid(blinker)
				break
			case ("glider"):
				setGrid(glider)
				break
			case ("gosper glider gun"):
				setGrid(gosperGliderGun)
				break
		}


}


	return (
		<div className="grid-container">
			<section className="section-button">
				<Button
					nextGen={nextGen}
					clearGrid={clearGrid}
					handleColCntChange={handleColCntChange}
					handleLineCntChange={handleLineCntChange}
					prevGen={previousGen}
					play={play}
					lineCount={lineCount}
					colCount={colCount}
					handleSpeed={handleSpeed}
					speed={speed}
				/>
				<h3>Generation : {counter}</h3>
				<h3>Speed : {speed}ms</h3>
			</section>

			<section className="section-side-panel">
				<SidePanel handleLoadLibrary={handleLoadLibrary}/>
			</section>

			<section className="section-grid">


				<div className="gameoflife-grid">
					{<NewGeneration grid={grid} changeValue={changeValue} />}
				</div>
			</section>
		</div>
	);
};

export default GridGenerator;
