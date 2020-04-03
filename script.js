// // create the global variables
let dayHours = [];
let hour;

let dayTask = {};

// let moment = moment().hour();

// Display the current date at the top of the calendar
function currentDay() {
    let currentDate = moment().format("LLLL");
    $("#currentDay").html(currentDate);
}
currentDay()

// Display timeblocks for standard business hours, input space and save button

function timeBlocls(){

for (let hour = 9; hour < 18; hour++) {
    dayHours.push(hour);
    
    console.log(hour);

    // $(".dayHour").text(hour + "am") {
        if(hour <= 12){
            $(".dayHour").text(hour + " am");

        } else {
            $(".dayHour").text(hour + " pm");
        }
    }
    // adding the timeblocks in the JS file
    // let $div = $("<div>").addClass('input-group time-block row ').attr('data-time', hour);
    // $div.text(hour);
    // $(".container").append($div);
    
    // let $textArea = $("<textarea>").addClass(`form-control text-area description`);
    // $div.append($textArea);

    // let $saveBtn = $("<button>").addClass(`btn btn-outline-secondary saveBtn`);
    // $div.append($saveBtn);
}

function currentTime() {
        let currentTime = moment().hour();
        scheduleHour = parseInt(hour);
        
    if(scheduleHour === currentTime){
        $(this).find('textarea').addClass('present');

        console.log("Hello");
    }else if (scheduleHour < currentTime) {
        $(this).find('textarea').addClass('past');
        
        console.log("bye");
    } else {
        $(this).find('textarea').addClass('future');
        console.log("pause")
    }
        console.log(currentTime);
}

currentTime()

timeBlocls();

setInterval(currentDay, 1000);

// when the user click on the save button for that time block the text is saved in local storage (event listener)
$('.saveBtn').on("click", function(e){
    e.preventDefault();
    // eventlistener to capture what the user typed
    
    const inputText = $('.description').val().trim();
    console.log(inputText);
    if(inputText === ""){
        return;
    }

    storeInput()
})


// store what the user stored in local sotarge (key: hour value: user input); (for form=use .val - 
function storeInput(){
    localStorage.setItem('scheduleInput', JASON.stringify(dayTask));
}

// create a function to change the color of the input space according to the time of the day: past, present or future

// when user refresh the page the saved event