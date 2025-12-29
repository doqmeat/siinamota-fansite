const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const sidebar = document.querySelector("#side1");
const navi = document.querySelector("nav");

const body = document.querySelector("body");

const btn = document.querySelector("#side1 button");

function showNav() {
	const navDisplay = window.getComputedStyle(navi).getPropertyValue("display");

	if (navDisplay == "none") {
		navi.style.display = "block";
		// sidebar.style.position = "relative";
		main.style.display = "none";
		header.style.display = "none";
		footer.style.display = "none";
		btn.style.position = "absolute";
		btn.innerHTML =
			'<img src="/_files/index/close.png" alt="close navigation" width="25px">';
		btn.style.borderColor = "var(--bg)";
		body.style.backgroundImage = "none";
	} else {
		navi.style.display = "none";
		// sidebar.style.position = "fixed";
		btn.style.position = "fixed";
		main.style.display = "block";
		header.style.display = "block";
		footer.style.display = "block";
		btn.innerHTML =
			'<img src="/_files/index/burger.png" alt="open navigation" width="30px">';
		btn.style.borderColor = "var(--green)";
		body.style.backgroundImage = 'url("/_files/index/koke1.png")';
	}
}
