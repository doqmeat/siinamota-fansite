//thank u to stackoverflow always https://stackoverflow.com/questions/26672104/get-attributes-value-for-multiple-class

var scanDiv = document.getElementById("picture-popup");
var scanPic = document.getElementsByClassName("scans");
var popupPic = document.getElementById("picture-img");

for (var i = 0; i < scanPic.length; i++) {
	var scanPicClick = scanPic[i];
	scanPicClick.onclick = function (windowpopup) {
		scanDiv.style.display = "block";
		popupPic.src = this.src;
		popupPic.alt = this.alt;
	}
}


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

function toggleClose(ids) {
	var popUp = document.getElementById(ids);
	popUp.style.display = "none";
}
