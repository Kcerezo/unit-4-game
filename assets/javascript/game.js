
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

       
});