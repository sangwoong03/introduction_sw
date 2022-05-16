const slider = document.querySelector("#dark-mode-changer");
const moonImg = document.querySelector(".moon-image");
const sunImg = document.querySelector(".sun-image");
const body = document.querySelector("body");
const catchingItem = document.querySelectorAll(".catching-item");
const darkContact = document.querySelector(".dark-contact-link");
const lightContact = document.querySelector(".light-contact-link");
const bow = document.querySelector(".bow");
const navItem = document.querySelectorAll(".nav--list");
const colorController = document.querySelector(".color-controller");
const slideBtn = document.querySelectorAll(".btn-group > div > img");
const container = document.querySelector(".container");

const bodyStyle = body.style;

function darkImgChanger() {
	sunImg.classList.add("invisible");
	moonImg.classList.remove("invisible");
}
function lighImgChanger() {
	sunImg.classList.remove("invisible");
	moonImg.classList.add("invisible");
}
function darkBody() {
	bodyStyle.backgroundColor = "#000000";
	bodyStyle.color = "#ffffff";
}
function lightBody() {
	bodyStyle.backgroundColor = "#ffffff";
	bodyStyle.color = "#060606";
}
function lightImgContact() {
	darkContact.setAttribute("style", "display: none");
	lightContact.removeAttribute("style", "display: none");
}
function darkImgContact() {
	darkContact.removeAttribute("style", "display: none");
	lightContact.setAttribute("style", "display: none");
}
function slideBtnDark() {
	for (let i = 0; i < slideBtn.length; i++) {
		slideBtn[i].style.backgroundColor = "#ffffff";
		slideBtn[i].style.border = "1px solid #fffff";
	}
}
function slideBtnLight() {
	for (let i = 0; i < slideBtn.length; i++) {
		slideBtn[i].style.backgroundColor = "#ffffff";
		slideBtn[i].style.border = "none";
	}
}

// Mode Change Module
function changeMode(e) {
	const checked = e.target.checked;
	colorController.classList.toggle("dark-mode");
	if (!checked) {
		lighImgChanger();
		lightBody();
		lightImgContact();
		slideBtnLight();
		container.style.backgroundColor = "#ffffff";
		colorController.style.filter = "opacity(.5) drop-shadow(0 0 0 #000)";
		bow.classList.remove("gradient");
		for (let i = 0; i < navItem.length; i++) {
			navItem[i].style.color = "#2c2c2c";
			if (i < 3) {
				catchingItem[i].style.backgroundColor = "rgba(0, 0, 0, .1)";
				continue;
			}
		}
	} else {
		darkImgChanger();
		darkBody();
		darkImgContact();
		slideBtnDark();
		container.style.backgroundColor = "#1b1b1b";
		colorController.style.filter = `opacity(0.9) drop-shadow(0 0 0 #fff)`;
		bow.classList.add("gradient");
		for (let i = 0; i < navItem.length; i++) {
			navItem[i].style.color = "#ffffff";
			if (i < 3) {
				catchingItem[i].style.backgroundColor = "rgba(0, 0, 0, .5)";
				continue;
			}
		}
	}
}

slider.addEventListener("click", changeMode);
