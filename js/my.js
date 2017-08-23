//section buttons
var one = document.getElementById('one')
var two = document.getElementById('two')
var three = document.getElementById('three')
var four = document.getElementById('four')
var five = document.getElementById('five')
var six = document.getElementById('six')

one.style.display = 'block'
two.style.display = 'none'
three.style.display = 'none'
four.style.display = 'none'
five.style.display = 'none'
six.style.display = 'none'


$("button").click(function() {
    if (this.id == '1btn') {
        one.style.display = 'block'
        two.style.display = 'none'
        three.style.display = 'none'
        four.style.display = 'none'
        five.style.display = 'none'
        six.style.display = 'none'
    };
    if (this.id == '2btn') {
        one.style.display = 'none'
        two.style.display = 'block'
        three.style.display = 'none'
        four.style.display = 'none'
        five.style.display = 'none'
        six.style.display = 'none'
    };
    if (this.id == '3btn') {
        one.style.display = 'none'
        two.style.display = 'none'
        three.style.display = 'block'
        four.style.display = 'none'
        five.style.display = 'none'
        six.style.display = 'none'
    };
    if (this.id == '4btn') {
        one.style.display = 'none'
        two.style.display = 'none'
        three.style.display = 'none'
        four.style.display = 'block'
        five.style.display = 'none'
        six.style.display = 'none'
    };
    if (this.id == '5btn') {
        one.style.display = 'none'
        two.style.display = 'none'
        three.style.display = 'none'
        four.style.display = 'none'
        five.style.display = 'block'
        six.style.display = 'none'
    };
    if (this.id == '6btn') {
        one.style.display = 'none'
        two.style.display = 'none'
        three.style.display = 'none'
        four.style.display = 'none'
        five.style.display = 'none'
        six.style.display = 'block'
    };

});


var first = document.getElementById('2014')
var second = document.getElementById('2015')
var third = document.getElementById('2016')

first.style.display = 'block'
second.style.display = 'none'
third.style.display = 'none'


$("button").click(function() {
    if (this.id == 'abtn') {
        first.style.display = 'block'
        second.style.display = 'none'
        third.style.display = 'none'
    };
    if (this.id == 'bbtn') {
        first.style.display = 'none'
        second.style.display = 'block'
        third.style.display = 'none'
    };
    if (this.id == 'cbtn') {
        first.style.display = 'none'
        second.style.display = 'none'
        third.style.display = 'block'
    };
});

// The toggle button
$(function() {
    var showAnswer = function() {
        $('error').addClass('answer');
        $('correction').addClass('answer');
    }
    var hideAnswer = function() {
        $('error').removeClass('answer');
        $('correction').removeClass('answer');
    }
    var isAnswerShown = false;
    var toggleAnswer = function() {
        if (isAnswerShown) {
            hideAnswer();
            isAnswerShown = false;
        } else {
            showAnswer();
            isAnswerShown = true;
        }
    }
    $('#toggle').click(toggleAnswer);
})