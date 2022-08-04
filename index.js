let bosses;
initBosses();

function initBosses() {
	bosses = [
		{
			name: "Zakum",
			difficulty: "Easy",
			type: "Daily",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 1000000,
			mesosChanged: 1000000,
			mesosUniqueAdd: 0.01,
			crystals: [],
		},
		{
			name: "Zakum",
			difficulty: "Normal",
			type: "Daily",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 3062500,
			mesosChanged: 3062500,
			mesosUniqueAdd: 0.02,
			crystals: [],
		},
		{
			name: "Zakum",
			difficulty: "Chaos",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 81000000,
			mesosChanged: 81000000,
			mesosUniqueAdd: 0.03,
			crystals: [],
		},
		{
			name: "Magnus",
			difficulty: "Easy",
			type: "Daily",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 3610000,
			mesosChanged: 3610000,
			mesosUniqueAdd: 0.04,
			crystals: [],
		},
		{
			name: "Magnus",
			difficulty: "Normal",
			type: "Daily",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 12960000,
			mesosChanged: 12960000,
			mesosUniqueAdd: 0.05,
			crystals: [],
		},
		{
			name: "Magnus",
			difficulty: "Hard",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 95062500,
			mesosChanged: 95062500,
			mesosUniqueAdd: 0.06,
			crystals: [],
		},
		{
			name: "Hilla",
			difficulty: "Normal",
			type: "Daily",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 4000000,
			mesosChanged: 4000000,
			mesosUniqueAdd: 0.07,
			crystals: [],
		},
		{
			name: "Hilla",
			difficulty: "Hard",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 56250000,
			mesosChanged: 56250000,
			mesosUniqueAdd: 0.08,
			crystals: [],
		},
		{
			name: "OMNI_CLN",
			difficulty: "Normal",
			type: "Daily",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 6250000,
			mesosChanged: 6250000,
			mesosUniqueAdd: 0.09,
			crystals: [],
		},
		{
			name: "Papulatus",
			difficulty: "Easy",
			type: "Daily",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 3422500,
			mesosChanged: 3422500,
			mesosUniqueAdd: 0.1,
			crystals: [],
		},
		{
			name: "Papulatus",
			difficulty: "Normal",
			type: "Daily",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 13322500,
			mesosChanged: 13322500,
			mesosUniqueAdd: 0.11,
			crystals: [],
		},
		{
			name: "Papulatus",
			difficulty: "Chaos",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 132250000,
			mesosChanged: 132250000,
			mesosUniqueAdd: 0.12,
			crystals: [],
		},
		{
			name: "Pierre",
			difficulty: "Normal",
			type: "Daily",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 4840000,
			mesosChanged: 4840000,
			mesosUniqueAdd: 0.13,
			crystals: [],
		},
		{
			name: "Pierre",
			difficulty: "Chaos",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 81000000,
			mesosChanged: 81000000,
			mesosUniqueAdd: 0.14,
			crystals: [],
		},
		{
			name: "Von Bon",
			difficulty: "Normal",
			type: "Daily",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 4840000,
			mesosChanged: 4840000,
			mesosUniqueAdd: 0.15,
			crystals: [],
		},
		{
			name: "Von Bon",
			difficulty: "Chaos",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 81000000,
			mesosChanged: 81000000,
			mesosUniqueAdd: 0.16,
			crystals: [],
		},
		{
			name: "Crimson Queen",
			difficulty: "Normal",
			type: "Daily",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 4840000,
			mesosChanged: 4840000,
			mesosUniqueAdd: 0.17,
			crystals: [],
		},
		{
			name: "Crimson Queen",
			difficulty: "Chaos",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 81000000,
			mesosChanged: 81000000,
			mesosUniqueAdd: 0.18,
			crystals: [],
		},
		{
			name: "Vellum",
			difficulty: "Normal",
			type: "Daily",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 4840000,
			mesosChanged: 4840000,
			mesosUniqueAdd: 0.19,
			crystals: [],
		},
		{
			name: "Vellum",
			difficulty: "Chaos",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 105062500,
			mesosChanged: 105062500,
			mesosUniqueAdd: 0.2,
			crystals: [],
		},
		{
			name: "Von Leon",
			difficulty: "Easy",
			type: "Daily",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 5290000,
			mesosChanged: 5290000,
			mesosUniqueAdd: 0.21,
			crystals: [],
		},
		{
			name: "Von Leon",
			difficulty: "Normal",
			type: "Daily",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 7290000,
			mesosChanged: 7290000,
			mesosUniqueAdd: 0.22,
			crystals: [],
		},
		{
			name: "Von Leon",
			difficulty: "Hard",
			type: "Daily",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 12250000,
			mesosChanged: 12250000,
			mesosUniqueAdd: 0.23,
			crystals: [],
		},
		{
			name: "Horntail",
			difficulty: "Easy",
			type: "Daily",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 4410000,
			mesosChanged: 4410000,
			mesosUniqueAdd: 0.24,
			crystals: [],
		},
		{
			name: "Horntail",
			difficulty: "Normal",
			type: "Daily",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 5062500,
			mesosChanged: 5062500,
			mesosUniqueAdd: 0.25,
			crystals: [],
		},
		{
			name: "Horntail",
			difficulty: "Chaos",
			type: "Daily",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 6760000,
			mesosChanged: 6760000,
			mesosUniqueAdd: 0.26,
			crystals: [],
		},
		{
			name: "Arkarium",
			difficulty: "Easy",
			type: "Daily",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 5760000,
			mesosChanged: 5760000,
			mesosUniqueAdd: 0.27,
			crystals: [],
		},
		{
			name: "Arkarium",
			difficulty: "Normal",
			type: "Daily",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 12602500,
			mesosChanged: 12602500,
			mesosUniqueAdd: 0.28,
			crystals: [],
		},
		{
			name: "Pink Bean",
			difficulty: "Normal",
			type: "Daily",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 7022500,
			mesosChanged: 7022500,
			mesosUniqueAdd: 0.29,
			crystals: [],
		},
		{
			name: "Pink Bean",
			difficulty: "Chaos",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 64000000,
			mesosChanged: 64000000,
			mesosUniqueAdd: 0.3,
			crystals: [],
		},
		{
			name: "Cygnus",
			difficulty: "Easy",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 45562500,
			mesosChanged: 45562500,
			mesosUniqueAdd: 0.31,
			crystals: [],
		},
		{
			name: "Cygnus",
			difficulty: "Normal",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 72250000,
			mesosChanged: 72250000,
			mesosUniqueAdd: 0.32,
			crystals: [],
		},
		{
			name: "Lotus",
			difficulty: "Normal",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 162562500,
			mesosChanged: 162562500,
			mesosUniqueAdd: 0.33,
			crystals: [],
		},
		{
			name: "Lotus",
			difficulty: "Hard",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 370562500,
			mesosChanged: 370562500,
			mesosUniqueAdd: 0.34,
			crystals: [],
		},
		{
			name: "Damien",
			difficulty: "Normal",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 169000000,
			mesosChanged: 169000000,
			mesosUniqueAdd: 0.35,
			crystals: [],
		},
		{
			name: "Damien",
			difficulty: "Hard",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 351562500,
			mesosChanged: 351562500,
			mesosUniqueAdd: 0.36,
			crystals: [],
		},
		{
			name: "Guardian Angel Slime",
			difficulty: "Normal",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 171610000,
			mesosChanged: 171610000,
			mesosUniqueAdd: 0.37,
			crystals: [],
		},
		{
			name: "Guardian Angel Slime",
			difficulty: "Chaos",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 451562500,
			mesosChanged: 451562500,
			mesosUniqueAdd: 0.38,
			crystals: [],
		},
		{
			name: "Lucid",
			difficulty: "Easy",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 175562500,
			mesosChanged: 175562500,
			mesosUniqueAdd: 0.39,
			crystals: [],
		},
		{
			name: "Lucid",
			difficulty: "Normal",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 203062500,
			mesosChanged: 203062500,
			mesosUniqueAdd: 0.4,
			crystals: [],
		},
		{
			name: "Lucid",
			difficulty: "Hard",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 400000000,
			mesosChanged: 400000000,
			mesosUniqueAdd: 0.41,
			crystals: [],
		},
		{
			name: "Will",
			difficulty: "Easy",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 191275000,
			mesosChanged: 191275000,
			mesosUniqueAdd: 0.42,
			crystals: [],
		},
		{
			name: "Will",
			difficulty: "Normal",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 232562500,
			mesosChanged: 232562500,
			mesosUniqueAdd: 0.43,
			crystals: [],
		},
		{
			name: "Will",
			difficulty: "Hard",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 441000000,
			mesosChanged: 441000000,
			mesosUniqueAdd: 0.44,
			crystals: [],
		},
		{
			name: "Gloom",
			difficulty: "Normal",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 248062500,
			mesosChanged: 248062500,
			mesosUniqueAdd: 0.45,
			crystals: [],
		},
		{
			name: "Gloom",
			difficulty: "Chaos",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 462250000,
			mesosChanged: 462250000,
			mesosUniqueAdd: 0.46,
			crystals: [],
		},
		{
			name: "Verus Hilla",
			difficulty: "Normal",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 447600000,
			mesosChanged: 447600000,
			mesosUniqueAdd: 0.47,
			crystals: [],
		},
		{
			name: "Verus Hilla",
			difficulty: "Hard",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 552250000,
			mesosChanged: 552250000,
			mesosUniqueAdd: 0.48,
			crystals: [],
		},
		{
			name: "Darknell",
			difficulty: "Normal",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 264062500,
			mesosChanged: 264062500,
			mesosUniqueAdd: 0.49,
			crystals: [],
		},
		{
			name: "Darknell",
			difficulty: "Hard",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 484000000,
			mesosChanged: 484000000,
			mesosUniqueAdd: 0.5,
			crystals: [],
		},
		{
			name: "Black Mage",
			difficulty: "Hard",
			type: "Monthly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 2500000000,
			mesosChanged: 2500000000,
			mesosUniqueAdd: 0.51,
			crystals: [],
		},
		{
			name: "Chosen Seren",
			difficulty: "Normal",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 668437500,
			mesosChanged: 668437500,
			mesosUniqueAdd: 0.52,
			crystals: [],
		},
		{
			name: "Chosen Seren",
			difficulty: "Hard",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 756250000,
			mesosChanged: 756250000,
			mesosUniqueAdd: 0.53,
			crystals: [],
		},
		{
			name: "Kalos The Guardian",
			difficulty: "Chaos",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 1000000000,
			mesosChanged: 1000000000,
			mesosUniqueAdd: 0.54,
			crystals: [],
		},
		{
			name: "Ranmaru",
			difficulty: "Normal",
			type: "Daily",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 4202500,
			mesosChanged: 4202500,
			mesosUniqueAdd: 0.55,
			crystals: [],
		},
		{
			name: "Ranmaru",
			difficulty: "Hard",
			type: "Daily",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 13322500,
			mesosChanged: 13322500,
			mesosUniqueAdd: 0.56,
			crystals: [],
		},
		{
			name: "Princess No",
			difficulty: "Normal",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 81000000,
			mesosChanged: 81000000,
			mesosUniqueAdd: 0.57,
			crystals: [],
		},
		{
			name: "Julieta",
			difficulty: "Normal",
			type: "Daily",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 6000000,
			mesosChanged: 6000000,
			mesosUniqueAdd: 0.58,
			crystals: [],
		},
		{
			name: "Akechi Mitsuhide",
			difficulty: "Normal",
			type: "Weekly",
			previousValue: 0,
			previousValueTwo: 1,
			mesos: 144000000,
			mesosChanged: 144000000,
			mesosUniqueAdd: 0.59,
			crystals: [],
		},
	];
}

