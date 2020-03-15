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
var modal = document.getElementById("highscoresModal");
var highscoresbtn = document.getElementById("highscoresBtn");
var closeBtn = document.getElementsByClassName("close")[0];
var clearBtn = document.getElementById("clearScores");


// retreiving the high scores from local storage and loading them into the modal
var arrayOfHighscores = localStorage.getItem("saveUserScoreLocal");

if (!arrayOfHighscores) {
    arrayOfHighscores = [];
} else {
    arrayOfHighscores = JSON.parse(arrayOfHighscores);
}

for (i = 0; i < arrayOfHighscores.length; i++) {
    var highscoreLine = arrayOfHighscores[i];
    var li = document.createElement("li");
    li.innerHTML = highscoreLine.name + "  - " + highscoreLine.score;
    highscores.append(li);
}



var i = 0;

// list of questions and answers for each 

var theQuestions = [
    "What is Javascript?",
    "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    "What should appear at the very end of your JavaScript?",
    "Which of the following is not a valid JavaScript variable name?",
    "Which type of statement is how you test for a specific condition?",
    "What is mean by this keyword in javascript?",
    "Which of the following is not JavaScript Data Types?",
    "What are the three important manipulations done in a for loop in javascript?",
    "Which of them is not the looping structures in JavaScript?",
    "What are the types of Pop up boxes available in JavaScript?"
]

var optionsAtOne = [
    "A. A soul sucking monster",
    "A. The User's machine running a Web browser",
    "A. The </script>",
    "A. 2beets",
    "A. Select",
    "A. It refers to the previous object",
    "A. Undefined",
    "A. the initialization, the Incrementation, and update",
    "A. For",
    "A. Alert"
]

var optionsAtTwo = [
    "B. The key to all past, current, and future pain",
    "B. The Web server",
    "B. The <script>",
    "B.  _first_and_last_names",
    "B. If",
    "B. It's just there to trick you",
    "B. Number",
    "B. the initialization, the test, and the update",
    "B. While",
    "B. Prompt"
]

var optionsAtThree = [
    "C. The progeny of Satan himself",
    "C. A central machine deep within Google's corporate offices",
    "C. The END statement",
    "C. FirstAndLast",
    "C. Switch",
    "C. It referts to the current object",
    "C. Boolean",
    "C. the initialization, the test, and Incrementation",
    "C. For which",
    "C. Confrim"

]

var optionsAtFour = [
    "D. all of the above",
    "D. battlestar galactica",
    "D. None of the above",
    "D. None of the above",
    "D. For",
    "D. It refers to only globally declared objects",
    "D. Float",
    "D. All of the above",
    "D. Do while",
    "D. All of the above"
]

var correctAnswers = [
    "D. all of the above", 
    "A. The User's machine running a Web browser", 
    "A. The </script>",
    "A. 2beets",
    "B. If",
    "C. It referts to the current object",
    "D. Float",
    "B. the initialization, the test, and the update",
    "C. For which",
    "D. All of the above"
    ];


//removes the text from the HTML screen when it loads and begins quiz function
function clearStartScreen() {
    event.preventDefault();
    document.getElementById('theHeader').style.display = "none";
    document.getElementById('theContent').style.display = "none";
    document.getElementById('start').style.display = "none";
    quiz();
}


//quiz function runs the timer and turns on display of HTML element for question and answer options, as well as footer
function quiz () {
    timeLeft = setInterval(function() {
      score--;  
      time.textContent = score;
      if (score === 0) {
        clearInterval(timeLeft);
        alert("You ran out of time! Give it another shot!!") 
        window.location.reload();
      }
    }, 1000);

    document.getElementById('question').style.display = "block";
    questionEl.textContent = theQuestions[0];
     

    document.getElementById('answerOpts').style.display = "block";
      opt1.textContent = optionsAtOne[0];
      opt2.textContent = optionsAtTwo[0];
      opt3.textContent = optionsAtThree[0];
      opt4.textContent = optionsAtFour[0];

    document.getElementById('footer').style.display = "block";
  
}



// this funciton loops through the questions and answers, it is only called when the user selects the correct answer 
function nextQuestion () {
    event.preventDefault();
    i++;
    //if user answers all questions correctly, hide questions and display HTML elements for submitting name and score 
    if (i >= theQuestions.length) {
        clearInterval(timeLeft);
        document.getElementById('question').style.display = "none";
        document.getElementById('answerOpts').style.display = "none";

        document.getElementById('theHeader').style.display = "block";
        theHeader.textContent = "You did it!";

        document.getElementById('theContent').style.display = "block";
        theContent.textContent = "Your final score is " + score + "!";

        document.getElementById('saveScoreForm').style.display = "block";

        // called when user hits submit, saves data to local storage and pops modal
        addbtn.addEventListener("click", function() {
            event.preventDefault();
            modal.style.display = "block";
            var name = nameEl.value;
            var li = document.createElement("li");
            li.innerHTML = name + "  - " + score;
            highscores.append(li);

            var userScore = {
                name: name,
                score: score
            };

            arrayOfHighscores.push(userScore);

            localStorage.setItem("saveUserScoreLocal", JSON.stringify(arrayOfHighscores));

            document.getElementById("addbtn").disabled = true;
        });


    }

    questionEl.textContent = theQuestions[i];
    opt1.textContent = optionsAtOne[i];
    opt2.textContent = optionsAtTwo[i];
    opt3.textContent = optionsAtThree[i];
    opt4.textContent = optionsAtFour[i];



    }

//popup when user selects wrong answer, subtracts from score 
function wrongclick() { 
    document.getElementById('wrongo').style.display = "block";
    score--;
    wrongAnsPopup.textContent = "Wrong! Try again!";
    setTimeout(function(){document.getElementById('wrongo').style.display = "none"; }, 600);

}



// click listeners for all 4 answer options, checks if answer clicked matches correct answers array  
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





// Code for opening, closing, and clearing the highcores modal 

highscoresbtn.addEventListener('click', function () {
    modal.style.display = "block";
})

closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
})

clearBtn.addEventListener('click', function () {
  localStorage.clear();
  while (highscores.firstChild) {
    highscores.removeChild(highscores.firstChild)
  }
} );


