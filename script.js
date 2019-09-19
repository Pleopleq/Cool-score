var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var spanp1 = document.querySelector("#p1Display")
var spanp2 = document.getElementById("p2Display")
var rounds = document.querySelector("input");
var p = document.querySelector("p")
var winningScoreDisplay = document.querySelector("p span")
var resetButton = document.querySelector("#reset")
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

//Function that reset the score
function reset(){
    spanp1.textContent = 0;
    spanp2.textContent = 0;
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
}

//Player one button
p1Button.addEventListener("click", function(){
    if (!gameOver){
        p1Score ++;
        if (p1Score === winningScore){
        spanp1.classList.add("winner");
        gameOver = true;
    }
    spanp1.textContent = p1Score;
    }
});

//Player two button
p2Button.addEventListener("click", function(){
    if (!gameOver){
        p2Score ++;
        if (p2Score === winningScore){
            spanp2.classList.add("winner");
            gameOver = true;
    }
    spanp2.textContent = p2Score;
    }
});

//Reset button
resetButton.addEventListener("click", function(){
    reset();
 });

//Input for the total rounds to win
rounds.addEventListener ("change", function(){
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
 });