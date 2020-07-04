var button1 = document.querySelector("#btn1");
var button2 = document.getElementById("btn2");
var reset = document.getElementById("rst");
var display1 = document.getElementById("disp1");
var display2 = document.getElementById("disp2");
var numInput = document.querySelector("input");
var displayWin = document.querySelector("p span");
var playerScore1 = 0;
var playerScore2 = 0;
var winScore = 5;
var gameOver =  false;

button1.addEventListener("click",function(){
    if(!gameOver){
        playerScore1++;
        if (playerScore1 ===  winScore){
            display1.classList.add("winner");
            gameOver = true;
        }
        display1.textContent = playerScore1;
    }
});
button2.addEventListener("click",function(){
    if(!gameOver){
        playerScore2++;
        if(playerScore2 === winScore){
            gameOver =  true;
            display2.classList.add("winner");
        }
        display2.textContent = playerScore2;
    }
    
    //console.log("Second" + playerScore2);
});
reset.addEventListener("click",function(){
    resetEvery();
});

numInput.addEventListener("change", function(){
    winScore = Number (this.value);
    displayWin.textContent = winScore;
    resetEvery();

});

function resetEvery(){
    playerScore1 = playerScore2 = 0;
    display1.textContent = 0;
    display2.textContent = 0;
    display1.classList.remove("winner");
    display2.classList.remove("winner");
    gameOver = false;
}