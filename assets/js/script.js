$(function () {

var currentDay = dayjs();
var currentHour = dayjs().hour();
var currentDayEl=$("#currentDay");
var saveBtnEl = $(".saveBtn");
currentDate.text(currentDate.format("dddd, MMM DD"));

for(i=9; i < 18; i++) {

  parentId = $("hour-"+i)
  textArea = parentId.children("textarea");
  var loadEvent = localStorage.getitem("hour-"+i)
  textArea.val(loadEvent)
  if(i === currentHour) {
    textArea.addClass("present")
  } else if (i < currentHour) {
    textArea.addClass("past") 
  } else {
    textArea.addClass("future")
  }
  }
  



    console.log("~all elements are now loaded~");
  });
  