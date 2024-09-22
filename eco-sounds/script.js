document.addEventListener("DOMContentLoaded", () => {
    createAudio();
    imgClic();
    logoClic();
});

function createAudio() {
    let audio = document.getElementById('button')
    audio.onclick = () => startAudio();
}

function startAudio() {
    let audioObj = document.getElementById('forest-audio')
    audioObj.play();
}

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
    slavka.onclick = () => slavkaClic();
}

function logoClic() {
    document.getElementById('fon-img').style.backgroundImage = "url(./assets/img/forest.jpg)";

    nonClicStyle();

    document.getElementById('logo').style.filter = "invert(26%) sepia(15%) saturate(638%) hue-rotate(7deg) brightness(92%) contrast(87%)";
}

function soloveyClic() {
    document.getElementById('fon-img').style.backgroundImage = "url(./assets/img/solovey.jpg)";

    nonClicStyle();

    document.getElementById('solovey').style.filter = "invert(26%) sepia(15%) saturate(638%) hue-rotate(7deg) brightness(92%) contrast(87%)";
}

function drozdClic() {
    document.getElementById('fon-img').style.backgroundImage = "url(./assets/img/drozd.jpg)";
    
    nonClicStyle();

    document.getElementById('drozd').style.filter = "invert(26%) sepia(15%) saturate(638%) hue-rotate(7deg) brightness(92%) contrast(87%)";
}

function malinovkaClic() {
    document.getElementById('fon-img').style.backgroundImage = "url(./assets/img/zarynka.jpg)";
    
    nonClicStyle();

    document.getElementById('malinovka').style.filter = "invert(26%) sepia(15%) saturate(638%) hue-rotate(7deg) brightness(92%) contrast(87%)";
}

function jayvoronokClic() {
    document.getElementById('fon-img').style.backgroundImage = "url(./assets/img/javoronok.jpg)";
    
    nonClicStyle();

    document.getElementById('jayvoronok').style.filter = "invert(26%) sepia(15%) saturate(638%) hue-rotate(7deg) brightness(92%) contrast(87%)";
}

function slavkaClic() {
    document.getElementById('fon-img').style.backgroundImage = "url(./assets/img/slavka.jpg)";

    nonClicStyle();

    document.getElementById('slavka').style.filter = "invert(26%) sepia(15%) saturate(638%) hue-rotate(7deg) brightness(92%) contrast(87%)";
}

function nonClicStyle() {
    document.getElementById('logo').style.filter = "";
    document.getElementById('solovey').style.filter = "";
    document.getElementById('drozd').style.filter = "";
    document.getElementById('malinovka').style.filter = "";
    document.getElementById('jayvoronok').style.filter = "";
    document.getElementById('slavka').style.filter = "";
}