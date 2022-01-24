let month= ["0", "January", "February","March", "April", "May","June", "July", "August", "September", "October", "November", "December"];

//Get HTML month tag 1-12
function getHtmlMonth(){
     //Return the month's index
     var calendar_month = document.getElementById("current_month").textContent;
     var index = month.findIndex(month => month === calendar_month);
     return index;
}

getHtmlMonth();

//Get the 1st day of the month tag
function getFirstDay(){
    var date = new Date();
    date.setFullYear(2022, getHtmlMonth(), 1);
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var firstDayIndex = firstDay.getDay();
    return firstDayIndex;
}

// index can be any number from 1 to 7
// function sets the start of the calendar accordingly

function setFirstDay(index){
    document.getElementById("calendar--first-day").style.gridColumnStart = index + 1;
    console.log("First day is " + "works");
}

setFirstDay(getFirstDay());