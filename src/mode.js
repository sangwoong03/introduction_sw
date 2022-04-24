const slider = document.querySelector("#dark-mode-changer");
const moonImg = document.querySelector(".moon-image");
const sunImg = document.querySelector(".sun-image");
const body = document.querySelector("body");
const container = document.querySelector(".container");

slider.onclick = (e) => {
	const checked = e.target.checked;
	const bodyStyle = body.style;
	if (!checked) {
		moonImg.classList.remove("visible");
		sunImg.classList.add("visible");
		bodyStyle.backgroundColor = "#ffffff";
		bodyStyle.color = "#060606";
	} else {
		moonImg.classList.add("visible");
		sunImg.classList.remove("visible");
		body.style.backgroundColor = "#000000";
		bodyStyle.color = "#ffffff";
	}
	console.log(e.target.checked);
	// checked = true or false일 때 >> background + color 전환
};
