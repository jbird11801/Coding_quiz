
//grabs the elements already made 

var questionEl = document.getElementById("question");

var StartButEl = document.getElementById("start-quiz-button");

var highScoreEl = document.getElementById("highScore");

var timerEl = document.getElementById("timer");

var timerCounterEl = document.getElementById("counter");

var Start = document.getElementById("Start")

var backToStart = document.getElementById("BackToStart");

var hsList = document.getElementById("HighScoreList");

var hsBut = document.getElementById("high-score-but");

var ClearBut = document.getElementById("Clear");

//global variables

var questions = [

    //used to store the question text can add more to text object to add more questions the bool is used to say if the question is true

/*

format

    {
        prompt: "question text" ,

        Answer1: ["false answer" , false] ,

        Answer2: ["false answer" , false] ,

        Answer3: ["true answer" , true] ,

        Answer4: ["false answer" , false] ,

    }

*/

    {
        prompt: "Commonly used data types DO Not Include:" ,

        Answer1: ["Strings" , false] ,

        Answer2: ["Booleans" , false] ,

        Answer3: ["Alerts" , true] ,

        Answer4: ["Numbers" , false] ,

    }

    ,

    {
        prompt: "The condition in an if / else statement is enclosed with ___________. :" ,

        Answer1: ["Quotes" , false] ,

        Answer2: ["Curly Brackets" , false] ,

        Answer3: ["Parenthesis" , true] ,

        Answer4: ["Square brackets" , false] ,
        
    }

    ,

    {
        prompt: "Arrays in JavaScript can be used to store ___________. :" ,

        Answer1: ["Numbers and Strings" , false] ,

        Answer2: ["Other arrays" , false] ,

        Answer3: ["Booleans" , false] ,

        Answer4: ["All of the above" , true] ,
        
    }

    ,

    {
        prompt: "String values must be enclosed within ___________ when being assigned to variables. :" ,

        Answer1: ["Commas" , false] ,

        Answer2: ["Curly Brackets" , false] ,

        Answer3: ["Quotes" , true] ,

        Answer4: ["Parenthesis" , false] ,
        
    }

    ,

    {
        prompt: "A very useful tool used during develpment and debugging for printing content to the debugger is :" ,

        Answer1: ["JavaScript" , false] ,

        Answer2: ["Terminal / bash" , false] ,

        Answer3: ["for loops" , false] ,

        Answer4: ["console.log" , true] ,
        
    }

];

highScoreScore = [0,0,0,0,0];

highScoreString = ["","","","",""];

var quizScoreStringsetup;

var highScoreSetup = {

    name: "",

    score: 0,

    time: 0

};

var secondsLeft = (questions.length * 12);

var score;

var questionIndex;

var timerInterval;

var HSArrayLS;

var HSArrayScoreLS = [0,0,0,0,0];



//what i need to make

/*

  <h1></h1>

  <ul>

    <button></button>

    <button></button>

    <button></button>

    <button></button>

  </ul>

    <section>

        <p></p>

        <p> </p>

        <input></input>
        
        <button></button>

    </section>

  <h3></h3>

  */

// CREATES ELEMENTS

var h1El = document.createElement("h1");

var ulEl = document.createElement("ul");

var but1El = document.createElement("BUTTON");

var but2El = document.createElement("BUTTON");

var but3El = document.createElement("BUTTON");

var but4El = document.createElement("BUTTON");

var secEl = document.createElement("section");

var p1El = document.createElement("p");

var p2El = document.createElement("p");

var inpEl = document.createElement("input");

var h3El = document.createElement("h3");

var SubEl = document.createElement("BUTTON");

var HSli1El = document.createElement("li");

var HSli2El = document.createElement("li");

var HSli3El = document.createElement("li");

var HSli4El = document.createElement("li");

var HSli5El = document.createElement("li");

// apends the items 

questionEl.appendChild(h1El);

questionEl.appendChild(ulEl);

ulEl.appendChild(but1El);

ulEl.appendChild(but2El);

ulEl.appendChild(but3El);

ulEl.appendChild(but4El);

questionEl.appendChild(secEl);

secEl.appendChild(p1El);

secEl.appendChild(p2El);

secEl.appendChild(inpEl);

secEl.appendChild(SubEl);

hsList.appendChild(HSli1El);

hsList.appendChild(HSli2El);

hsList.appendChild(HSli3El);

hsList.appendChild(HSli4El);

hsList.appendChild(HSli5El);

// styles the elements

displayNone(questionEl);

HSli1El.setAttribute("style" , "border:5px; background-color: rgba(255, 166, 0, 0.5)");

HSli2El.setAttribute("style" , "border: solid 5px rgba(255, 166, 0, 0.5); background-color: rgba(255, 166, 0, 0.5)");

HSli3El.setAttribute("style" , "border:5px; background-color: rgba(255, 166, 0, 0.5)");

HSli4El.setAttribute("style" , "border: solid 5px rgba(255, 166, 0, 0.5); background-color: rgba(255, 166, 0, 0.5)");

HSli5El.setAttribute("style" , "border:5px background-color: rgba(255, 166, 0, 0.5)");

but1El.setAttribute("style" , "margin:5px; margin-top: 20px");

but2El.setAttribute("style" , "margin:5px");

but3El.setAttribute("style" , "margin:5px");

but4El.setAttribute("style" , "margin:5px");

displayNone(secEl);

SubEl.textContent = "Submit!"

displayNone(highScoreEl);

displayNone(timerEl);

// listens to to if the start button is clicked and then starts the quiz and timer and hides appropriate items and makes sure the right variables are reset

