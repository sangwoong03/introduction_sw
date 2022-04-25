const slider = document.querySelector("#dark-mode-changer");
const moonImg = document.querySelector(".moon-image");
const sunImg = document.querySelector(".sun-image");
const body = document.querySelector("body");
const container = document.querySelector(".container");
const navItem = document.querySelectorAll(".nav--list");
const catchingItem = document.querySelectorAll(".catching-item");
console.log(navItem);
// Mode Change Module
slider.onclick = (e) => {
	const checked = e.target.checked;
	const bodyStyle = body.style;

	if (!checked) {
		moonImg.classList.remove("visible");
		sunImg.classList.add("visible");
		bodyStyle.backgroundColor = "#ffffff";
		bodyStyle.color = "#060606";
		container.style.backgroundColor = "#ffffff";
		colorController.style.filter = `opacity(.5) drop-shadow(0 0 0 #000)`;
		for (let i = 0; i < navItem.length; i++) {
			navItem[i].style.color = "#2c2c2c";
			if (i < 3) {
				catchingItem[i].style.backgroundColor = "rgba(0, 0, 0, .1)";
				continue;
			}
		}
	} else {
		moonImg.classList.add("visible");
		sunImg.classList.remove("visible");
		body.style.backgroundColor = "#000000";
		bodyStyle.color = "#ffffff";
		container.style.backgroundColor = "#1b1b1b";
		colorController.style.filter = `opacity(0.9) drop-shadow(0 0 0 #fff)`;
		for (let i = 0; i < navItem.length; i++) {
			navItem[i].style.color = "#ffffff";
			if (i < 3) {
				catchingItem[i].style.backgroundColor = "rgba(0, 0, 0, .5)";
				continue;
			}
		}
	}
};
