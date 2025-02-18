/* eslint-disable react/prop-types */
//import React from "react";

const Button = ({
	prevGen,
	play,
	nextGen,
	clearGrid,
	handleColCntChange,
	handleLineCntChange,
	lineCount,
	colCount,
	handleSpeed,
	speed,
}) => {
	return (
		<div className="BtnContainer flex-container">
			<button onClick={prevGen}>Previous Generation</button>
			<button onClick={play}>Play/Stop</button>
			<button onClick={nextGen}>Next Generation</button>
			<button onClick={clearGrid}>Clear Grid</button>
			<br />
			<label htmlFor="lineCount">Number of line</label>
			<input
				onChange={handleLineCntChange}
				type="range"
				min="3"
				max="50"
				value={lineCount}
				className="slider"
				id="lineCount"
			></input>
			<br />
			<label htmlFor="colCount">Number of column</label>
			<input
				onChange={handleColCntChange}
				type="range"
				min="3"
				max="50"
				value={colCount}
				className="slider"
				id="colCount"
			></input>
			<br />
			<label htmlFor="speed">Speed</label>
			<input
				onChange={handleSpeed}
				type="range"
				min="50"
				max="1000"
				value={speed}
				className="slider"
				id="speed"
			></input>
		</div>
	);
};

export default Button;