StartButEl.addEventListener("click" , function(event){

    displayNone(Start);

    hsBut.setAttribute("style", "visibility: hidden")

    timerEl.setAttribute("style", "display:flex")

    displayShown(ulEl);

    displayShown(questionEl);

    score = 0;

    questionIndex = 0;

    displayNone(secEl);

    quiz();

    Timer();

    h3El.textContent = "";

});

//The timer function will end the quiz if time hits 0

function Timer() {

    // Sets interval in variable

    timerInterval = setInterval(function() {

      secondsLeft--;

      timerCounterEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {

        clearInterval(timerInterval);

        // Calls function to end quiz

        highScoreSet(highScoreSet(score*(100/questions.length)));

      }
  
    }, 1000);

  }

  //changes the the quiz text

function quiz () {

    h1El.textContent = questions[questionIndex].prompt;

    but1El.textContent = questions[questionIndex].Answer1[0];

    but2El.textContent = questions[questionIndex].Answer2[0];

    but3El.textContent = questions[questionIndex].Answer3[0];

    but4El.textContent = questions[questionIndex].Answer4[0];

}

// detects what button in the quiz is hit

questionEl.addEventListener("click", function(event){

    var selectedAns = event.target;

    if(questionIndex < questions.length){

    scoreAns(selectedAns);

    }

    questionIndex++;
        
    if( questions.length <= questionIndex ){

        highScoreSet(score*(100/questions.length));

    }
    else if (questions.length > questionIndex){

        quiz();

    }

});

//ends the quiz and promps the user to ener a name while hideing the quiz and stoping the timer

function highScoreSet(quizscore){

    displayNone(ulEl);

    displayShown(secEl);

    h1El.textContent = "All Done"

    p1El.textContent = ("Your score is " + quizscore)

    p2El.textContent = "Please enter your initials"

    clearInterval(timerInterval);

}

// the submit button submit the score and name on the quiz and loads the high score screen 

SubEl.addEventListener ("click" , function(){
    input = inpEl.value.trim();

    if (input === "" ){

        p2El.textContent = "Please enter a valid set of initials ( not blank )";

    }

    else {

        highScoreSetup.name = inpEl.value;

        highScoreSetup.score = (score*(100/questions.length));

        highScoreSetup.time = timerCounterEl.textContent;

        quizScoreStringsetup = (highScoreSetup.name + " scored " + highScoreSetup.score + " with " + highScoreSetup.time + " seconds left");

        HSArrayLS = JSON.parse(localStorage.getItem("HSArrayLS"));

        HSArrayScoreLS = JSON.parse(localStorage.getItem("HSArrayScoreLS"));
        console.log(HSArrayLS)
        if (HSArrayLS !== null && HSArrayLS !== ""){

            HsOrganiser(HSArrayLS , HSArrayScoreLS);

        }
        
        else

        {

            HsOrganiser(highScoreString , highScoreScore);

        }

        HighScoreList();

     }

});

// a helper function to organise the quiz scores

function HsOrganiser(String , Score){

    console.log(String)

    for(var i = 0; i < String.length; i++){

        var temp;

        if(highScoreSetup.score > Score[i]){

            temp = String[i];

            String[i] = quizScoreStringsetup;

            quizScoreStringsetup = temp;

            temp = Score[i];

            Score[i] = highScoreSetup.score;

            highScoreSetup.score = temp;

        }

    }

    localStorage.setItem("HSArrayLS" , JSON.stringify(String));

    localStorage.setItem("HSArrayScoreLS" , JSON.stringify(Score));

}

// goes back to the start of the quiz

backToStart.addEventListener("click", function(){

    displayNone(highScoreEl);

    displayShown(Start);

    displayShown(hsBut);

});

//loads the high scores of past quiz takers

function HighScoreList(){

    hsBut.setAttribute("style", "visibility: hidden")

    displayShown(highScoreEl);

    displayNone(questionEl);

    displayNone(timerEl);

    HSArrayLS = JSON.parse(localStorage.getItem("HSArrayLS"));
    
    HSli1El.textContent = HSArrayLS[0];

    HSli2El.textContent = HSArrayLS[1];

    HSli3El.textContent = HSArrayLS[2];

    HSli4El.textContent = HSArrayLS[3];

    HSli5El.textContent = HSArrayLS[4];

}

//loads the high score buttons

hsBut.addEventListener("click", function(){

    displayNone(Start);

    HighScoreList();

});

// clears the high scores

ClearBut.addEventListener("click", function(){

    for(var i = 0; i < highScoreString.length;i++){

        highScoreScore[i] = 0;

        highScoreString[i] = "";

    }

    localStorage.setItem("HSArrayLS" , JSON.stringify(highScoreString));

    localStorage.setItem("HSArrayScoreLS" , JSON.stringify(highScoreScore))

    HighScoreList();

});

// scores the submited anser from the user

function scoreAns (selected){

    var text = selected.textContent

    var correct = false;

        if (text === questions[questionIndex].Answer1[0]){

            correct = questions[questionIndex].Answer1[1];

        }
        else if (text === questions[questionIndex].Answer2[0]){

            correct =  questions[questionIndex].Answer2[1];

        }
        else if (text === questions[questionIndex].Answer3[0]){

            correct =  questions[questionIndex].Answer3[1];

        }
        else if (text === questions[questionIndex].Answer4[0]){

            correct =  questions[questionIndex].Answer4[1];

        }
        else{

        }

        if(correct === true){

            score++;
    
        }

}

// helper functions to show or hide elements

  function displayShown(element){

    element.setAttribute("style", "display:flex;justify-content:center");

}

function displayNone(element){

    element.setAttribute("style", "display:none");
    
}
