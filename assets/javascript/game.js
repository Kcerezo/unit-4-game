
var buttonOne= 27;
var buttonTwo =16;
var buttonThree = 9;
var buttonFour = 12;

var target = 48;
var score = 0;
var wins= 0;
var losses= 0;

Math.floor(Math.random() * 48) + 1;

$("#target").html(ranNum);

$(document).ready(function() {
    //show target on page
    //make onclick event for .btn-choice elements using jquery
    $('.btn-choice').on('click',function(){
        if($(this).attr('value')==='1'){
            score += buttonOne
            document.getElementsByName(score)
    };
      $('.btn-choice').on('click', function(){
        if($(this).attr('value')==='2'){
            score += buttonTwo
            document.getElementsByName(score)
    };
      $('.btn-choice').on('click', function(){
        if($(this).attr('value')==='3'){
            score += buttonThree
            document.getElementsById(score)
    };
    
    $('.btn-choice').on('click', function(){
        if($(this).attr('value')==='4'){
            score += buttonFour
            document.getElementsById(score)
    };
    
        //score of this button is added to total score - make function that does this
        $(document).ready(function() {
            var score = 0;
                $("#update").click(function() {
                score++;
                $("#button").html("Current score: "+ target);
     });
        //display score on the page (update text of #score element with score)
        function score()
    {
        alert ("You got  " + score + " target")
        document.getElementById('score').innerHTML = "Score: " + score;
    }
        //if score > target - player loses

        $("#score").text(target);

        if ( score == target ) {
            win++;
            $("#win").html("Win:   " + win);
            $(".winner").html("You WONT!!!");
    }

        if (score > target) {
            loss++;
            $("#loss").html("Loss:   " + loss);
            $(".loser").html("You Lose!");
    }
});
        //else if score === target - player wins(make sure both are same type)
