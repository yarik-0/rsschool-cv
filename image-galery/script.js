document.addEventListener("DOMContentLoaded", () => {
    galeryDisplay();
    initInput();
    deleteFunction();
});

document.addEventListener('keyup', event => {
    const inputButton = document.getElementById('input');
    if (event.code === 'Enter') galeryDisplay(inputButton.value);
})

function initInput() {
    const inputButton = document.getElementById('input');
    const imgButton = document.getElementById('img-input');

    imgButton.onclick = () => galeryDisplay(inputButton.value);
    // keydown. = () => galeryDisplay(inputButton.value);
    // inputButton.onclick = () => galeryDisplay();
}
function galeryDisplay(str) {
    const query = str || 'nature'
    const apiKey = 'fcV-uRy1gzmKNyxDXlsnUxKYQ36UaQcCYE82ZfaGYmY';
    // const images = document.querySelectorAll('.image');
    const galery = document.getElementById('galery');
    galery.innerHTML = "";

    fetch(`https://api.unsplash.com/photos/random?query=${query}&count=10&client_id=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((photo, index) => {
                console.log(photo, index)
                let image = document.createElement("img")

                image.classList.add('image')
                image.setAttribute('src', photo.urls.small);
                galery.append(image);
            });
        });
}

function deleteFunction() {
    const input = document.getElementById('input');
    const button = document.getElementById('delete');
    button.onclick = () => input.value = '';
}

// todo: add handlers for input and for button