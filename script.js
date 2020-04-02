// create the global variables
let dayHours = [];
let moment = moment()

// Display the current date at the top of the calendar
function currentDay() {
    // let currentDate = new Date().format("MMMM DD YYYY, h:mm:ss a");
    let currentDate = moment().format("MMMM DD YYYY, h:mm:ss a");
    $("#currentDay").html(currentDate);
}
currentDay()

// Display timeblocks for standard business hours, input space and save button
for (let hour = 9; hour < 18; hour++) {
    dayHours.push(hour);
    let $div = $("<div>").addClass(`row time-block data-time=${hour}`);
    $(".container").append($div);

    let $divColHour = $("<div>").addClass(`col-sm col-md-2 ${hour}`)
    $div.append($divColHour);
    let $pTag = $("<p>").text(hour);
    $divColHour.append($pTag);

    let $divColinput = $("<div>").addClass(`col-sm col-md-10 d-flex dayInput`);
    $div.append($divColinput);

    let $divInput = $("<div>").addClass(`input-group-append`);
    $divColinput.append($divInput);

    let $textArea = $("<textarea>").addClass(`form-control text-area`);
    $divInput.append($textArea);

    let $divBtn = $("<div>").addClass(`input-group-append`);
    $divColinput.append($divBtn);

    let $saveBtn = $("<button>").addClass(`save-button d-flex justify-center align-center`);
    $divBtn.append($saveBtn);

    let $icon = $("<i>").addClass(`far fa-save fa-2x save-icon`);
    $saveBtn.append($icon);

}

// create a function to change the color of the input space according to the time of the day: past, present or future
// when the user click on the save button for that time block the text is saved in local storage
// when user refresh the page the saved event persist

