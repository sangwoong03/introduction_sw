import createSkillBar from "./skill.js";
const pallete = document.querySelector(".control__colors");
const sliderBtn = document.querySelector(".slider.round");
const sideSec = document.querySelector(".side--section");
const title = document.querySelectorAll(".main--title");
const navList = document.querySelectorAll(".nav--list");
const btn = document.querySelector(".color-btn");
const container = document.querySelector(".container");
const skillBar = document.querySelectorAll(".skill--bar");
const sliderInput = document.querySelector("#dark-mode-changer");

// Color Change Module
const COLOR_THEME = [
	"#2c2c2c",
	"#e2e2e2",
	"#ff3b30",
	"#ff9500",
	"#ffcc00",
	"#4cd963",
	"#5ac8fa",
	"#0579ff",
	"#5856d6",
];

// Create the Html element
function palletMaker(color) {
	return `<div class="controls__color" style="background: ${color} "}> </div>`;
}

btn.onclick = () => {
	const classCheck = pallete.classList.contains("visible");

	if (classCheck) {
		pallete.classList.remove("visible");
		pallete.innerHTML = COLOR_THEME.map((item) => palletMaker(item)).join("");
	} else {
		pallete.classList.add("visible");
	}
};

function colorChanger(e) {
	const PAINT = "controls__color";
	const color = e.target.style.backgroundColor;

	if (e.target.className === PAINT) {
		sideSec.style.borderRight = `1px solid ${color}`;
		sliderBtn.style.backgroundColor = color;
		container.style.boxShadow = `0 3px 10px ${color}, 0 1px 3px ${color}`;
		navListTitleColor(color);
		skillBarColor(color);
	} else if (color == "#ffffff") {
		console.log("click the paint of pallet");
	}
}

function navListTitleColor(color) {
	for (let i = 0; i < navList.length; i++) {
		navList[i].style.color = color;
		title[i].style.color = color;
	}
}

function skillBarColor(color) {
	for (let i = 0; i < skillBar.length; i++) {
		skillBar[i].style.background = color;
	}
}

document.addEventListener("click", colorChanger);
