function toggle(cds) {
	var i;
	var popUp = document.getElementById(cds);
	var notpopUp = document.getElementsByClassName("pop-up");
	for (i = 0; i < notpopUp.length; i++) {
		notpopUp[i].style.display = "none";
	}

	if (popUp.style.display == "none") {
		popUp.style.display = "block";
	}
}

function toggleClose(cds) {
	var popUp = document.getElementById(cds);
	popUp.style.display = "none";
}
