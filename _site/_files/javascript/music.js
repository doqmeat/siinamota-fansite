let currentIndex = 0;
let player;

function onYouTubeIframeAPIReady() {
	player = new YT.Player("player", {
		height: "300px",
		width: "100%",
		videoId: playlist[currentIndex].id,
		events: {
			onReady: updateTitle,
			onStateChange: onStateChange,
		},
	});
}

function playSong() {
	player.playVideo();
}

function pauseSong() {
	player.pauseVideo();
}

function nextSong() {
	currentIndex = (currentIndex + 1) % playlist.length; // holy shit
	loadSong(currentIndex);
}

function loadSong(index) {
	currentIndex = index;
	player.loadVideoById(playlist[currentIndex].id);
	updateTitle();
}

function updateTitle() {
	document.getElementById("song-title").innerText =
		"♬ˎˊ˗ " + playlist[currentIndex].title;
}

function onStateChange(event) {
	if (event.data === 0) {
		nextSong();
	}
}
