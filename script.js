// Global variables
const arrayHours = [];
const index = 0;
const dateHour = $('data-time').val();
const $inputTask = $('.description').text();

console.log(dateHour);
console.log($inputTask);

// open the browser see date and time on the top

function currentDay() {
    let currentDate = moment().format("LLLL");
    $("#currentDay").html(currentDate);
}
currentDay()

// time at the page refreshes clock every 10 seconds
setInterval(currentDay, 1000);

// the text input bar is colored based in indication whether it is past, present and future
$.each($('.time-block'), function() {

    let currentTime = moment().format();

if(dateHour === currentTime){
    $(this).find('textarea').addClass('present');
}else if (dateHour < currentTime) {
    $(this).find('textarea').addClass('past');
} else {
    $(this).find('textarea').addClass('future');
}
}) 


$("button").on('click', function(e) {
    e.preventDefault();

    let timeTask = parseInt(dateHour);

    let taskLog = {
        time: timeTask,
        todo: $inputTask
    }

console.log(taskLog);

})



// see the schedule with input field and save button for each line by hour (9am to 5pm)
// input text in the text field
// if
// push the button save 
    // info get stored into local storage

// refresh the page and info still there
