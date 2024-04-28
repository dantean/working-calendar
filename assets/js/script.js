$(function () {

var currentDay = dayjs();
var currentHour = dayjs().hour();
var currentDayEl=$("#currentDay");
var saveBtnEl = $(".saveBtn");
currentDayEl.text(currentDay.format("dddd, MMM DD"));

for(i=9; i < 18; i++) {
  parentId = $("#hour-"+i);
  textArea = parentId.find("textarea"); // .find should select the correct element more reliably than .children
  var loadEvent = localStorage.getItem("hour-"+i);

  textArea.val(loadEvent);
  if(i === currentHour) {
    textArea.addClass("present");
  } else if (i < currentHour) {
    textArea.addClass("past") ;
  } else {
    textArea.addClass("future");
  } 
}
$(".container-lg").on("click", ".saveBtn", function(event) {
  var button = $(this);  
  var textAreaEl = button.siblings("textarea");  
  var parentId = button.parent().attr("id");  
  localStorage.setItem(parentId, textAreaEl.val()); 
});

console.log("~all elements are now loaded~");
});
  