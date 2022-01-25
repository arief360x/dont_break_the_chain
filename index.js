let month= ["January", "February","March", "April", "May","June", "July", "August", "September", "October", "November", "December"];

//Get HTML month tag 1-12
function getHtmlMonth(){
     //Return the month's index
     var calendar_month = document.getElementById("current_month").textContent;
     var index = month.findIndex(month => month === calendar_month);
     console.log(calendar_month, index);
     return index;
}

getHtmlMonth();

//Get the day of the specified year, month and index
function getDay(year, month, day){
    var date = new Date();
    date.setFullYear(year, month, day);
    console.log(date);

    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    
    var firstDayIndex = firstDay.getDay();
    return firstDayIndex;
}

getDay(2022, 0, 28);

//Return the last day of the month tag
function getLastDay(){
    var date = new Date();
    date.setFullYear(2022, getHtmlMonth(), 1);

    var lastDay = new Date(date.getFullYear(), getHtmlMonth(), 0);

    var lastDayIndex = lastDay.getDate();
    console.table("last day " + lastDayIndex);
}

getLastDay();

function getToday(){
    var today = new Date();
    var dd =  today.getDate();
    console.log("Today is " + dd);
}

// index can be any number from 1 to 7
// function sets the start of the calendar accordingly

function setFirstDay(index){
    document.getElementById("calendar--first-day").style.gridColumnStart = index + 1;
    console.log("First day is " + "works");
}

// function adds styling to buttons from given index

function removeDays(lastDay) {
    let calendarDays = document.getElementsByClassName("calendar--day");
    for (let i = lastDay; i <= 30; i++) {
        calendarDays[i].style.display = "none";
        console.log("removeDays work");
    }
}


setFirstDay(getFirstDay());

removeDays(25);



