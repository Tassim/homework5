// create the global variables
let dayHours = [];

// Display the current date at the top of the calendar
function currentDay() {
    // let currentDate = new Date().format("MMMM DD YYYY, h:mm:ss a");
    let currentDate = new Date();
    $("#currentDay").html(currentDate);
}
currentDay()

// Display timeblocks for standard business hours, input space and save button
for (let hour = 9; hour < 18; hour++) {
    dayHours.push(hour);
    let $div = $("<div>").attr("class", `row time-block data-time=${hour}`);
    $(".container").append($div);

    let $divColHour = $("<div>").attr("class", `col-sm col-md-2 ${hour}`)
    $div.append($divColHour);
    let $pTag = $("<p>").text(hour);
    $divColHour.append($pTag);

    let $divColinput = $("<div>").attr("class", `col-sm col-md-10 d-flex dayInput`);
    $div.append($divColinput);

    let $divInput = $("<div>").attr("class", `input-group-append`);
    $divColinput.append($divInput);
    
}
