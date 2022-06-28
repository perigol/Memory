//Inicialización de variables
let uncoveredCards = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let movements = 0;
let hits = 0; 
let chronometer = false;
let timer = 40;
let startTimer = 40;
let countdownTime = null;

//Apuntando a documento HTML
let showMovements = document.getElementById('movements');
let showHits = document.getElementById('success');
let showTime = document.getElementById('t-remaining');
let restartButton = document.createElement('button');



let winAudio = new Audio(`./sounds/win.wav`);
let loseAudio = new Audio(`./sounds/lose.wav`);
let clickAudio = new Audio(`./sounds/click.wav`);
let rightAudio = new Audio(`./sounds/right.wav`);
let wrongAudio = new Audio(`./sounds/wrong.wav`);

// Generación de números aleatorios
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numbers = numbers.sort(()=>{ // sort para darle un orden a los números de acuerdo a una funcion
    return Math.random()-0.5 // funcion para Math.random para desordenarlos de manera aleatoria
});
console.log(numbers); // resultado numeros desordenados del array
//FUNCIONES

//Funcion tiempo
function countTime(){
    countdownTime = setInterval(()=>{
        timer--;
        showTime.innerHTML = `Tiempo: ${timer} segundos`;
        if(timer == 0){
            clearInterval(countdownTime);
            blockCards();
            loseAudio.play();
            restartGame();
        }
    },1000);
}

function blockCards(){
    setTimeout(()=>{
    for (let i = 0; i<=15; i++){
        let cardBlock = document.getElementById(i);
        cardBlock.innerHTML = `<img src="./Icons/${numbers[i]}.png" alt="">`;
        cardBlock.disabled = true;

        
    }},1000);

}
//Funcion reiniciar



function restartGame(){
    let fatherElement = document.querySelector('.section2');
    let successUp = document.querySelector('#success');
            restartButton.innerHTML= '<a href="">REINICIAR</a>';
            fatherElement.appendChild(restartButton);
            fatherElement.insertBefore(restartButton, successUp);
            document.getElementById("section-height").style.height = "500px";
            restartButton.setAttribute('class', 'change-button');
            

}

//Función principal
function uncover(id){

    if(chronometer == false){
        countTime();
        chronometer = true;


    }
    uncoveredCards++;
    console.log(uncoveredCards);

    if(uncoveredCards ==1){
        //Mostrar primer número
        card1 = document.getElementById(id);
        firstResult = numbers[id];
        card1.innerHTML = `<img src="./Icons/${firstResult}.png" alt="">`; 
        clickAudio.play();
        //Deshabilitar el primer boton
        card1.disabled = true;
    }else if(uncoveredCards ==2){
        card2 = document.getElementById(id);
        secondResult = numbers[id];
        card2.innerHTML = `<img src="./Icons/${secondResult}.png" alt="">`; 


        card2.disabled = true;

        //incrementar movimientos
        movements++;
        showMovements.innerHTML = `Movimientos: ${movements}`;
        
        if(firstResult == secondResult){
            //Encerar contador tarjetas destapadas
            uncoveredCards = 0;

            //aumentar aciertos
            hits++;
            showHits.innerHTML = `Aciertos: ${hits}`;
            rightAudio.play();
                if(hits == 8) {
                    winAudio.play();
                clearInterval(countdownTime);
                 showHits.innerHTML = `GANASTE 😎 !!! ${hits} ACIERTOS`;
                 showMovements.innerHTML = `Movimientos: ${movements} 👏‍👏‍`;
                 showTime.innerHTML = `Genial!! 🤙‍ Lo hiciste solo en ${startTimer - timer} segundos`;
                 
                restartGame();
            }
        }else{
            //Mostrar momentaneam   ente valores y destapar
            wrongAudio.play();
             setTimeout(()=>{
                 card1.innerHTML = " ";
                 card2.innerHTML = " ";
                 card1.disabled = false;
                 card2.disabled = false;
                 uncoveredCards = 0;
             },300);
        }
    }

}
  
//Estilos

//let headers = getElementById('title');


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    