const bossesContainer = document.querySelector("#bosses");

////////////////////////////////////////////////////////////////////////////////////////////
//
//    LOCALSTORAGE
//
////////////////////////////////////////////////////////////////////////////////////////////
function storeInfo() {
	localStorage.setItem("info", JSON.stringify(bosses));
}

const bossesLs = JSON.parse(localStorage.getItem("info"));

if (bossesLs) {
	bosses = bossesLs;
}

////////////////////////////////////////////////////////////////////////////////////////////
//
//    DYNAMIC HTML
//
////////////////////////////////////////////////////////////////////////////////////////////
function initializeHtml() {
	let uniqueBossesHtml = "";
	for (let i = 0; i < bosses.length; i++) {
		uniqueBossesHtml += `<section class="unique-boss">
		<img class="boss-image" src="images/${bosses[i].name
			.replace(/\s+/g, "_")
			.toLocaleLowerCase()}.png"/>
				<div class="main-container">
					<p class="bossName border">${bosses[i].difficulty} ${bosses[i].name}</p>
					<p class="type border">
					${bosses[i].type}</p>
					<p class="mesos border">
					${bosses[i].mesos.toLocaleString()}
					<br> 
					mesos
					</p>
						<input
							class="playersInParty border"
							type="number"
							min="1"
							max="6"
							value="1"
							style="font-size: 20px"
							onkeydown="return false;"
							id="playersInParty${bosses[i].name.replace(/\s+/g, "")}${bosses[i].difficulty}"
						/>
						<input
							class="characters border"
							type="number"
							min="0"
							max="60"
							value="0"
							style="font-size: 20px"
							onkeydown="return false;"
							id="characters${bosses[i].name.replace(/\s+/g, "")}${bosses[i].difficulty}"
						/>
				</div>
				<div class="crystal-img-amount">
					<div>
						<img src="images/grey.png"/>
					</div>
					<div>
					<p class="crystalsToBeSold">x 0</p>
					</div>
				</div>
			</section>`;
	}
	bossesContainer.innerHTML = uniqueBossesHtml;
}
initializeHtml();

