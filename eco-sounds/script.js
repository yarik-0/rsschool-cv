let audio = '';
let isPlaying = false;

document.addEventListener("DOMContentLoaded", () => {
    initLogo();
    initAudio();
    buttonClick();
    imgClick();
});

function initLogo() {
    document.getElementById('fon-img').style.backgroundImage = "url(./assets/img/forest.jpg)";

    nonClickStyle();
    document.getElementById('logo').style.filter = "invert(26%) sepia(15%) saturate(638%) hue-rotate(7deg) brightness(92%) contrast(87%)";
}

function initAudio() {
    audio = document.getElementById('forest-audio');
}

function buttonClick() {
    let pause = document.getElementById('play-button');
    let play = document.getElementById('pause-button');

    pause.onclick = () => audioControl();
    play.onclick = () => audioControl();

}

function audioControl() {
    if(isPlaying) {
        audio.pause();
        isPlaying = false;
        document.getElementById('play-button').style.display = 'block';
        document.getElementById('pause-button').style.display = 'none';
    } else {
        audio.play();
        isPlaying = true;
        document.getElementById('play-button').style.display = 'none';
        document.getElementById('pause-button').style.display = 'block';
    }
}

function imgClick() {
    let logo = document.getElementById('logo');
    logo.onclick = () => logoClick();

    let list =  document.querySelectorAll('.navigation>ul>li')
    for (const item of list) {
        item.onclick = (e) => changeSound(e);
    }
}

function logoClick() {
    document.getElementById('fon-img').style.backgroundImage = "url(./assets/img/forest.jpg)";

    nonClickStyle();
    document.getElementById('logo').style.filter = "invert(26%) sepia(15%) saturate(638%) hue-rotate(7deg) brightness(92%) contrast(87%)";

    audio.pause();
    isPlaying = false;
    audio.currentTime = 0;
    audio = document.getElementById('forest-audio')
    audioControl();
}

function changeSound(e) {
    element = e.target || e.srcElement;
    sound_name = element.id

    document.getElementById('fon-img').style.backgroundImage = `url(./assets/img/${sound_name}.jpg)`;
    nonClickStyle();
    document.getElementById(sound_name).style.filter = "invert(26%) sepia(15%) saturate(638%) hue-rotate(7deg) brightness(92%) contrast(87%)";
    audio.pause();
    isPlaying = false;
    audio.currentTime = 0;
    audio = document.getElementById(`${sound_name}-audio`)
    audioControl();
}

function nonClickStyle() {
    document.getElementById('logo').style.filter = "";

    let list =  document.querySelectorAll('.navigation>ul>li')

    for (const item of list) {
        item.style.filter = "";
    }
}
