
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

//global variables

// array of objects that are the questions

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

//array of object high scores

var highScoreArray = [

    {
        name: "",

        score: 0,

        time: 0

    }

    ,

    {
        name: "",

        score: 0,

        time: 0

    }

    ,

    {
        name: "",

        score: 0,

        time: 0

    }

    ,

    {
        name: "",

        score: 0,

        time: 0

    }

    ,

    {
        name: "",

        score: 0,

        time: 0

    }
    

];


var secondsLeft = (questions.length * 12);

var score;

var i;

var timerInterval;


/*

    what i need to make

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


  creates these elements

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



// styles the elements

displayNone(questionEl);

but1El.setAttribute("style" , "margin:5px; margin-top: 20px");

but2El.setAttribute("style" , "margin:5px");

but3El.setAttribute("style" , "margin:5px");

but4El.setAttribute("style" , "margin:5px");

displayNone(secEl);

SubEl.textContent = "Submit!"

displayNone(highScoreEl);

displayNone(timerEl);

// listens to to if the start button is clicked 

StartButEl.addEventListener("click" , function(event){

    displayNone(Start);

    hsBut.setAttribute("style", "visibility: hidden")

    timerEl.setAttribute("style", "display:flex")

    displayShown(ulEl);

    displayShown(questionEl);

    score = 0;

    i = 0;

    quiz();

    Timer();

    h3El.textContent = "";

});

//performs the quiz

function quiz () {

    h1El.textContent = questions[i].prompt;

    but1El.textContent = questions[i].Answer1[0];

    but2El.textContent = questions[i].Answer2[0];

    but3El.textContent = questions[i].Answer3[0];

    but4El.textContent = questions[i].Answer4[0];

}

function highScoreSet(quizscore){

    displayNone(ulEl);

    displayShown(secEl);

    h1El.textContent = "All Done"

    p1El.textContent = ("Your score is " + quizscore)

    p2El.textContent = "Please enter your initials"

    score = quizscore;

    clearInterval(timerInterval);

}

SubEl.addEventListener ("click" , function(){
    input = inpEl.value.trim();

    if (input === "" ){

        p2El.textContent = "Please enter a valid set of initials ( not blank )";

    }

    else {

        var HasBeenUsed = false;

        for (i = 0; i < highScoreArray.length; i++){

            if (highScoreArray[i].score < score && HasBeenUsed === false){

                HasBeenUsed = true;

                highScoreArray[i].name = input;

                highScoreArray[i].score = score;

                highScoreArray[i].time = secondsLeft;
               
            }
            else if(0 === score && HasBeenUsed === false && highScoreArray[i].score === 0){
                
                HasBeenUsed = true;

                highScoreArray[i].name = input;

                highScoreArray[i].score = score;

                highScoreArray[i].time = secondsLeft;

            }

        }

        secondsLeft = (questions.length * 12);

        // help localStorage.setItem("highScoreArrayls", highScoreArray.JSON(string));

        HighScoreList();

        console.log(localStorage.getItem("highScoreArrayls[1].score"));

     }

});

function Timer() {
    // Sets interval in variable
    timerInterval = setInterval(function() {
      secondsLeft--;
      timerCounterEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {

        clearInterval(timerInterval);

        // Calls function to end quiz

        highScoreSet();

      }
  
    }, 1000);
  }

  backToStart.addEventListener("click", function(){

    displayNone(highScoreEl);

    displayShown(Start);

    displayShown(hsBut);

  });

  function HighScoreList(){

    displayShown(highScoreEl);

    displayNone(secEl);

    displayNone(questionEl);

    displayNone(timerEl);

    if(!(highScoreArray[0].score === 0)){

    HSli1El.textContent = (highScoreArray[0].name + " scored " + highScoreArray[0].score + " with " + highScoreArray[0].time + " seconds left");

    }

    if(!(highScoreArray[1].score === 0)){

    HSli2El.textContent = (highScoreArray[1].name + " scored " + highScoreArray[1].score + " with " + highScoreArray[1].time + " seconds left");

    }

    if(!(highScoreArray[2].score === 0)){

    HSli3El.textContent = (highScoreArray[2].name + " scored " + highScoreArray[2].score + " with " + highScoreArray[2].time + " seconds left");

    }

    if(!(highScoreArray[3].score === 0)){

    HSli4El.textContent = (highScoreArray[3].name + " scored " + highScoreArray[3].score + " with " + highScoreArray[3].time + " seconds left");

    }

    if(!(highScoreArray[4].score === 0)){

    HSli5El.textContent = (highScoreArray[4].name + " scored " + highScoreArray[4].score + " with " + highScoreArray[4].time + " seconds left");

    }

  }

  hsBut.addEventListener("click", function(){

    displayNone(Start);

    HighScoreList();

  });

function displayShown(element){

    element.setAttribute("style", "display:flex;justify-content:center");

}

function displayNone(element){

    element.setAttribute("style", "display:none");
    
}

  questionEl.addEventListener("click", function(event){

    var selectedAns = event.target;

    console.log(selectedAns.textContent)

    scoreAns(selectedAns);
    console.log(i);
    i++;
        
    if( questions.length <= i ){

   console.log(score*(100/questions.length))

    }
    else if (questions.length > i){

        quiz();

    }

  });

  function scoreAns (selected){

    var text = selected.textContent

    var correct = false;

        if (text === questions[i].Answer1[0]){

            correct = questions[i].Answer1[1];

        }
        else if (text === questions[i].Answer2[0]){

            correct =  questions[i].Answer2[1];

        }
        else if (text === questions[i].Answer3[0]){

            correct =  questions[i].Answer3[1];

        }
        else if (text === questions[i].Answer4[0]){

            correct =  questions[i].Answer3[1];

        }

        if(correct === true){

            score++;
    
        }

  }

