document.addEventListener("DOMContentLoaded", () => {
    createAudio();
    // myAudioElement();
    imgClic();
});

function createAudio() {
    let audio = document.getElementById('button')
    audio.onclick = () => startAudio();
}

function startAudio() {
    let audioObj = document.getElementById('forest-audio')
    audioObj.play();
}

// myAudioElement.addEventListener("canplaythrough", (event) => {
//     audioObj = new Audio();
//     audioObj.play();
//     /* аудио может быть воспроизведено; проиграть, если позволяют разрешения */
//   });

function imgClic() {
    let logo = document.getElementById('logo');
    logo.onclick = () => logoClic();
    let solovey = document.getElementById('solovey');
    solovey.onclick = () => soloveyClic();
    let drozd = document.getElementById('drozd');
    drozd.onclick = () => drozdClic();
    let malinovka = document.getElementById('malinovka');
    malinovka.onclick = () => malinovkaClic();
    let jayvoronok = document.getElementById('jayvoronok');
    jayvoronok.onclick = () => jayvoronokClic();
    let slavka = document.getElementById('slavka');
    slavka.onclick = () => slavkalic();
}

function logoClic() {
    document.getElementById('fon-img').style.backgroundImage = "url(./assets/img/forest.jpg)";
}

function soloveyClic() {
    document.getElementById('fon-img').style.backgroundImage = "url(./assets/img/solovey.jpg)";
}

function drozdClic() {
    document.getElementById('fon-img').style.backgroundImage = "url(./assets/img/drozd.jpg)";
}

function malinovkaClic() {
    document.getElementById('fon-img').style.backgroundImage = "url(./assets/img/zarynka.jpg)";
}

function jayvoronokClic() {
    document.getElementById('fon-img').style.backgroundImage = "url(./assets/img/javoronok.jpg)";
}

function slavkalic() {
    document.getElementById('fon-img').style.backgroundImage = "url(./assets/img/slavka.jpg)";
}