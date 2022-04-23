const slider = document.querySelector("#dark-mode-changer");

slider.onclick = (e) => {
	console.log(e.target.checked);
	// checked = true or false일 때 >> background + color 전환
};
