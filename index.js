alert("click here to see the result.");
var player1 = Math.floor((Math.random()*6) )+1;
var player2 = Math.floor((Math.random()*6) )+1;
var n1 = document.querySelector(".img1");
var n2 = document.querySelector(".img2");
switch(player1) {
case 1: n1.setAttribute("src","images/dice1.png"); break;
case 2: n1.setAttribute("src","images/dice2.png");break;
case 3: n1.setAttribute("src","images/dice3.png");break;
case 4: n1.setAttribute("src","images/dice4.png");break;
case 5: n1.setAttribute("src","images/dice5.png");break;
case 6: n1.setAttribute("src","images/dice6.png");break;
}

switch(player2) {
    case 1: n2.setAttribute("src","images/dice1.png");break;
    case 2: n2.setAttribute("src","images/dice2.png");break;
    case 3: n2.setAttribute("src","images/dice3.png");break;
    case 4: n2.setAttribute("src","images/dice4.png");break;
    case 5: n2.setAttribute("src","images/dice5.png");break;
    case 6: n2.setAttribute("src","images/dice6.png");break;
    }

var winner = document.querySelector("#winner");
if(player1 > player2) {
    
    winner.innerHTML = "Player 1 is winner.";
}
else if(player1 === player2) {
    winner.innerHTML = "Its a draw..";
}
else {
    winner.innerHTML = "Player 2 is winner.";
}

