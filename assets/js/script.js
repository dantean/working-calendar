$(function () {

var currentDay = dayjs();
var currentHour = dayjs().hour();
var currentDayEl=$("#currentDay");
var saveBtnEl = $(".saveBtn");
currentDayEl.text(currentDay.format("dddd, MMM DD"));

for(i=9; i < 18; i++) {

  parentId = $("#hour-"+i)
  textArea = parentId.children("textarea");
  var loadEvent = localStorage.getItem("hour-"+i)
  textArea.val(loadEvent)
  if(i === currentHour) {
    textArea.addClass("present")
  } else if (i < currentHour) {
    textArea.addClass("past") 
  } else {
    textArea.addClass("future")
  } 
}

function saveEvent(event) {
  var currentClickEl = $(event.target)
  var parentId
  var textAreaEl

  if(currentClickEl.attr("class") === "fas fa-save") {

    textAreaEl = currentClickEl.parent().siblings("textarea")
    parentId = currentClickEl.parent().parent().attr("id")
  } else {

    textAreaEl = currentClickEl.siblings("textarea")
    parentId = currentClickEl.parent().attr("id")
  }
  localStorage.setItem(parentId, textAreaEl.val())
  }
  saveBtnEl.on("click", saveEvent)

    console.log("~all elements are now loaded~");
  });
  