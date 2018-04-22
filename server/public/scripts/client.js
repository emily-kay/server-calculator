console.log('js works');

$(document).ready(onReady);

function onReady(){
    $('#additionButton').on('click', clickHandler)
    $('#subtractionButton').on('click', clickHandler)
    $('#multiplicationButton').on('click', clickHandler)
    $('#divisionButton').on('click', clickHandler)

}

function clickHandler(){
    console.log('Button Clicked');
    
}