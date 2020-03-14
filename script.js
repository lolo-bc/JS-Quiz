var startBttn = document.querySelector("#start");
var questionEl = document.querySelector("#question");
var time = document.querySelector("#time");
var score = 75;
var opt1 = document.querySelector("#opt1");
var opt2 = document.querySelector("#opt2");
var opt3 = document.querySelector("#opt3");
var opt4 = document.querySelector("#opt4");
var addbtn = document.querySelector("#addbtn");
var nameEl = document.querySelector("#name");
var answerOpts = document.querySelectorAll(".optionButt")
var wrongAnsPopup = document.querySelector("#wrongo");
var highscores = document.querySelector("#highscores");


var i = 0;
// var people = [localStorage.getItem('name', 'score')];

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

    if (i >= theQuestions.length) {
        clearInterval(timeLeft);
        document.getElementById('question').style.display = "none";
        document.getElementById('answerOpts').style.display = "none";

        document.getElementById('theHeader').style.display = "block";
        theHeader.textContent = "You did it!";

        document.getElementById('theContent').style.display = "block";
        theContent.textContent = "Your final score is " + score; + "!";

        document.getElementById('saveScoreForm').style.display = "block";

        addbtn.addEventListener("click", function() {
            event.preventDefault();
            modal.style.display = "block";
            var name = nameEl.value;
            var li = document.createElement("li");
            li.innerHTML = name + "  ------  " + score;
            highscores.append(li);
            var myScore = {
                name: name,
                score: score
            };
            // var myCoolScoreArray = [];
            // myCoolScoreArray.push(myScore);
            //[{name: "tony", score: 0}, {name:"lauren", score:100}]
            localStorage.setItem("potato", JSON.stringify(myScore));
            document.getElementById("addbtn").disabled = true;
        });


    }

    questionEl.textContent = theQuestions[i];
    opt1.textContent = optionsAtOne[i];
    opt2.textContent = optionsAtTwo[i];
    opt3.textContent = optionsAtThree[i];
    opt4.textContent = optionsAtFour[i];



    }


function wrongclick() { 
    document.getElementById('wrongo').style.display = "block";
    score--;
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
  var myScoreFromStorage = [localStorage.getItem("potato")];
  myScoreFromStorage = JSON.parse(myScoreFromStorage);
  var li = document.createElement("li");
  li.innerHTML = myScoreFromStorage.name + "  wooooooo  " + myScoreFromStorage.score;
  highscores.append(li);
}

// When the user clicks on <closeBtn> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

