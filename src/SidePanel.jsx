import React, { useState, useEffect } from "react";
import { use } from "react";

const SidePanel = () => {
	const [panel, setPanel] = useState(1);
	const [display, setDisplay] = useState("none");
	const [popupDisplay, setPopupDisplay] = useState(0);

	const panelsArray = [
		{
			name: "History",
			text: [
				"Game of life is created in 1970 by John Horton Conway",
				"It's a zero player game",
				"Evolution of the game is determined by its initial state",
				"It's Turing Complete",
				"It can simulate a universal constructor",
			],
			picture: "../public/ressources/John_H_Conway_2005_(cropped).jpg",
			popupContent: [
				{
					//created in...
					image: [
						"../public/ressources/John_H_Conway_2005_(cropped).jpg",
					],
					text: [
						"Mathematician John Horton Conway in 2005",
					],
					className: [
						"large",
					]
				},
				{
					//zero player game
					image: [

						"",
					],
					text: [
						"",
					],
					className: [
						"large",
					]
				},
				{
					//Determine by initial state
					image: [
						"../public/ressources/codeSnippet/grid generator.png",
					],
					text: [
						"",
					],
					className: [
						"code",
					]
				},
				{
					//turing complete
					image: [
						"../public/ressources/History/turingComplete.jpg",
					],
					text: [
						"turing complete game on Steam",

					],
					className: [
						"large",
					]
				},
				{
					//universale constructor
					image: [
						"",
					],
					text: [
						"",
					],
					className: [
						"large",
					]
				},
			],
		},
		{
			name: "Rules",
			text: [
				"Any live cell with fewer than two live neighbours dies, as if by underpopulation",
				"Any live cell with two or three live neighbours lives on to the next generation",
				"Any live cell with more than three live neighbours dies, as if by overpopulation",
				"Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction",
			],
			pictures: "",
			popupContent: [
				{
					//underpopulated
					image: [
						"../public/ressources/codeSnippet/check cell state.png",
					],
					text: [
						"",
					],
					className: [
						"code",
					]
				},
				{
					//next Gen
					image: [
						"../public/ressources/codeSnippet/aliveState.png",
					],
					text: [
						"",
					],
					className: [
						"code",
					]
				},
				{
					//overpopulated
					image: [
						"../public/ressources/codeSnippet/deadState.png",
					],
					text: [
						"",
					],
					className: [
						"code",
					]
				},
				{
					//reproduction
					image: [
						"../public/ressources/codeSnippet/nextGen.png",
					],
					text: [
						"",
					],
					className: [
						"code",
					]
				},
			],
		},
		{
			name: "Main structures",
			text: [
				"Stables structures",
				"Periodic structures",
				"Ships",
				"Puffers",
				"Canon",
				"Eden Garden",
				"SpaceFiller",
			],
			popupContent: [
				{
					//stable structure
					image: [
						"../public/ressources/stablesStructures/JdlV_bloc_4.4.gif",
						"../public/ressources/stablesStructures/JdlV_bloc_5.9.gif",
						"../public/ressources/stablesStructures/JdlV_bloc_6.12a.gif",
						"../public/ressources/stablesStructures/JdlV_bloc_6.16.gif",
						"../public/ressources/stablesStructures/JdlV_bloc_40.182.gif",
					],
					text: [
						"A single oscillator",
						"A clock",
						"The Funtain",
						"KOK's galaxy",
						"Pentadecathlon",
					],
					className: [
						"small",
						"small",
						"small",
						"small",
						"small",
					]
				},
				{
					//periodic structure
					image: [
						"../public/ressources/periodic structure/JdlV_osc_3.169.gif",
						"../public/ressources/periodic structure/clock.gif",
						"../public/ressources/periodic structure/funtain.gif",
						"../public/ressources/periodic structure/kok galaxy.gif",
						"../public/ressources/periodic structure/pentadecathlon.gif",
					],
					text: [
						"A single oscillator",
						"A clock",
						"The Funtain",
						"KOK's galaxy",
						"Pentadecathlon",
					],
					className: [
						"small",
						"small",
						"small",
						"small",
						"small",
					]
				},
				{
					//ships
					image: [
						"../public/ressources/ships/ant.gif",
						"../public/ressources/ships/LWS.gif",
						"../public/ressources/ships/HWSS.gif",
					],
					text: [
						"An ant, smallest ship of the gmae",
						"LWSS - Light Medium & Heavy Weight SpaceShips",
						"HWSS - Heavy Weight SpaceShip",
					],
					className: [
						"small",
						"small",
						"small",
					]
				},
				{
					//puffers
					image: [
						"../public/ressources/puffers/Premier_puffeur_decouvert.jpg",
						"../public/ressources/puffers/Puffeur.jpg",
					],
					text: [
						"First puffer discovered (1971)",
						"LWSS - Light Medium & Heavy Weight SpaceShips",
						"HWSS - Heavy Weight SpaceShip",
					],
					className: [
						"long",
						"long",
					]
				},
				{
					//canon
					image: [
						"../public/ressources/canon/350px-Game_of_life_glider_gun.png",
						"../public/ressources/canon/Gospers_glider_gun.gif",
					],
					text: [
						"First puffer discovered (1971)",
						"LWSS - Light Medium & Heavy Weight SpaceShips",
						"HWSS - Heavy Weight SpaceShip",
					],
					className: [
						"large",
					]
				},
				{
					//edenGarden
					image: [
						"../public/ressources/edenGarden/Garden_of_Eden_1.png",
						"../public/ressources/edenGarden/Garden_of_Eden_4.png",
					],
					text: [
						"First puffer discovered (1971)",
						"LWSS - Light Medium & Heavy Weight SpaceShips",
						"HWSS - Heavy Weight SpaceShip",
					],
					className: [
						"large",
						"small"
					]
				},
				{
					//spacefiller
					image: ["../public/ressources/spacefiller/Spacefiller.jpg"],
					text: [
						"First puffer discovered (1971)",
						"LWSS - Light Medium & Heavy Weight SpaceShips",
						"HWSS - Heavy Weight SpaceShip",
					],
					className: [
						"large",
					]
				},
			],
		},
	];

	const handleState = (e) => {
		console.log(e.target.id);
		setPanel(e.target.id);
	};

	let popupIndex;

	const handleMouseEnter = (e) => {
		console.log("id: ", e.target.id);
		popupIndex = e.target.id.substr(1);
		console.log("popupIndex: ", popupIndex);
		setPopupDisplay(popupIndex);
		console.log("popupDisplay: ", popupDisplay);
		setDisplay("flex");
		console.log(panelsArray[panel].popupContent[popupDisplay].image);
	};
	const handleMouseLeave = (e) => {
		setPopupDisplay(0);
		setDisplay("none");
	};
	// useEffect(() => {
	// 	setPopupDisplay(popupIndex)
	// }, [popupIndex])

	return (
		<>
			<div className="div-side-panel">
				<table>
					<tr>
						<th id="0" onClick={handleState}>
							History
						</th>
						<th id="1" onClick={handleState}>
							Rules
						</th>
						<th id="2" onClick={handleState}>
							Main Structures
						</th>
						<th id="3" onClick={handleState}>
							Library
						</th>
					</tr>
				</table>

				<h2>{panelsArray[panel].name}</h2>
				<ul>
					{panelsArray[panel].text.map((el, index) => (
						<li
							key={el}
							id={panel + index}
							onMouseEnter={handleMouseEnter}
							
						>
							{el}
						</li>
					))}
				</ul>
				{/* <img
					src="public\ressources\John_H_Conway_2005_(cropped).jpg"
					alt=""
				/> */}
			</div>
			<div className="popup" onMouseLeave={handleMouseLeave} style={{ display: display }}>
				{panelsArray[panel].popupContent[popupDisplay].image.map(
					(e, index) => (
						<div key={index} className="popup-item">
							<img
								className={panelsArray[panel].popupContent[popupDisplay].className[index]}
								name={index.toString()} // Ensure `name` is a string
								src={e}
								alt={`Popup image ${index}`}
								/>
								<br/>
							<label key={index} htmlFor={index.toString()}>
								{
									panelsArray[panel].popupContent[
										popupDisplay
									].text[index]
								}
							</label>
						</div>
					)
				)}
			</div>
		</>
	);
};

export default SidePanel;