//if values changes
function editHtml() {
	for (let i = 0; i < bosses.length; i++) {
		//displays mesos value of boss crystal in html
		bossesContainer.children[i].children[1].children[2].innerHTML = `
			${Math.floor(bosses[i].mesos / bosses[i].previousValueTwo).toLocaleString()}
			<br> mesos`;
	}
}

////////////////////////////////////////////////////////////////////////////////////////////
//
//    EVENT LISTENER FOR INPUTS ON LEFT SIDE
//
////////////////////////////////////////////////////////////////////////////////////////////
for (let i = 0; i < bosses.length; i++) {
	bossesContainer.children[i].children[1].children[3].addEventListener(
		"change",
		(event) => {
			const buttonId = document.querySelector(`#${event.target.id}`);
			const buttonValue = parseInt(buttonId.value);
			const bossCrystals = bosses[i].crystals;
			const type = bosses[i].type;
			const bossMesos = bosses[i].mesos;
			const bossMesosUniqueAdd = bosses[i].mesosUniqueAdd;

			bosses[i].previousValueTwo = parseInt(buttonId.value);
			//updates base mesos value for crystals in bosses objects array
			bosses[i].mesosChanged = Math.floor(bossMesos / buttonValue);

			//updates mesos values of current crystals in bosses objects array
			for (let i = 0; i < bossCrystals.length; i++) {
				bossCrystals[i] =
					Math.floor(bossMesos / buttonValue) + bossMesosUniqueAdd;
			}

			editHtml();
			sortAndAdd();
		}
	);
}

