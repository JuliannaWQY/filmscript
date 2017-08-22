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
    //console.log(this.id); // or alert($(this).attr('id'));
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

// function myFunction1() {
//     $
//     x =
//         if (one.style.display === 'none') {
//             one.style.display = 'block';
//             two.style.display = 'none'
//             three.style.display = 'none'
//             four.style.display = 'none'
//             five.style.display = 'none'
//             six.style.display = 'none'
//         }
// }

// function myFunction2() {
//     var x = document.getElementById('chart2');
//     if (x.style.display === 'none') {
//         x.style.display = 'block';
//         chart1.style.display = 'none';
//     }