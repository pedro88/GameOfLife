import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import NewGeneration from "./NewGeneration";
import SidePanel from "./SidePanel";

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
	//console.log("grid at first: ", grid)

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
		setGrid(generateInitialGrid()); // Regénérer la grille avec les nouvelles dimensions
	}, [lineCount, colCount]);

	//Pass to the next generation
	const nextGen = () => {
		// !playStop ? setCount(count+1) : null
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
					//console.log("vivant")
					cellsGrid[i][j].value = 1;
				} else {
					//console.log("dead")
					cellsGrid[i][j].value = 0;
				}
			}
		}
		//playStop===false ?  setCount(count +1) : null
		setGrid(cellsGrid);
		const h = historic.map((generation) =>
			generation.map((nested) => nested.map((cell) => ({ ...cell })))
		);
		h.push(cellsGrid);
		setHistoric(h);
		//console.log("historic: ", historic)
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
		//console.log("clear grid")
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
		//console.log(e.target.id)
		const destructuredId = e.target.id.split(",");
		//console.log(destructuredId)
		const newGrid = grid.map((nested) =>
			nested.map((cell) => ({ ...cell }))
		);
		//console.log(newGrid)
		const newAlive = e.target.className === "dead" ? true : false;
		const newValue = e.target.className === "dead" ? 1 : 0;
		//console.log("aliveState", newAlive)
		newGrid[destructuredId[0]].splice(destructuredId[1], 1, {
			alive: newAlive,
			value: newValue,
		});
		//console.log("destruc: ", newGrid)
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

		// let timeout = async ()=> {
		// 	return new Promise((res) => setTimeout(() => res()), 1000)
		//   }
		//   while (playStop) {
		// 	await timeout()
		// 	console.log("yo")
		// 	nextGen()
		//   }
	};

	const intervalRef = useRef(null);
	useEffect(() => {
		if (playStop === true) {
			intervalRef.current = setInterval(() => {
				setCount((prevCount) => prevCount + 1);
				console.log(count);
				//nextGen()
			}, speed);
		} else {
			console.log("clear");
			clearInterval(intervalRef.current);
		}
		return () => clearInterval(intervalRef.current);
	}, [playStop]);

	useEffect(() => {
		console.log(count);
		count > 0 ? nextGen() : null;
	}, [count]);

	//console.log("cellsGrid: ", cellsGrid)

	// useEffect(() => {
	//     console.log("prout")
	// }, [grid])

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
			</section>

			<section className="section-side-panel">
				<SidePanel />
			</section>

			<section className="section-grid">
				<h3>Generation : {counter}</h3>
				<h3>Speed : {speed}ms</h3>

				<div className="gameoflife-grid">
					{<NewGeneration grid={grid} changeValue={changeValue} />}
				</div>
			</section>
		</div>
	);
};

export default GridGenerator;
