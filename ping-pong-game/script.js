document.addEventListener("DOMContentLoaded", () => {
    elementPositionStart();
    starButton();
});

let bollTop = 142;
let bollRight = 0;
let bollIntervalY = 1;
let bollIntervalX = 1;
let leftBlockY = 125;
let shouldMoveUp = false;
let shouldMoveDown = false;
let timeGame = 0;
let gameSituation = 1;
const heightGame = document.getElementById('game');
const leftBlock = document.getElementById('left-block');
const boll = document.getElementById('boll');
const righBlock = document.getElementById('right-block');
const startButton = document.getElementById('start-button');
const timerList = document.getElementById('timer-list');

function elementPositionStart() {
    righBlock.style.top = `${bollTop - 15}px`;
    leftBlock.style.top = `${leftBlockY}px`;
    boll.style.top = `${bollTop}px`;

}

function starButton() {
    startButton.onclick = () => {
        startButton.innerHTML = 'Start'
        elementPositionStart();
        bollRenderY();
        bollRenderX();
        rightBlockRender();
        time();
    }
}

function bollRenderY() {
    bollIntervalY = 1;
    setInterval(() => {
        boll.style.top = `calc(${bollTop}px + ${bollIntervalY}px)`;
        bollTop = bollTop + bollIntervalY;
        if (bollTop >= heightGame.offsetHeight - 15) {
            bollIntervalY = -1;
        };
        if (bollTop == 0) {
            bollIntervalY = 1;
        };
    }, 1);
}

function bollRenderX() {
    setInterval(() => {
        if (gameSituation == 1) {
            boll.style.right = `${bollRight}px`;
            bollRight += bollIntervalX;
            if (bollRight >= (heightGame.offsetWidth - 30) / 2) {
                if (bollTop >= leftBlockY && bollTop <= leftBlockY + 50) {
                    bollIntervalX = 1;
                } else {
                    bollIntervalY = 0;
                    bollIntervalX = 0;
                    gameSituation = 0;
                    gameEnd();
                }
                bollIntervalX = -1;
            };
            if (bollRight <= -((heightGame.offsetWidth - 30) / 2)) {
                bollIntervalX = 1;
            };
        } else {
            bollIntervalX = 0;
        }
    }, 1);

}

function rightBlockRender() {
    let righBlockTop = 0;
    setInterval(() => {
        righBlockTop = bollTop - 15;
        if (righBlockTop >= heightGame.offsetHeight - 50) {
            righBlockTop = heightGame.offsetHeight - 50
        }
        if (righBlockTop <= 0) {
            righBlockTop = 0;
        }
        righBlock.style.top = `${righBlockTop}px`;
    }, 1);
}

document.addEventListener('keydown', (event) => {
    event.preventDefault();

    const key = event.key;

    if (key == 'ArrowUp') {
        shouldMoveUp = true;
        shouldMoveDown = false;
    } else if (key == 'ArrowDown') {
        shouldMoveDown = true;
        shouldMoveUp = false
    }
}, false);

document.addEventListener('keyup', (event) => {
    event.preventDefault();

    const key = event.key;

    if (key == 'ArrowDown' || key == 'ArrowUp') {
        shouldMoveUp = false;
        shouldMoveDown = false;
    }
}, false);

setInterval(() => {
    if (shouldMoveUp == true && shouldMoveDown == false) {
        if (leftBlockY <= 0) {
            leftBlockY = 10;
        }
        leftBlock.style.top = `calc(${leftBlockY}px - 10px)`;
        leftBlockY -= 10;
    }
}, 20);

setInterval(() => {
    if (shouldMoveDown == true && shouldMoveUp == false) {
        if (leftBlockY + 10 >= heightGame.offsetHeight - 60) {
            leftBlockY = heightGame.offsetHeight - 60;
        }
        leftBlock.style.top = `calc(${leftBlockY}px + 10px)`;
        leftBlockY += 10;
    }
}, 20);

function time() {
    const timer = document.getElementById('timer')
    timeGame = 0;
    setInterval(() => {
        if (gameSituation == 1) {
            timeGame += 1
            timer.innerHTML = `${Math.floor(timeGame / 60)}:${timeGame % 60}`
        }
    }, 1000)
}

function gameEnd() {
    if (gameSituation == 0) {
        startButton.innerHTML = 'You miss<br/>Try more'
        gameSituation = 1;
        bollIntervalY = 1;
        bollIntervalX = 1;
        let resylt = document.createElement('li');
        resylt.innerHTML = `${Math.floor(timeGame / 60)}:${timeGame % 60}`;
        timerList.appendChild(resylt);
    }
}