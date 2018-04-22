console.log('js works');

$(document).ready(onReady);

function onReady(){
    $('#additionButton').on('click', addHandler)
    $('#subtractionButton').on('click', subHandler)
    $('#multiplicationButton').on('click', multiplyHandler)
    $('#divisionButton').on('click', divideHandler)

}

function addHandler(){
    console.log('Add Clicked');
    let newMath = {
        mathArray:[
        $('#numberOne').val(),
        $('#numberTwo').val()
    ]};
    console.log(newMath);
    
    $.ajax({
        method: 'POST',
        url: '/addition',
        data: newMath
    })//end .ajax
    .then(function(response){
        console.log(response);
    })
}//end addHandler

function subHandler(){
    console.log('Sub Clicked');
    let newMath = [
        $('#numberOne').val(),
        $('#numberTwo').val()
    ];
    $.ajax({
        method: 'POST',
        url: '/subtraction',
        data: newMath
    })//end .ajax
    .then(function(response){
        console.log(response);
    })
}//end subHandler

function multiplyHandler(){
    console.log('Mult Clicked');
    let newMath = [
        $('#numberOne').val(),
        $('#numberTwo').val()
    ];
    $.ajax({
        method: 'POST',
        url: '/multiplication',
        data: newMath
    })//end .ajax
    .then(function(response){
        console.log(response);
    })
}//end multiplyHandler

function divideHandler(){
    console.log('Div Clicked');
    let newMath = [
        $('#numberOne').val(),
        $('#numberTwo').val()
    ];
    $.ajax({
        method: 'POST',
        url: '/division',
        data: newMath
    })//end .ajax
    .then(function(response){
        console.log(response);
    })
}//end divideHandler


//FIX

function newMath () {

};