////////////////////////////////////////////////////////////////////////////////////////////
//
//    EVENT LISTENER FOR INPUTS ON RIGHT SIDE
//
////////////////////////////////////////////////////////////////////////////////////////////
for (let i = 0; i < bosses.length; i++) {
	bossesContainer.children[i].children[1].children[4].addEventListener(
		"change",
		(event) => {
			const buttonId = document.querySelector(`#${event.target.id}`);
			const buttonValue = parseInt(buttonId.value);
			const bossCrystals = bosses[i].crystals;
			const bossMesos = bosses[i].mesosChanged;
			const bossMesosUniqueAdd = bosses[i].mesosUniqueAdd;
			const type = bosses[i].type;

			//pushes crystal values to array if input increments
			if (buttonValue > bosses[i].previousValue) {
				if (bosses[i].name === "Julieta") {
					for (let i = 0; i < 28; i++) {
						bossCrystals.push(bossMesos + bossMesosUniqueAdd);
					}
				} else if (type === "Daily") {
					for (let i = 0; i < 7; i++) {
						bossCrystals.push(bossMesos + bossMesosUniqueAdd);
					}
				} else if (type === "Weekly") {
					for (let i = 0; i < 1; i++) {
						bossCrystals.push(bossMesos + bossMesosUniqueAdd);
					}
				} else {
					for (let i = 0; i < 1; i++) {
						bossCrystals.push(bossMesos + bossMesosUniqueAdd);
					}
				}
				//removes crystal values from array if input decreases
			} else {
				if (bosses[i].name === "Julieta") {
					bossCrystals.splice(0, 28);
				} else if (type === "Daily") {
					bossCrystals.splice(0, 7);
				} else if (type === "Weekly") {
					bossCrystals.splice(0, 1);
				} else {
					bossCrystals.splice(0, 1);
				}
			}
			bosses[i].previousValue = parseInt(buttonId.value);

			sortAndAdd();
		}
	);
}

