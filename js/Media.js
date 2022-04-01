//Reproducir video
const video = document.getElementById("vide");
function videoPlayPause() {
    if (video.paused) {
        video.play();
        Audio.pause();
    } else {
        video.pause();
    }
}

//Reproducir audio
const Audio = document.getElementById("audio");
function audioPlayPause() {
    if (Audio.paused) {
        Audio.play();
        video.pause();
    } else {
        Audio.pause();
    }
}

//generador de video Youtube
const Youtube = document.getElementById("yt")
function generarVideo() {
    Youtube.innerHTML = "<iframe width='800' height='506' src='https://www.youtube.com/embed/kEYBdY7_xSE' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
}