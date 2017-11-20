//set timer and have it submitt answers when it reaches 0

var counter = 20;
var total = 5;
var score = 0;

// set up reset when timw runs out or form submitted
function reset(){
  if (counter === 0)
    counter = 20;
    total = 5;
    score = 0;
    $("input:radio").prop("checked", false);
  }

//set up timer to count down seconds and submit answers if not complete
setInterval("timer ()", 1000);

 
function timer(){
  counter --;

  if (counter === 0){
    submitAnswers();
    
    
  }

  $("#counter").text(counter);}
  reset()

//check answers
function submitAnswers() {

//var for if statements bringing in the info from the form
  var q1 = document.forms["quizForm"]["q1"].value;
  var q2 = document.forms["quizForm"]["q2"].value;
  var q3 = document.forms["quizForm"]["q3"].value;
  var q4 = document.forms["quizForm"]["q4"].value;
  var q5 = document.forms["quizForm"]["q5"].value;


//answers
 var correctAnswers = ["b","c","d","a","b"];
//check submitted against answer array
if (q1 == correctAnswers[0]){
  score ++;
 } 

 if (q2 == correctAnswers[1]){
  score ++;
 }

 if (q3 == correctAnswers[2]){
  score ++;
 }

 if (q4 == correctAnswers[3]){
  score ++;
 }

 if (q5 == correctAnswers[4]){
  score ++;
 }

//let them know the score
 alert("You Scored " + score + " Out of " + total);


reset()
}





