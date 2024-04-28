// Wraps all code in a function that executes once the document is finished loading, preventing certain errors

$(function () {

  // variables that determine current day and hour
var currentDay = dayjs();
var currentHour = dayjs().hour();

// displays and formats the current day
var currentDayEl=$("#currentDay");
var saveBtnEl = $(".saveBtn");
currentDayEl.text(currentDay.format("dddd, MMM DD"));

// 'for loop' that goes through the hours of the day
for(i=9; i < 18; i++) {
  parentId = $("#hour-"+i);
  textArea = parentId.find("textarea"); // .find should select the correct element more reliably than .children
// loads saved events from local storage

  var loadEvent = localStorage.getItem("hour-"+i);
    textArea.val(loadEvent);

  // changes CSS classes based on the hour for "present", "past", and "future" 
  if(i === currentHour) {
    textArea.addClass("present");
  } else if (i < currentHour) {
    textArea.addClass("past") ;
  } else {
    textArea.addClass("future");
  } 
}

// event listener for the 'save' feature
$(".container-lg").on("click", ".saveBtn", function(event) {
  var button = $(this);  
  var textAreaEl = button.siblings("textarea");  
  var parentId = button.parent().attr("id");  
  localStorage.setItem(parentId, textAreaEl.val()); 
});

// I added this just to confirm that everything is fully loaded :)
console.log("~all elements are now loaded~");
});
  