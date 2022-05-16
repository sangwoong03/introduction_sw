import createSkillBar from "./skill.js";
const pallete = document.querySelector(".control__colors");
const sliderBtn = document.querySelector(".slider.round");
const sideSec = document.querySelector(".side--section");
const title = document.querySelectorAll(".main--title");
const navList = document.querySelectorAll(".nav--list");
const btn = document.querySelector(".color-btn");
const containerDiv = document.querySelector(".container");
const skillBar = document.querySelectorAll(".skill--bar");
const inputSlider = document.querySelector("input");

// Color Change Module
const COLOR_THEME = [
	{ id: 1, color: "#2c2c2c" },
	{ id: 2, color: "#e2e2e2" },
	{ id: 3, color: "#ff3b30" },
	{ id: 4, color: "#ff9500" },
	{ id: 5, color: "#ffcc00" },
	{ id: 6, color: "#4cd963" },
	{ id: 7, color: "#5ac8fa" },
	{ id: 8, color: "#0579ff" },
	{ id: 9, color: "#5856d6" },
];

function createPalletHTML(color) {
	return `<div class="controls__color" style="background: ${color}" invisible}> </div>`;
}

function changePaint(e) {
	const inputChecked = e.target.checked;

	const COLOR_THEME_MODE = inputChecked
		? COLOR_THEME.filter((item) => item.id !== 1)
		: COLOR_THEME.filter((item) => item.id !== 2);

	pallete.innerHTML = COLOR_THEME_MODE.map((item) =>
		createPalletHTML(item.color),
	).join("");
}
// Create the Html element

function palletMaker(e) {
	const classCheck = pallete.classList.contains("invisible");
	const modeCheck = e.target.classList.contains("dark-mode");

	if (classCheck) {
		pallete.classList.remove("invisible");
		if (!modeCheck) {
			pallete.innerHTML = COLOR_THEME.filter((item) => item.id !== 2)
				.map((paintColor) => createPalletHTML(paintColor.color))
				.join("");
		} else {
			pallete.innerHTML = COLOR_THEME.filter((item) => item.id !== 1)
				.map((paintColor) => createPalletHTML(paintColor.color))
				.join("");
		}
	} else {
		pallete.classList.add("invisible");
		pallete.innerHTML = " ";
	}
}

function colorChanger(e) {
	const PAINT = "controls__color";
	const color = e.target.style.backgroundColor;

	if (e.target.className === PAINT) {
		sideSec.style.borderRight = `1px solid ${color}`;
		sliderBtn.style.backgroundColor = color;
		containerDiv.style.boxShadow = `0 3px 10px ${color}, 0 1px 3px ${color}`;
		navListTitleColor(color);
		skillBarColor(color);
	} else {
		console.log("please click the paint");
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
		skillBar[i].style.backgroundColor = color;
	}
}

btn.addEventListener("click", palletMaker);
inputSlider.addEventListener("click", changePaint);
document.addEventListener("click", colorChanger);
