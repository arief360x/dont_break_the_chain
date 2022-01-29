//Months array
let MONTH_ARRAY = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//Global variable for month from HTML tag
let CALENDAR_MONTH = document.getElementById("current_month").textContent;

//Global variable for year from HTML tag
let CALENDAR_YEAR = document.getElementById("current_year").textContent;

//Get HTML month tag, index start from 0
function getHtmlMonthIndex(month) {
    var index = MONTH_ARRAY.findIndex(MONTH_ARRAY => MONTH_ARRAY === month);
    //console.log("getHtmlMonthIndex " + index)
    return index;
}

//Return the day's index(start from 0) with the argument year = normal, month = start from 0, day = normal
function getDayIndex(year, month, day) {
    var full_date = new Date();
    full_date.setFullYear(year, month, day);
    res = full_date.getDay();
    console.log("getDay " + res);
    return res;
}

//Return the last day of the month(month argument start with 0), return real date
function getLastDay(year, month) {
    var date = new Date();
    date.setFullYear(year, month, 1);
    var lastDay = new Date(date.getFullYear(), (date.getMonth() + 1), 0);

    lastDay = lastDay.getDate();
    console.table("last day " + lastDay);
    return lastDay;
}

//getLastDay(2022,getHtmlMonthIndex(CALENDAR_MONTH));

function getToday(){
    var today = new Date();
    var dd = today.getDate();
    //console.log("Today is " + dd);
    return dd;
}
//getToday();
function getToday(){
    var today = new Date();
    var dd =  today.getDate();
    console.log("Today is " + dd);
}

// index can be any number from 1 to 7
// function sets the start of the calendar accordingly
// index should be added by 1
function setFirstDay(index){
    index++;
    document.getElementById("calendar-start").style.gridColumnStart = index;
    console.log("First day is " + "works");
}

// function adds styling to buttons from given index
function removeDays(lastDay) {
    const calendarDays = document.getElementsByClassName("calendar--day");
    for (let i = lastDay; i < 31; i++) {
        calendarDays[i].style.display = "none";
        console.log("removeDays work");
    }
}


// function adds HTML element to addElementToScreen before ElementID
// gets ElementID as reference point and HTML text is added before anchor
function addElementToScreen (ElementID, HTMLText) {
    document.getElementById(ElementID).insertAdjacentHTML("beforebegin",HTMLText);
    console.log("Added ", HTMLText, "to ", ElementID);
}


// given an first day and last day draws days with numbers between first and last
function addDaysToCalendar (firstDay, lastDay) {
    for (let i = firstDay; i <= lastDay ; i++) {
        let HTMLText = "<a>" + i + "</a>";
        addElementToScreen("calendar-end",HTMLText);
        console.log("print button works");
    }
} 

function main(){
    // calendar display function
    setFirstDay(getDayIndex(CALENDAR_YEAR,getHtmlMonthIndex(CALENDAR_MONTH),1));
    addDaysToCalendar (2,getLastDay(CALENDAR_YEAR,getHtmlMonthIndex(CALENDAR_MONTH,1)));
}


// gets date from input and returns YYYY-MM

function getDateInput(){
    let choosenMonth = document.querySelector('input[type="month"]');
    console.log("hello",choosenMonth);
    console.log(choosenMonth.value);
    return choosenMonth.value;
}

// removeDays(getLastDay(CALENDAR_YEAR, getHtmlMonthIndex(CALENDAR_MONTH)));

// switches month displayed for a given index (0-11)
function switchMonth(indexMonth){
    calendarMonth = MONTH_ARRAY[indexMonth];
    document.getElementById("current_month").innerHTML = calendarMonth;

}
main();
switchMonth(0);