let user1 = true;
let point0 = 0;
let point1 = 0;
const win = true;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#res");
const result = document.querySelector(".restart");
const newGame = document.querySelector("#newGame");

const user1Score = document.querySelector("#user1-score");
const user2Score = document.querySelector("#user2-score");

const winPattern = [
    [0  , 1 , 2] , 
    [3  , 4 , 5] ,
    [6  , 7 , 8] ,
    [0  , 3 , 6] ,
    [1  , 4 , 7] , 
    [2  , 5 , 8] ,
    [0  , 4 , 8] ,
    [2  , 4 , 6]
];
choices.forEach( (choice) => {
    choice.addEventListener("click", () => {
       if(user1){
        choice.innerText = "O";
        choice.style.color = "red";
        user1 = false;
       }else{
        choice.innerText = "X";
         choice.style.color = "green";
        user1 = true;
       }
       choice.disabled = true;
       checkWinner();
    });
})

function showWinner(pos1Val) {
    msg.innerText = "Winner is : " + pos1Val;
    if(pos1Val === "O"){
        point0++;
        user1Score.innerText = point0;
    }
    else{
        point1++;
        user2Score.innerText = point1;
    }
}

function disableBtns(){
    for(let choice of choices){
        choice.disabled = true;
    }
}
const checkWinner = () => {
    for(let pattern of winPattern){
       let pos1Val =  choices[pattern[0]].innerText 
       let pos2Val = choices[pattern[1]].innerText
       let pos3Val =  choices[pattern[2]].innerText;
    
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val ===  pos2Val && pos2Val === pos3Val){
                disableBtns();
                showWinner(pos1Val);
            }

        }
    }
   
}
function remove() {
    for(let choice of choices){
        choice.disabled = false;
        choice.innerText = "";
    }
    msg.innerText = "Play your move User1";
}
function clear() {
    point0 = 0;
    point1 = 0;
    user1Score.innerText = point0;
    user2Score.innerText = point1;
    msg.innerText = "Play your move User1";
}
result.addEventListener("click", clear);
newGame.addEventListener("click", remove);