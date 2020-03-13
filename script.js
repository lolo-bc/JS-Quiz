var startBttn = document.querySelector("#start");
var questionEl = document.querySelector("#question");
var time = document.querySelector("#time");
var score = 75;
var opt1 = document.querySelector("#opt1");
var opt2 = document.querySelector("#opt2");
var opt3 = document.querySelector("#opt3");
var opt4 = document.querySelector("#opt4");
var answerOpts = document.querySelectorAll(".optionButt")
var wrongAnsPopup = document.querySelector("#wrongo");
var i = 0;
var theQuestions = [
    "What is Javascript?",
    "why is this so hard?",
    "i gues this is q3 huh?"
]

var optionsAtOne = [
    "A soul sucking monster",
    "what",
    "bro",
]

var optionsAtTwo = [
    "The key to all past, current, and future pain",
    "batteries",
    "beets",
]

var optionsAtThree = [
    "The progeny of Satan himself",
    "iHateyou",
    "im out of rando things to type"
]

var optionsAtFour = [
    "all of the above",
    "battlestar galactica",
    "kiss it"
]

var correctAnswers = ["all of the above", "iHateyou", "bro"];

function clearStartScreen() {
    event.preventDefault();
    document.getElementById('theHeader').style.display = "none";
    document.getElementById('theContent').style.display = "none";
    document.getElementById('start').style.display = "none";
    quiz();
}



function quiz () {
    timeLeft = setInterval(function() {
      score--;  
      time.textContent = score;
      if (score === 0) {
        clearInterval(timeLeft);
        confirm("you ran out of time! you suck. do you want to try again?") 
      }
    }, 1000);

    document.getElementById('question').style.display = "block";
    questionEl.textContent = theQuestions[0];
     

    document.getElementById('answerOpts').style.display = "block";
      opt1.textContent = optionsAtOne[0];
      opt2.textContent = optionsAtTwo[0];
      opt3.textContent = optionsAtThree[0];
      opt4.textContent = optionsAtFour[0];

  
}




function nextQuestion () {
    event.preventDefault();
    i++;
    questionEl.textContent = theQuestions[i];
    opt1.textContent = optionsAtOne[i];
    opt2.textContent = optionsAtTwo[i];
    opt3.textContent = optionsAtThree[i];
    opt4.textContent = optionsAtFour[i];



    }


function wrongclick() { 
    document.getElementById('wrongo').style.display = "block";
    wrongAnsPopup.textContent = "Wrong! Try again!";
    setTimeout(function(){document.getElementById('wrongo').style.display = "none"; }, 1000);

}



    
opt1.addEventListener("click", function() {
    if (optionsAtOne[i] === correctAnswers[i]) {
    
        nextQuestion ();
    } else {
            wrongclick ();
        }
    });

opt2.addEventListener("click", function() {
    if (optionsAtTwo[i] === correctAnswers[i]) {
    
        nextQuestion ();
    } else {
            wrongclick ();
        }
    });

opt3.addEventListener("click", function() {
if (optionsAtThree[i] === correctAnswers[i]) {

    nextQuestion ();
} else {
        wrongclick ();
    }
});

opt4.addEventListener("click", function() {
    if (optionsAtFour[i] === correctAnswers[i]) {
    
        nextQuestion ();
    } else {
            wrongclick ();
        }
    });

startBttn.addEventListener("click", clearStartScreen);



var modal = document.getElementById("highscoresModal");

// Get the button that opens the modal
var btn = document.getElementById("highscoresBtn");

// Get the <closeBtn> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <closeBtn> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}