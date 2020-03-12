var startBttn = document.querySelector("#start");
var questionEl = document.querySelector("#question");
var time = document.querySelector("#time");
var score = 75;
var opt1 = document.querySelector("#opt1");
var opt2 = document.querySelector("#opt2");
var opt3 = document.querySelector("#opt3");
var opt4 = document.querySelector("#opt4");
var wrongAnsPopup = document.querySelector("#wrongo");
var theQuestions = [
    "what is an example of a question to put here?",
    "why is this so hard?",
    "i gues this is q3 huh?"
]

var optionsAtOne = [
    "hey",
    "what",
    "bro",
]

var optionsAtTwo = [
    "cats",
    "batteries",
    "beets",
]

var optionsAtThree = [
    "butterflys",
    "iHateyou",
    "im out of rando things to type"
]

var optionsAtFour = [
    "beer",
    "battlestar galactica",
    "kiss it"
]

function clearStartScreen() {
    event.preventDefault();
    document.getElementById('theHeader').style.display = "none";
    document.getElementById('theContent').style.display = "none";
    document.getElementById('start').style.display = "none";
    quiz();
}



function quiz () {
    timeLeft = setInterval(function() {
      time.textContent = score;
      score--;  
    }, 1000);

    document.getElementById('question').style.display = "block";
    questionEl.textContent = theQuestions[0];

    document.getElementById('answerOpts').style.display = "block";


    if (correctAnswers[0] === answerOptsArray[0]) {
        then 
        what will happen 
        is this code wont work becasue im super dumb
        thank you for coming to my ted talk 
    }

    // opt1.textContent = optionsAtOne[0];
    //     opt1.addEventListener("click", wrongclick);
    // opt2.textContent = optionsAtTwo[0];
    //     opt2.addEventListener("click", wrongclick);
    // opt3.textContent = optionsAtThree[0];
    //     opt3.addEventListener("click", wrongclick);
    // opt4.textContent = optionsAtFour[0];
    //     opt4.addEventListener("click", nextQuestion);

}

function nextQuestion () {
    event.preventDefault();
    for(i = 1; i < theQuestions.length; i++) {
        questionEl.textContent = theQuestions[i];
         if (i === theQuestions[1]) {
        opt3.addEventListener("click", nextQuestion);
        } else {
            wrongclick ();
            }
    }

    // for(i = 1; i < optionsAtOne.length; i++) {
    //     opt1.textContent = optionsAtOne[i];
    // }

    // for(i = 1; i < optionsAtTwo.length; i++) {
    //     opt2.textContent = optionsAtTwo[i];
    // }

    // for(i = 1; i < optionsAtThree.length; i++) {
    //     opt3.textContent = optionsAtThree[i];
    // }

    // for(i = 1; i < optionsAtFour.length; i++) {
    //     opt4.textContent = optionsAtFour[i];
    // }

   
}


function wrongclick() { 
    document.getElementById('wrongo').style.display = "block";
    wrongAnsPopup.textContent = "Wrong! Try again!";
}


startBttn.addEventListener("click", clearStartScreen);