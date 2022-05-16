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
// 각 color 객체에 key 값으로 id를 value 값으로 1부터 9까지 번호를 부여하였음.
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

// 모드 선택에 따라 기본적으로 렌더링되는 기본 배열을 재정의
function changePaint(e) {
	const inputChecked = e.target.checked;

	// 모드의 체크 여부에 따라
	// 체크가 되어 있다면 다크 모드이므로 id 값이 1인 검정색을 뺀 배열로 다시 mapping
	// 체크가 되어 있지 않다면 라이트 모드이므로 id 값이 2인 흰색을 뺀 배열로 다시 mapping
	// input의 체크 변화를 즉각적으로 인지하여 렌더링이 바로바로 됨.
	// 또한 해당 함수가 없으니, 다크모드일 때 색상테마 버튼을 누르게 되면 그 상태에서 검정색 흰색이 바뀌어 렌더링 되는 현상 발생.
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

	// invisible 값 포함 여부 확인
	if (classCheck) {
		pallete.classList.remove("invisible");
		// mode.js 모듈에서 다크모드로 지정되면 색상테마 버튼에 dark-mode 클래스를 추가하였음.
		// dark-mode 클래스 여부에 따라
		if (!modeCheck) {
			// dark-mode가 없다면 >> 라이트 모드
			// 위에서 했던 과정 반복 (흰색 제외)
			pallete.innerHTML = COLOR_THEME.filter((item) => item.id !== 2)
				.map((paintColor) => createPalletHTML(paintColor.color))
				.join("");
		} else {
			// dark-mode가 있다면 >> 다크 모드
			// 위에서 했던 과정 반복 (검정색 제와)
			pallete.innerHTML = COLOR_THEME.filter((item) => item.id !== 1)
				.map((paintColor) => createPalletHTML(paintColor.color))
				.join("");
		}
	} else {
		pallete.classList.add("invisible");
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
