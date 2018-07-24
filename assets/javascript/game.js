
var buttonOne= 27;
var buttonTwo =16;
var buttonThree = 9;
var buttonFour = 12;

var target = 48;
var score = 0;
var wins= 0;
var losses= 0;

Math.floor(Math.random() * 48) + 1;

$("#target").html(target);

$(document).ready(function() {
    //show target on page
    //make onclick event for .btn-choice elements using jquery
    $('.btn-choice').on('click',function(){
        if($(this).attr('value')==='1'){
            score += buttonOne
        }else if($(this).attr('value')==='2'){
            score += buttonTwo
        } else if($(this).attr('value')==='3'){
            score += buttonThree
        } else if($(this).attr('value')==='4'){
            score += buttonFour;
        }  
        $("#score").text(score);

        if ( score == target ) {
            wins++;
            $("#wins").html(wins);
            alert("You WON!!!");
            end()
        }

        if (score > target) {
            losses++;
            $("#losses").html(losses);
            alert("You Lose!");
            end()
        }

    });

    function end(){
        score = 0;
        $("#score").text(score)
    }
        //score of this button is added to total score - make function that does this
        
        //display score on the page (update text of #score element with score)
    
        //if score > target - player loses

       
});
        //else if score === target - player wins(make sure both are same type)
