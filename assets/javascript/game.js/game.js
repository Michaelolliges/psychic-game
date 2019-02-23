

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


var wins = 0;
var losses = 0;
var numberOfGuesses = 9;
var guessesThusFar = [];

document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
if (options.indexOf(userGuess)> -1) {
    if (userGuess === computerGuess) {
        wins++;
    numberOfGuesses = 9;
    guessesThusFar = [];
    }
    if (userGuess != computerGuess) {
        numberOfGuesses --;
        guessesThusFar.push(userGuess);
    }
    if (numberOfGuesses === 0) {

        numberOfGuesses = 9;
        losses ++;
        guessesThusFar = [];

        // I DONT KNOW nothing works. I feel like the ifs should be elses but it gives me red squiggles.
    }
    

    

    }
  


}
