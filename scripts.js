
$(document).ready(function () {}
    
var resText = '';

function clearAll() {
    $("#result").val('0');
    resText = '';
}

$('.press').click(function () {
    if ($('#result').val() === '0' ||
        resText.slice(-1) === '+' ||
        resText.slice(-1) === '-' ||
        resText.slice(-1) === '/' ||
        resText.slice(-1) === '*' ||
        resText === '') {

        $('#result').val("");
    }

    var number = $(this).data('number');

    $('#result').val(function () {
        resText += number;
        console.log(resText);
        return this.value + number;
    });
});

$('.sign').click(function () {
    if ($('#result').val().slice(-1) === '+' || $('#result').val().slice(-1) === '-' || $('#result').val().slice(-1) === '/' || $('#result').val().slice(-1) === '*') {

    } else {
        var sign = $(this).data('sign');

        $('#result').val(function () {
            resText += sign;
            console.log(sign);
            return this.value;
        });
    }


});

function calc() {
    if (resText.slice(-1) !== '+' &&
        resText.slice(-1) !== '-' &&
        resText.slice(-1) !== '/' &&
        resText.slice(-1) !== '*') {
        console.log(resText);
        console.log(resText.slice(-1));
        var numbers = resText;

        console.log("result: ", eval(resText));
        $('#result').val(eval(resText));
        resText = eval(resText);
    }

}

/*
function one() {
    console.log(typeof $('#result').val());
    if ($('#result').val() === '0') {
        console.log($('#result').val());
        $('#result').val("");
    }
    $("#result").val(function () {
        return this.value + '1';
    });
}

function two() {
    $("#result").append('2');
}

function three() {
    $("#result").append('2');
}*/