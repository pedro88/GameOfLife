import { useState } from "react";
//import { use } from "react";

const SidePanel = ({handleLoadLibrary}) => {
	const [panel, setPanel] = useState("0");
	const [display, setDisplay] = useState("none");
	const [popupDisplay, setPopupDisplay] = useState("0");

	const panelsArray = [
		{
			name: "History",
			text: [
				"Game of life is created in 1970 by John Horton Conway",
				"It's a zero player game",
				"It's Turing Complete",
				"It can simulate a universal constructor",
			],
			picture: "../public/ressources/John_H_Conway_2005_(cropped).jpg",
			popupContent: [
				{
					//created in...
					image: ["../ressources/John_H_Conway_2005_(cropped).jpg"],
					text: ["Mathematician John Horton Conway in 2005"],
					className: ["large"],
					link: ["https://en.wikipedia.org/wiki/John_Horton_Conway"],
				},
				{
					//zero player game
					image: ["../ressources/giphy.gif"],
					text: [""],
					className: ["large"],
					link: ["https://en.wikipedia.org/wiki/Zero-player_game"],
				},
				{
					//turing complete
					image: ["../ressources/History/turingComplete.jpg"],
					text: ["turing complete game on Steam"],
					className: ["large"],
					link: [
						"https://store.steampowered.com/app/1444480/Turing_Complete/",
					],
				},
				{
					//universale constructor
					image: ["../ressources/giphy (1).gif"],
					text: [""],
					className: ["large"],
					link: [
						"https://en.wikipedia.org/wiki/Von_Neumann_universal_constructor",
					],
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
					image: ["../ressources/codeSnippet/check cell state.png"],
					text: [""],
					className: ["code"],
					link: ["https://github.com/pedro88/GameOfLife"],
				},
				{
					//next Gen
					image: ["../ressources/codeSnippet/aliveState.png"],
					text: [""],
					className: ["code"],
					link: ["https://github.com/pedro88/GameOfLife"],
				},
				{
					//overpopulated
					image: ["../ressources/codeSnippet/deadState.png"],
					text: [""],
					className: ["code"],
					link: [
						"https://github.com/pedro88/GameOfLife",
					],
				},
				{
					//reproduction
					image: ["../ressources/codeSnippet/nextGen.png"],
					text: [""],
					className: ["code"],
					link: ["https://github.com/pedro88/GameOfLife"],
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
						"../ressources/stablesStructures/JdlV_bloc_4.4.gif",
						"../ressources/stablesStructures/JdlV_bloc_5.9.gif",
						"../ressources/stablesStructures/JdlV_bloc_6.12a.gif",
						"../ressources/stablesStructures/JdlV_bloc_6.16.gif",
						"../ressources/stablesStructures/JdlV_bloc_40.182.gif",
					],
					text: [
						"Simple block",
						"The Boat",
						"The Hive",
						"The Barge",
						"40 asymetric cells",
					],
					className: ["small", "small", "small", "small", "small"],
					link: [
						"https://en.wikipedia.org/wiki/Still_life_(cellular_automaton)",
					],
				},
				{
					//periodic structure
					image: [
						"../ressources/periodic structure/JdlV_osc_3.169.gif",
						"../ressources/periodic structure/clock.gif",
						"../ressources/periodic structure/funtain.gif",
						"../ressources/periodic structure/kok galaxy.gif",
						"../ressources/periodic structure/pentadecathlon.gif",
					],
					text: [
						"A single oscillator",
						"A clock",
						"The Funtain",
						"KOK's galaxy",
						"Pentadecathlon",
					],
					className: ["small", "small", "small", "small", "small"],
					link: [
						"https://en.wikipedia.org/wiki/Oscillator_(cellular_automaton)",
					],
				},
				{
					//ships
					image: [
						"../ressources/ships/ant.gif",
						"../ressources/ships/LWS.gif",
						"../ressources/ships/HWSS.gif",
					],
					text: [
						"The ant, smallest ship of the gmae",
						"LWSS - Light Medium & Heavy Weight SpaceShips",
						"HWSS - Heavy Weight SpaceShip",
					],
					className: ["small", "small", "small"],
					link: [
						"https://en.wikipedia.org/wiki/Spaceship_(cellular_automaton)",
					],
				},
				{
					//puffers
					image: [
						"../ressources/puffers/Premier_puffeur_decouvert.jpg",
						"../ressources/puffers/Puffeur.jpg",
					],
					text: [
						"First puffer discovered (1971)",
						"Another puffer",
						
					],
					className: ["long", "long"],
					link: ["https://en.wikipedia.org/wiki/Puffer_train"],
				},
				{
					//canon
					image: [
						"../ressources/canon/350px-Game_of_life_glider_gun.png",
						"../ressources/canon/Gospers_glider_gun.gif",
					],
					text: [
						"Gosper Glider Gun",
						"Gosper Glider Gun",
					],
					className: ["large"],
					link: [
						"https://en.wikipedia.org/wiki/Gun_(cellular_automaton)",
					],
				},
				{
					//edenGarden
					image: [
						"../ressources/edenGarden/Garden_of_Eden_1.png",
						"../ressources/edenGarden/Garden_of_Eden_4.png",
					],
					text: [
						"Eden Garden",
						"Eden Garden",
					],
					className: ["large", "small"],
					link: [
						"https://en.wikipedia.org/wiki/Garden_of_Eden_(cellular_automaton)",
					],
				},
				{
					//spacefiller
					image: ["../public/ressources/spacefiller/Spacefiller.jpg"],
					text: [
						"First puffer discovered (1971)",
						"LWSS - Light Medium & Heavy Weight SpaceShips",
						"HWSS - Heavy Weight SpaceShip",
					],
					className: ["large"],
					link: ["https://en.wikipedia.org/wiki/Spacefiller"],
				},
			],
		},
		{
		name: "Link",
			text: [
				"Netlify Web App"
			],
			picture: "../public/ressources/John_H_Conway_2005_(cropped).jpg",
			popupContent: [
				{
					//created in...
					image: ["../public/ressources/qr-code.png"],
					text: [""],
					className: ["large"],
					link: ["https://pierre-react-game-of-life.netlify.app/"],
				},
			],
		},
		{
			name: "Library",
				text: [
					"block",
					"blinker",
					"glider",
					"gosper glider gun"
				],
				picture: "../public/ressources/John_H_Conway_2005_(cropped).jpg",
				popupContent: [
					{
						//created in...
						image: ["../public/ressources/qr-code.png"],
						text: [""],
						className: ["large"],
						link: ["https://pierre-react-game-of-life.netlify.app/"],
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
	const handleMouseLeave = () => {
		setPopupDisplay(0);
		setDisplay("none");
	};





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
							Link
						</th>
						<th id="4" onClick={handleState}>
							Library
						</th>
					</tr>
				</table>

				<h2>{panelsArray[panel].name}</h2>
				<ul>
					{panel<4 ?	(
						panelsArray[panel].text.map((el, index) => (
							<li
								key={el}
								id={panel + index}
								onMouseEnter={handleMouseEnter}
							>
								{el}
							</li>					
					))) : (
						panelsArray[panel].text.map((el, index) => (
							<li
								key={el}
								id={panel + index}
								onClick={handleLoadLibrary}
								data-value={el}								
							>
								{el}
							</li>
					)))}
				</ul>
				{/* <img
					src="public\ressources\John_H_Conway_2005_(cropped).jpg"
					alt=""
				/> */}
			</div>
			<div
				className="popup"
				onMouseLeave={handleMouseLeave}
				style={{ display: display }}
			>
				{panelsArray[panel].popupContent[popupDisplay].image.map(
					(e, index) => (
						<div key={index} className="popup-item">
							<a
								href={
									panelsArray[panel].popupContent[
										popupDisplay
									].link[0]
								}
								target="_blank"
							>
								<img
									className={
										panelsArray[panel].popupContent[
											popupDisplay
										].className[index]
									}
									name={index.toString()}
									src={e}
									alt={`Popup image ${index}`}
								/>
								<br />
								<label htmlFor={index.toString()}>
									{
										panelsArray[panel].popupContent[
											popupDisplay
										].text[index]
									}
								</label>
							</a>
						</div>
					)
				)}
			</div>
		</>
	);
};

export default SidePanel;
