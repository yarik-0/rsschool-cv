document.addEventListener("DOMContentLoaded", () => {
    windowWidth();
    initBurgerMenu();
    initSliderCards();
    startSliderCenter();
    sliderButtons();
    console.log(sliderCards);
});

window.addEventListener("resize", () => {
    let oldCardsCount = cardsCount;
    windowWidth();

    if (oldCardsCount != cardsCount) {
        initSliderCards();
        startSliderCenter();
    }
})

function windowWidth() {
    let windoWidth = document.documentElement.clientWidth;

    if (windoWidth >= 960) {
        cardsCount = 3;
    } else if (windoWidth >= 750 && windoWidth < 960) {
        cardsCount = 2;
    } else {
        cardsCount = 1;
    };
}

let petsSlider = document.getElementById('pets-cards')
let sliderCards = {
    left: [],
    center: [],
    right: []
};
let cardsCount = 0;

function initSliderCards() {
    generateForSection('center');
    generateForSection('left');
    generateForSection('right');
}

function generateForSection(name) {
    sliderCards[name] = [];

    for (let i = 0; i < cardsCount;) {
        let cardIndex = Math.floor(Math.random() * petsData.length);

        let forSearch = sliderCards.center;
        if (name != 'center') {
            forSearch = forSearch.concat(sliderCards[name])
        }

        if (!forSearch.includes(cardIndex)) {
            sliderCards[name].push(cardIndex);
            i++;
        }
    }
}

function sliderButtons() {
    const buttonLeft = document.getElementById('button-left');
    const buttonRights = document.getElementById('button-rights');

    buttonLeft.onclick = () => leftClick();
    buttonRights.onclick = () => rightClick();
}

function leftClick() {
    let slider = document.getElementById('pets-cards')
    slider.classList.toggle('slideraktiv')
    setTimeout(function () {
        let slider = document.getElementById('pets-cards')
        slider.classList.toggle('slideraktiv')
        sliderCards.right.length = 0;
        for (let i = 0; i < cardsCount; i++) {
            let perm = 0;
            perm = sliderCards.center.shift(i);
            sliderCards.right.push(perm);
        }
        for (let i = 0; i < cardsCount; i++) {
            let perm = 0;
            perm = sliderCards.left.shift(i);
            sliderCards.center.push(perm);
        }
        generateForSection('left');
        startSliderCenter();
    }, 500);
    console.log(sliderCards);
}

function rightClick() {
    let slider = document.getElementById('pets-cards')
    slider.classList.toggle('slideraktiv')
    setTimeout(function () {
        let slider = document.getElementById('pets-cards')
        slider.classList.toggle('slideraktiv')
        sliderCards.left.length = 0;
        for (let i = 0; i < cardsCount; i++) {
            let perm = 0;
            perm = sliderCards.center.shift(i);
            sliderCards.left.push(perm);
        }
        for (let i = 0; i < cardsCount; i++) {
            let perm = 0;
            perm = sliderCards.right.shift(i);
            sliderCards.center.push(perm);
        }
        generateForSection('right');
        startSliderCenter();
    }, 500);
    console.log(sliderCards);
}

function initBurgerMenu() {
    const burgerMenu = document.getElementById('burger');
    const blockBackground = document.getElementById('block-background');
    const links = document.querySelectorAll('#mobile-menu a');

    for (let link of links) {
        link.addEventListener('click', function () {
            burgerMenuToggle();
        })
    }

    burgerMenu.onclick = () => burgerMenuToggle();
    blockBackground.onclick = () => burgerMenuToggle();
}

function burgerMenuToggle() {
    let burgerMenu = document.getElementById('burger');
    let body = document.getElementById('body');
    let blockBackground = document.getElementById('block-background');
    let mobileMenu = document.getElementById('mobile-menu');

    burgerMenu.classList.toggle("opened");
    body.classList.toggle("non-scroll");
    blockBackground.classList.toggle("active");
    mobileMenu.classList.toggle("activ");
}

function startSliderCenter() {
    let slider = document.getElementById('pets-cards');

    if (slider) {
        slider.innerHTML = '';

        for (let i of sliderCards.center) {
            let slide = petsData[i];
            let card = document.createElement("div")

            card.classList.add('card')
            card.dataset.index = i
            card.innerHTML = `
            <img src="${slide.img}" alt="${slider.name}">
            <p>${slide.name}</p>
            <button class="button-card">Learn more</button>
            `

            slider.append(card);
        }

        setCardButtonClick();
        initModal();
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function setCardButtonClick() {
    let cards = document.getElementsByClassName('card');
    const modalWindowContent = document.getElementById('modal-window-content');

    for (let card of cards) {
        card.onclick = function () {
            let index = this.dataset.index
            let data = petsData[index];
            let modalContent = document.createElement("div")

            modalWindowContent.innerHTML = ""
            modalContent.classList.add('container')
            modalContent.innerHTML = `
            <img src="${data.img}" alt="${data.name}">
                                <div class="content">
                                <h3>${data.name}</h3>
                                <h4>${data.type} - ${data.breed}</h4>
                                <h5>${data.description}</h5>
                                <ul>
                                <li><span><b>Age:</b> ${data.age}</span></li>  
                                <li><span><b>Inoculations:</b> ${data.inoculations}</span></li>
                                <li><span><b>Diseases:</b> ${data.diseases}</span></li>
                                <li><span><b>Parasites:</b> ${data.parasites}</span></li>
                                </ul>
                                </div>
                                </div>
                                `
            modalWindowContent.append(modalContent)

            modalWindowToggle()
        }
    }
}

function modalWindowToggle() {
    let modalWindow = document.getElementById('modal-window');
    let modalBackground = document.getElementById('modal-background');
    let body = document.getElementById('body');

    modalWindow.classList.toggle("display");
    modalBackground.classList.toggle("active");
    body.classList.toggle("non-scroll");
}

function initModal() {
    let modalBackground = document.getElementById('modal-background');
    let closeButton = document.getElementById('button');

    modalBackground.onclick = () => modalWindowToggle();
    closeButton.onclick = () => modalWindowToggle();
}