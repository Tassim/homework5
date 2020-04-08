// open the browser see date and time on the top
function currentDay() {
    let currentDate = moment().format("LLLL");
    $("#currentDay").html(currentDate);
}
currentDay()

// time at the page refreshes clock every 10 seconds
setInterval(currentDay, 1000);

// when refresh the page we can still see the previous input on the page
function getTasks(){
  $('[data-time=9]').siblings("textarea").val(localStorage.getItem('9'));
  $('[data-time=10]').siblings("textarea").val(localStorage.getItem('10'));
  $('[data-time=11]').siblings("textarea").val(localStorage.getItem('11'));
  $('[data-time=12]').siblings("textarea").val(localStorage.getItem('12'));
  $('[data-time=13]').siblings("textarea").val(localStorage.getItem('13'));
  $('[data-time=14]').siblings("textarea").val(localStorage.getItem('14'));
  $('[data-time=15]').siblings("textarea").val(localStorage.getItem('15'));
  $('[data-time=16]').siblings("textarea").val(localStorage.getItem('16'));
  $('[data-time=17]').siblings("textarea").val(localStorage.getItem('17'));
}

getTasks();

// the text input bar is colored based in indication whether it is past, present and future
$.each($('.time-block'), function() {
    let dateHour = parseInt($(this).find('[data-time]').attr('data-time'));
    console.log(dateHour);
    let currentTime = moment().hours();

if(dateHour === currentTime){
    $(this).find('textarea').addClass('present');
}else if (dateHour < currentTime) {
    $(this).find('textarea').addClass('past');
} else {
    $(this).find('textarea').addClass('future');
}
}) 

// when save button is clicked the input is stored in local storage according to the schedule hour
$("button").on('click', function(e) {
    e.preventDefault();

    let timeTask = $(this).parent().siblings('[data-time]').attr('data-time');
    let $inputTask = $(this).parent().siblings('textarea').val();

    localStorage.setItem(timeTask, $inputTask);
})
