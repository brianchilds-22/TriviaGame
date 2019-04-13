$('#start').on("click",function() {
//    for (var i=0; i<questions.length; i++) {
//         $(".card-body").append("<h4>"+questions[i].question+"</h4");
//         for(var j=0;j<questions[i].answers.length;j++){
//             $('.card-body').append("<input type ='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
//         }
//}
//$("#start").on("click",function(){
    game.start();
})

$(document).on("click","#end",function() {
    game.done();
})
//Question 1
var questions = [{
    question:"What Year Did Coors Field Open?",
    answers:["  1990 "," 1995 ", "  2000 ", "  2004 "],
    correctAnswer:" 1995 "
}, {
//Question 2

    question:"Andres Galarraga, Dante Bichette, Larry Walker and  Vinny Castilla were nicknamed the?",
    answers:[" Blake Street Bums ", " Bichette-heads ", " The Big Cats ", " Blake Street Bombers "],
    correctAnswer:" Blake Street Bombers "
}, {
// Question 3

    question:"What year did Larry Walker win the National League MVP?",
    answers:[" 1999 "," 1994 ", " 2001 ", " 1997 "],
    correctAnswer:" 1997 "
}, {
// Question 4

    question:"When did the Rockies go to the World Series?",
    answers:[" 2000 "," 2003 ", " 2007 ", " 2010 "],
    correctAnswer:" 2007 "
}, {
//Question 5

    question:"How long did Todd Helton play for the Rockies?",
    answers:[" 20 years "," 11 years ", " 14 years ", " 17 Years "],
    correctAnswer:" 17 Years "
}, {
//Question 6

    question:"Which Rockie is a 6 time gold glove winner at third base?",
    answers:[" Nolan Arenado "," Todd Helton ", " Vinnie Castilla ", " Walt Weiss "],
    correctAnswer:" Nolan Arenado "
}, {
// Question 7

    question:"What former famous Rockie shortstop now plays for the Yankees?",
    answers:[" Mike Trout "," Troy Tulowitzki ", " Trevor Story ", " DJ Lemahieu "],
    correctAnswer:" Troy Tulowitzki "
}, {
//Question 8

    question:"What year was Charlie Blackmon the NL batting champion? ",
    answers:[" 2015 "," 2018 ", " 2017 ", " 2012 "],
    correctAnswer:" 2017 "
}, {
//Question 9

    question:"Who is the Rockies mascot?",
    answers:[" Whiffer "," Drinker ", " Howler ", " Dinger "],
    correctAnswer:" Dinger "
}, {
//Question 10
    question:"What do the purple seats at Coors Field represent?",
    answers:[" the family section "," where Barry Bonds hit it ", " the best seats ", " one mile above sea level "],
    correctAnswer:" one mile above sea level "
}]

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function() {
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0) {
            console.log("Time is up!");
            game.done();
        }
    },
    start: function() {
        timer = setInterval(game.countdown,1000);
        $('.card-body').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $('#start').remove();
        for (var i=0; i<questions.length; i++) {
           $(".card-body").append("<h2>"+questions[i].question+"</h2");
            for(var j=0;j<questions[i].answers.length;j++){
               $('.card-body').append("<input type ='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
            }
        }
        $('.card-body').append('<br><br><button id="end">Done</button>')
    },
    done: function() {
        $.each($('input[name="question-0"]:checked'),function() {
            if ($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1"]:checked'),function() {
            if ($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-2"]:checked'),function() {
            if ($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-3"]:checked'),function() {
            if ($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-4"]:checked'),function() {
            if ($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-5"]:checked'),function() {
            if ($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-6"]:checked'),function() {
            if ($(this).val()==questions[6].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-7"]:checked'),function() {
            if ($(this).val()==questions[7].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-8"]:checked'),function() {
            if ($(this).val()==questions[8].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-9"]:checked'),function() {
            if ($(this).val()==questions[9].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
        },

        result: function() {
            clearInterval(timer);
            $('.card-body h2').remove();
            $('.card-body').html("<h2>All done!</hr>");
            $('.card-body').append("<h3>Correct Answers: "+this.correct+"</h3>");
            $('.card-body').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
            $('.card-body').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");

        }
    };





