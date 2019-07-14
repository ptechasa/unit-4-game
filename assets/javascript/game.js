//player random number at the start of the game
// Math.floor( Math.random () * (max - min + 1)) + min)

function randomNum(min, max) {
    // return Math.floor( Math.random()*(12-1+1) ) +1 ; 1-12
    // return Math.floor( Math.random()*(12-2+1) ) +2 ; 2-12
    return Math.floor(Math.random() * (max - min + 1)) + min; //2-10
}

// var x = randomNum(2,12); // save result
var buttonOne = randomNum(2, 12);
var buttonTwo = randomNum(2, 12);
var buttonThree = randomNum(2, 12);
var buttonFour = randomNum(2, 12);
var guessNumber = randomNum(19, 120);

console.log("buttonOne", buttonOne);
console.log("buttonTwo", buttonTwo);
console.log("buttonThree", buttonThree);
console.log("buttonFour", buttonFour);
console.log(guessNumber);

var bOne = $('button').eq(0);
var bTwo = $('button').eq(1);
var bThree = $('button').eq(2);
var bFour = $('button').eq(3);

var counter = 0;

bOne.on('click', function () {

    counter = counter + buttonOne;
    console.log(counter);
    // console.log('hi');
})

bTwo.on('click', function () {
    counter = counter + buttonTwo;
    console.log(counter);
    // console.log('bye');
})

bThree.on('click', function () {
    counter = counter + buttonThree;
    console.log(counter);
    // console.log('hello');
})
bFour.on('click', function () {
    counter = counter + buttonFour;
    console.log(counter);
    // console.log('hey');
})
