var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // 1-6
var randomDiceSource = "dice" + randomNumber1 + ".png"; // dice1 - dice6
var randomImageSource = "images/" + randomDiceSource; // images source

var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src", randomImageSource2);

var winner = "";

if (randomNumber1 > randomNumber2) {
    winner = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    winner = "Player 2 wins!";
} else {
    winner = "Draw!";
}
var headingWinner = document.querySelector(".container h1").innerHTML = winner;