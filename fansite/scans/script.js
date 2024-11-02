//thank u to stackoverflow always https://stackoverflow.com/questions/26672104/get-attributes-value-for-multiple-class

var scanDiv = document.getElementById("picture-popup");
var scanPic = document.getElementsByClassName("scans");
var popupPic = document.getElementById("picture-img");
var captionWin = document.getElementById("caption");
let links = document.getElementsByClassName("scanLinks");

for (i = 0; i < links.length; i++) {
  let linkClick = links[i];
  linkClick.onclick = function (active) {
    for (i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }
    event.currentTarget.className += " active";
  };
}
document.getElementById("default").className += " active";

for (var i = 0; i < scanPic.length; i++) {
  var scanPicClick = scanPic[i];
  scanPicClick.onclick = function (windowpopup) {
    scanDiv.style.display = "block";
    popupPic.src = this.src;
    popupPic.alt = this.alt;
    captionWin.innerText = this.alt;
  };
}

function toggleClose(ids) {
  var popUp = document.getElementById(ids);
  popUp.style.display = "none";
}
