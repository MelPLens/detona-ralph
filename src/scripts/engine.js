//variaveis - visivel
//values - valores

const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelectorAll(".enemy"),
        timeLeft: document.querySelectorAll("#time-left"),
        score: document.querySelector("#score"), // Como só tem um elemento com esse ID, sem o All.
    },
    values: {
        TimeId: null,
        gameVelocity: 1000,
        hitPosition: 0, //onde o usuario clicou
        result: 0, //guarda a pontuacao geral
        curretTime: 60,
    },
};

//para o time:

function countDown(){
    state.values.curretTime --; //decrementar

    //ver se o tempo acabou
    if(state.values.curretTime<0){
        alert ('Game Over ! O seu resultado foi :' + state.values.result);
    }
}

//quadrado sorteado que ira aparecer o inimigo:
function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy"); //percorrendo todos os quadrados
    });

    let randomNumber = Math.floor(Math.random() * 9); // sorteando
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

function moveEnemy() {
    // a cada 1000 do gamevelocity segundos, ele vai executar a funcao random square
    state.values.TimeId = setInterval(randomSquare, state.values.gameVelocity);
}

//Listener - conceito universal - ouvir uma acao, associa um evento para ser executado
//Usuario interagir com o boneco:
function addListenerHitbox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if (square.id === state.values.hitPosition) {
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;

            }
        });

    });
}


//inicio para chamar funcoes principais
function initialize() {
    moveEnemy();
    addListenerHitbox();
}

initialize();