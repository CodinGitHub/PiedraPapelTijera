let userChoice;
let computerChoice;
let options = ["Piedra", "Papel", "Tijera"];
//DOM Elements
let pcChoise = document.getElementById("pcChoice");
let usChoice = document.getElementById("userChoice");
let result = document.getElementById("result");
 

let randomNumber = function getRandomInt(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}


function play(userChoice){

    computerChoice = options[randomNumber(1,3)];
    pcChoise.innerHTML = "Computer: " + computerChoice;
    usChoice.innerHTML = "User: " + userChoice;


    let game = function (userChoice, computerChoice){
        if (computerChoice === userChoice){
            return "It's a tie."
        }
        if (userChoice === "Piedra"){    
            if (computerChoice === "Papel"){
                return "You lost!"
            }
            if (computerChoice === "Tijera"){
                return "You won!"
            }
        }
        if (userChoice === "Papel"){
            if (computerChoice === "Piedra"){
                return "You won!"
            }
            if (computerChoice === "Tijera"){
                return "You lost!"
            }
        }
        if (userChoice === "Tijera"){
            if (computerChoice === "Papel"){
                return "You won!"
            }
            if (computerChoice === "Piedra"){
                return "You lost!"
            }
        }
    }
    result.innerHTML = game(userChoice, computerChoice);
}