////////////////////////////////////////////////////////////////////////////////////////////
//
//    SORTING OF ARRAY, FINDING 180 HIGHEST VALUES AND EDITING OF HTML
//
////////////////////////////////////////////////////////////////////////////////////////////
function sortAndAdd() {
	const counts = {};
	const newBosses = [];
	const highestPrices = [];

	//pushes values of crystals from all the objects arrays to one array
	for (let i = 0; i < bosses.length; i++) {
		newBosses.push(...bosses[i].crystals);
	}

	//sorts array highest value to lowest value
	newBosses.sort(function (a, b) {
		return b - a;
	});

	//pushes first 180 values from one array to a new array
	if (newBosses.length <= 180) {
		highestPrices.push(...newBosses);
	} else {
		for (let i = 0; i < 180; i++) {
			highestPrices.push(newBosses[i]);
		}
	}

	//function for counting specific values in array
	function count() {
		for (const num of highestPrices) {
			counts[num] = counts[num] ? counts[num] + 1 : 1;
		}
	}
	count();

	//changes boss crystal image and amount html based on specific values in array
	for (let i = 0; i < bosses.length; i++) {
		const textPath = bossesContainer.children[i].children[2].children[1].children[0];
		const imgPath = bossesContainer.children[i].children[2].children[0];

		if (counts[bosses[i].mesosChanged + bosses[i].mesosUniqueAdd] === undefined) {
			textPath.textContent = "x 0";
			imgPath.innerHTML = "<img src='images/grey.png' class='bossCrystal' />";
		} else {
			textPath.textContent =
				"x " + counts[bosses[i].mesosChanged + bosses[i].mesosUniqueAdd];
			imgPath.innerHTML = "<img src='images/blue.png' class='bossCrystal' />";
		}
	}
	storeInfo();
	console.log(highestPrices);
}

////////////////////////////////////////////////////////////////////////////////////////////
//
//    LOCALSTORAGE INPUT VALUE EDITS
//
////////////////////////////////////////////////////////////////////////////////////////////
//if there is localstorage, edit values of inputs and run functions
if (bossesLs) {
	for (let i = 0; i < bosses.length; i++) {
		//left input
		bossesContainer.children[i].children[1].children[3].value =
			bosses[i].previousValueTwo;

		//right input
		bossesContainer.children[i].children[1].children[4].value =
			bosses[i].previousValue;
	}
	sortAndAdd();
	editHtml();
}

////////////////////////////////////////////////////////////////////////////////////////////
//
//    RESET BUTTON
//
////////////////////////////////////////////////////////////////////////////////////////////
function reset() {
	localStorage.clear();
	for (let i = 0; i < bosses.length; i++) {
		//input left side html value
		bossesContainer.children[i].children[1].children[3].value = 1;
		//input right side html value
		bossesContainer.children[i].children[1].children[4].value = 0;

		//boss crystal image and amount to sell
		bossesContainer.children[i].children[2].children[0].innerHTML =
			"<img src='images/grey.png' class='bossCrystal' />";
		bossesContainer.children[i].children[2].children[1].children[0].textContent =
			"x 0";
	}
	initBosses();
	editHtml();
}
