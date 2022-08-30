
// pegando mario 
const mario = document.querySelector('.mario');

// pegando pipe
const pipe = document.querySelector('.pipe');

//pegar div game over

const telaGameOver  = document.querySelector('#container-game-over');

//adicionando a classe do pulo
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

document.addEventListener('keydown', jump);


// loop para ver se perdemos 

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    //o + na frente transforma a string em numero || mesma funcao do number() ou parseInt
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;


        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        

        mario.src = 'imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';


        // mostrando tela game over
        telaGameOver.style.display = 'block';


        clearInterval(loop);
        clearTimeout(cronometro);
        
    }

}, 10);




//adicionando score
var score = 0;

var cronometro = setInterval(() => {
    score += 1;
        document.getElementById('cronometro').innerHTML = score;
},10)


// botao resetar pagina 
reloadPagina = () => {  
    location.reload();
}




