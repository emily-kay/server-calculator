console.log('js works');

$(document).ready(onReady);

function onReady(){
    $('#additionButton').on('click', addHandler)
    $('#subtractionButton').on('click', subHandler)
    $('#multiplicationButton').on('click', multiplyHandler)
    $('#divisionButton').on('click', divideHandler)
    $('#clearButton').on('click', clearFields)
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
        $('#listOfProblems').empty();
        console.log(response);
        getAllProblems();
    })
}//end addHandler

function subHandler(){
    console.log('Sub Clicked');
    let newMath = {
        mathArray:[
        $('#numberOne').val(),
        $('#numberTwo').val()
    ]};
    console.log(newMath);
    $.ajax({
        method: 'POST',
        url: '/subtraction',
        data: newMath
    })//end .ajax
    .then(function(response){
        $('#listOfProblems').empty();
        console.log(response);
        getAllProblems();
    })
}//end subHandler

function multiplyHandler(){
    console.log('Mult Clicked');
    let newMath = {
        mathArray:[
        $('#numberOne').val(),
        $('#numberTwo').val()
    ]};
    console.log(newMath);
    $.ajax({
        method: 'POST',
        url: '/multiplication',
        data: newMath
    })//end .ajax
    .then(function(response){
        $('#listOfProblems').empty();
        console.log(response);
        getAllProblems();
    })
}//end multiplyHandler

function divideHandler(){
    console.log('Div Clicked');
    let newMath = {
        mathArray:[
        $('#numberOne').val(),
        $('#numberTwo').val()
    ]};
    console.log(newMath);
    $.ajax({
        method: 'POST',
        url: '/division',
        data: newMath
    })//end .ajax
    .then(function(response){
        $('#listOfProblems').empty();
        console.log(response);
        getAllProblems();
    })
}//end divideHandler

function getAllProblems(){
    $.ajax({
        method: 'GET',
        url: '/history'
    })//end ajax
    .then(function (response){
        console.log(response);
        response.forEach((problem) => {
            $('#listOfProblems').prepend(
                `<p>${problem.x}${problem.type}${problem.y}=${problem.result}</p>`
            )
        });
    });//end .then
}

function clearFields (){
    $('input').val('');
}