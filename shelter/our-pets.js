let sliderList = [];
let counter = 1;
let maxCounter = 1;
let minCounter = 1;
let sliderShift = 0;

document.addEventListener("DOMContentLoaded", () => {
    windowWidth();
    initBurgerMenu();
    initSlider();
    startSlider();
    sliderButtons();
    sliderCounter();
    sliderShiftCounter();
});

window.addEventListener("resize", () => {
    let oldCardsCount = cardsCount;
    windowWidth();

    if (oldCardsCount != cardsCount) {
        windowWidth();
        sliderCounter();
        synchronization();
        sliderShiftCounter();
        startSlider();
        sliderButtons();
    }
})

function initSlider() {
    let data = petsData;
    for (let i = 0; i < 6; i++) {
        data = shuffleArray(data);
        for (let i = 0; i < 8; i++) {
            sliderList.push(data[i]);
        }
    }
}

function windowWidth() {
    let windoWidth = document.documentElement.clientWidth;

    if (windoWidth >= 1240) {
        cardsCount = 8;
    } else if (windoWidth >= 750 && windoWidth < 1240) {
        cardsCount = 6;
    } else {
        cardsCount = 3;
    };
}

function synchronization() {
    if (counter > maxCounter) {
        counter = maxCounter
    }
    sliderShift = ((counter - 1) * cardsCount);
}

function sliderShiftCounter() {
    let current = document.getElementById('current');
    document.getElementById('current').innerHTML = '';
    counter = counter;
    counter.innerHTML = `${counter}`;
    current.append(counter);
}

function sliderCounter() {
    maxCounter = sliderList.length / cardsCount;
}

let petsSlider = document.getElementById('pets-cards')
let cardsCount = 0;

function sliderButtons() {
    const dublbuttonRights = document.getElementById('dubl-left-buttun');
    const buttonRights = document.getElementById('left-buttun');
    const buttonLeft = document.getElementById('right-buttun');
    const dublbuttonLeft = document.getElementById('dubl-right-buttun');

    dublbuttonRights.onclick = () => dublRightClick();
    buttonRights.onclick = () => rightClick();
    buttonLeft.onclick = () => leftClick();
    dublbuttonLeft.onclick = () => dublLeftClick();
}

function dublRightClick() {
    if (counter !== maxCounter) {
        let slider = document.getElementById('pets-cards')
        slider.classList.toggle('non-display')
        sliderShift += cardsCount * ((maxCounter) - counter);
        dublRightStyle()
        setTimeout(function () {
            counter = maxCounter;
            startSlider();
            setCardButtonClick();
            sliderShiftCounter();
            slider.classList.toggle('non-display')
        }, 500);
    }
}

function dublRightStyle() {
    const buttonLeft = document.getElementById('right-buttun');
    const dublbuttonLeft = document.getElementById('dubl-right-buttun');
    buttonLeft.classList.add('active');
    dublbuttonLeft.classList.add('active');

    const dublbuttonRights = document.getElementById('dubl-left-buttun');
    const buttonRights = document.getElementById('left-buttun');
    buttonRights.classList.remove('active');
    dublbuttonRights.classList.remove('active');
}

function rightClick() {
    let slider = document.getElementById('pets-cards')
    if (counter < maxCounter) {
        sliderShift += cardsCount;
        counter += 1;
        slider.classList.toggle('non-display')
        if (counter == maxCounter) {
            dublRightStyle()
        } else {
            const buttonLeft = document.getElementById('right-buttun');
            const dublbuttonLeft = document.getElementById('dubl-right-buttun');
            buttonLeft.classList.add('active');
            dublbuttonLeft.classList.add('active');
        }
        setTimeout(function () {
            startSlider();
            setCardButtonClick();
            sliderShiftCounter();
            slider.classList.toggle('non-display')
        }, 500);
    }
}

function leftClick() {
    let slider = document.getElementById('pets-cards')
    if (counter > minCounter) {
        sliderShift -= cardsCount;
        counter -= 1;
        slider.classList.toggle('non-display')
        if (counter == minCounter) {
            dublLeftStyle()
        } else {
            const dublbuttonRights = document.getElementById('dubl-left-buttun');
            const buttonRights = document.getElementById('left-buttun');
            buttonRights.classList.add('active');
            dublbuttonRights.classList.add('active');
        }
        setTimeout(function () {
            startSlider();
            setCardButtonClick();
            sliderShiftCounter();
            slider.classList.toggle('non-display')
        }, 500);
    }
}

function dublLeftClick() {
    let slider = document.getElementById('pets-cards')
    slider.classList.toggle('non-display')
    sliderShift -= cardsCount * ((maxCounter - (maxCounter - counter)) - 1);
    dublLeftStyle()
    setTimeout(function () {
        counter = minCounter;
        startSlider();
        setCardButtonClick();
        sliderShiftCounter();
        slider.classList.toggle('non-display')
    }, 500);
}

function dublLeftStyle() {
    const buttonLeft = document.getElementById('right-buttun');
    const dublbuttonLeft = document.getElementById('dubl-right-buttun');
    buttonLeft.classList.remove('active');
    dublbuttonLeft.classList.remove('active');

    const dublbuttonRights = document.getElementById('dubl-left-buttun');
    const buttonRights = document.getElementById('left-buttun');
    buttonRights.classList.add('active');
    dublbuttonRights.classList.add('active');
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

function startSlider() {
    let slider = document.getElementById('pets-cards');

    if (slider) {
        slider.innerHTML = '';

        for (let i = 0; i < cardsCount; i++) {
            let slide = sliderList[i + sliderShift];
            let card = document.createElement("div")

            card.classList.add('card')
            card.dataset.index = i
            card.innerHTML = `
            <img src="${slide.img}" alt="${slide.name}">
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
            index = Number(index);
            index = index + sliderShift;
            index = String(index);
            let data = sliderList[index];
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