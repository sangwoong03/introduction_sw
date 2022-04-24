const btn = document.querySelector(".color-btn");
const pallete = document.querySelector(".control__colors");

const COLOR_THEME = [
	"#2c2c2c",
	"#ffffff",
	"#ff3b30",
	"#ff9500",
	"#ffcc00",
	"#4cd963",
	"#5ac8fa",
	"#0579ff",
	"#5856d6",
];

function palletMaker(color) {
	return `<div class="controls__color" style="background: ${color} "}> </div>`;
}

btn.onclick = (e) => {
	const classCheck = pallete.classList.contains("visible");

	if (classCheck) {
		pallete.classList.remove("visible");
		pallete.innerHTML = COLOR_THEME.map((item) => palletMaker(item)).join("");
	} else {
		pallete.classList.add("visible");
	}
};
