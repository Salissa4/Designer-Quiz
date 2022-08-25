//Questions for quiz
var questions = [
    {
        questionText:
            "Where did Yves Saint Laurent begin his career?",
        choices: ["Lanvin", "Hermes", "Dior", "Balmain"],
        answer: "Dior"
    },
    {
        questionText:
            "What year was Gucci founded in?",
        choices: ["1917", "1931", "1923", "1921"],
        answer: "1921"
    },
    {
        questionText:
            "From 1983 until 2019, Karl Lagerfield was the creative director for which brand?",
        choices: ["Alaia", "Chanel", "Oscar de la Renta", "Pucci"],
        answer: "Chanel"
    },
    {
        questionText:
            "Who is the current creative director for Balmain?",
        choices: ["Oliver Rousteing", "Riccardo Tisci", "Alessandro Michele", "Maria Chiuri"],
        answer: "Oliver Rouseteing"
    },
    {
        questionText:
            "What country was Alexander McQueen from?",
        choices: ["France", "Italy", "United States", "London"],
        answer: "London"
    },
]
var index = 0
var questionsArea = document.querySelector("#questions")
var timerEl = document.querySelector('.timer');
var starQuiz = document.querySelector("#begin");
var score = 0
var timeLeft = 60

function storeScore() {
    localStorage.setItem("stored score", score);
}

//begin quiz timer 
function playgame() {
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            timerEl.innerText = 'Time: ' + timeLeft;

        } else {
            clearInterval(timeInterval);
        }
    }, 1000);
};

//Displays questions
starQuiz.addEventListener("click", function () {
    playgame()
    starQuiz.classList.add("hide")
    displayQuestion()
});

function displayQuestion() {
    questionsArea.innerHTML = ""
    var text = document.createElement("h2")
    text.innerText = questions[index].questionText
    questionsArea.appendChild(text)
    for (var i = 0; i < questions[index].choices.length; i++) {
        var button = document.createElement("button")
        button.innerText = questions[index].choices[i]
        button.addEventListener("click" , checkAnswer)
        questionsArea.appendChild(button)
    }
};

function checkAnswer(event) {
    var ansText = event.target.textContent;
    console.log(ansText);
    if(ansText === questions[index].answer){
        score = score + 100;
        console.log(score);
        index++;
        if (questions[index]) {
            displayQuestion()
            } else {
            alert("You Win! Score: " + score);
            storeScore();
    }

    } else {
        timeLeft -= 10;
        console.log(score);
        index++;
        displayQuestion()
    }
}

