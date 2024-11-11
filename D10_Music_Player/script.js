let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("ctrlIcon");

// Set the max value of the progress bar to the song duration
song.onloadedmetadata = function () {
    progress.max = song.duration;
};

// Play or pause the song when the control button is clicked
function playPause() {
    if (song.paused) {
        song.play();
        controlIcon.classList.add("fa-pause");
        controlIcon.classList.remove("fa-play");
    } else {
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    }
}

// Update the progress bar as the song plays
song.ontimeupdate = function () {
    progress.value = song.currentTime;
};

// Allow users to seek through the song using the progress bar
progress.oninput = function () {
    song.currentTime = progress.value;
};

// Attach the playPause function to your control icon
controlIcon.onclick = playPause;
