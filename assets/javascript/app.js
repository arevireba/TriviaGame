$(document).ready(function(){
  var count = 0;
  var time = 31;
  var isSelected = false;
  var ticker;
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;

  var question = ["What is not the name of a Depeche Mode album?",  
  "Who performed the song, 'The Safety Dance?'", 
  "Where was the group Blondie formed?", 
  "Who performed the song, 'If You Leave?'", 
  "Where is the group The Go-Gos from?",
  "Who performed the song, 'Just Like Heaven?'", 
  "Who was a member of Erasure?", 
  "Who performed the song, 'Everybody Wants to Rule the World?'"];

  var answer = ["Sweet Home Manchester",
  "Men Without Hats", 
  "New York City", 
  "Orchestral Manoeuvers in the Dark", 
  "California", 
  "The Cure", 
  "Andy Bell", 
  "Tears for Fears"];

  var firstChoice = ["Violator", 
  "Squeeze", 
  "New York City", 
  "Duran Duran", 
  "Michigan", 
  "The Human League", 
  "Andy Bell", 
  "New Order"];

  var secondChoice = ["Black Celebration", 
  "Billy Idol", 
  "Oklahoma City", 
  "R.E.M.", 
  "California", 
  "The Smiths", 
  "Dave Gahan", 
  "Erasure"];

  var thirdChoice = ["Sweet Home Manchester", 
  "Kraftwerk", 
  "Salt Lake City", 
  "Joy Division", 
  "Oregon", 
  "The Cure", 
  "Morrissey", 
  "Howard Jones"];

  var fourthChoice = ["Music for the Masses", 
  "Men Without Hats", 
  "Kansas City", 
  "Orchestral Manoeuvers in the Dark", 
  "Florida", 
  "The B-52s", 
  "George Michael", 
  "Tears for Fears"];

  function showHolders() {
      $("#question-holder").show();
      $("#choice-holder-1").show();
      $("#choice-holder-2").show();
      $("#choice-holder-3").show();
      $("#choice-holder-4").show();
  }
  function hideHolders() {
      $("#question-holder").hide();
      $("#choice-holder-1").hide();
      $("#choice-holder-2").hide();
      $("#choice-holder-3").hide();
      $("#choice-holder-4").hide();
  }
  function hideResults() {
      $("#correct-holder").hide();
      $("#incorrect-holder").hide();
      $("#unanswered-holder").hide();
      $("#restart-holder").hide();
  }
  function displayQuestion () {
      hideResults();
      $("#answer-holder").hide();
      $("#image-holder").hide();
      $("#time-holder").show();
      showHolders();
      $("#question-holder").html(question[count]);
      $("#choice-holder-1").html(firstChoice[count]);
      $("#choice-holder-2").html(secondChoice[count]);
      $("#choice-holder-3").html(thirdChoice[count]);
      $("#choice-holder-4").html(fourthChoice[count]);
  }

  $("#choice-holder-1").on("click", checkAnswer) 
  $("#choice-holder-2").on("click", checkAnswer)
  $("#choice-holder-3").on("click", checkAnswer)
  $("#choice-holder-4").on("click", checkAnswer)

  function checkAnswer() {

      hideHolders();

      if($(this).text() === answer[count]) {
          stopTime();
          isSelected = true;
          $("#answer-holder").show();
          $("#answer-holder").html("Bitchen!  The answer is " + answer[count],"!");
          displayImage();
          correct++;
          count++;
      }
      else {
          stopTime();
          isSelected = true;
          $("#answer-holder").show();
          $("#answer-holder").html("Grody!  The answer is " + answer[count] + "!");
          displayImage();
          incorrect++;
          count++;
      } 
   checkGameEnd();  
  }
  function checkGameEnd() {
      if(count === question.length) {
          $("#time-holder").hide();
          showResults();
          count = 0;
          $(".start").show();
          $(".start").on("click", function() {
              resetResults();
              startGame();
          });
      }
  }

  function resetTime() {
      time = 31;
  }

  function displayTime() {
      time--;
      $("#time-holder").html("Like, you have " + time + " seconds remaining!");
    
          if(time <= 0) {
              hideHolders();
              stopTime();
              $("#answer-holder").show();
              $("#answer-holder").html("Gag me with a spoon, it's over! The answer is " + answer[count] + "!");
              displayImage();
              unanswered++;
              count++;
              checkGameEnd();
          }
  }

  function startTime() {
      clearInterval(ticker);
      ticker = setInterval(displayTime, 1000);
  }
  function stopTime() {
      clearInterval(ticker);
      resetTime();
      if(count < question.length - 1) {
          setTimeout(startTime, 2000);
          setTimeout(displayQuestion, 3000);
      }
  }

  resetTime();

  function displayImage() {
      if(count === 0) {
          $("#image-holder").show();
          $("#image-holder").html('<img src="assets/images/depechemode1.jpg">');
      }
      else if(count === 1) {
          $("#image-holder").show();
          $("#image-holder").html('<img src="assets/images/menwithouthats2.jpg">');
      }
      else if(count === 2) {
          $("#image-holder").show();
          $("#image-holder").html('<img src="assets/images/blondie3.png">');
      }
      else if(count === 3) {
          $("#image-holder").show();
          $("#image-holder").html('<img src="assets/images/omd4.png">');
      }
      else if(count === 4) {
          $("#image-holder").show();
          $("#image-holder").html('<img src="assets/images/gogos5.png">');
      }
      else if(count === 5) {
          $("#image-holder").show();
          $("#image-holder").html('<img src="assets/images/thecure6.png">');
      }
      else if(count === 6) {
          $("#image-holder").show();
          $("#image-holder").html('<img src="assets/images/erasure7.png">');
      }
      else if(count === 7) {
          $("#image-holder").show();
          $("#image-holder").html('<img src="assets/images/tff8.png">');
      }
  }
   
  function showResults() {
      $("#correct-holder").show();
      $("#correct-holder").html("Totally right answers! " + correct);
      $("#incorrect-holder").show();
      $("#incorrect-holder").html("Gag me! You got " + incorrect + " wrong!" );
      $("#unanswered-holder").show();
      $("#unanswered-holder").html("Barf me out, you didn't answer " + unanswered + " of them!");
      $("#restart-holder").show();
      $("#restart-holder").html("I'm so sure you want to play again!"+ "<br/>" +"Deposit another quarter above, dingus!");
  }

  function resetResults() {
      correct = 0;
      incorrect = 0;
      unanswered = 0;
  }

  function startGame() {
      $(".start").hide();
      startTime();
      displayQuestion();
  }

$(".start").on("click", function() {
  startGame();
});
});