const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


// Functions
// 1 - toggleVideo - Play or Pause video
    // If video is playing then pause
    // if video is pause then play
function toggleVideo() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
};


// 2 - updateIcon - toggle between play and pause icon
    // if video is playing then show pause icon
    // if video is pause then show play icon
function updateIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fas fa-pause fa-2x"></i>';
    }
};


// 3 - updateProgress - update the postion of the progress bar and timestamp
function updateProgress() {
    // Update slider
    progress.value = video.currentTime/video.duration*100;

    // update timestamp
    // Rounding down the minutes
    let minutes = Math.floor(video.currentTime / 60);
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    // Round down the seconds
    let seconds = Math.floor(video.currentTime % 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }


    // Display Timestamp
    timestamp.innerHTML = `${minutes}:${seconds}`;
};

// 4 - stopVideo - Stop video playback and reset time to 0
function stopVideo() {
    video.pause();
    video.currentTime = 0;
};

// 5 - setProgress - Update video playback time based on manual change in progress bar
function setProgress() {
    video.currentTime = progress.value*video.duration/100;
};


// Event listners 
// 1 - video Element - click to play and pause
video.addEventListener('click' , toggleVideo);

// 2 - Video Element - pause to toggle play icon to pause icon
video.addEventListener('pause', updateIcon);

// 3 - Video Element - play to toggle pause icon to play icon
video.addEventListener('play', updateIcon);

// 4 - Video Element - update progress bar and timestamp
video.addEventListener('timeupdate', updateProgress);

// 5 - play Button - Click to play and pause video
play.addEventListener('click', toggleVideo);

// 6 - Stop Button - click to reset video and pause video
stop.addEventListener('click', stopVideo);

// 7 - Progress bar _ change position to change time of playback
progress.addEventListener('change', setProgress);