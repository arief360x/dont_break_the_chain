// Global Variables
//Months array
let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//Global variable for month from HTML tag
let calendarMonth = document.getElementById("current_month").textContent;
//Global variable for year from HTML tag
let calendarYear = document.getElementById("current_year").textContent;
//Last day of current month
let calendarLastDay = getLastDay(calendarYear,getHtmlMonthIndex(calendarMonth));
// gets current month index (0-11)
let currentMonthIndex = getHtmlMonthIndex(calendarMonth);
// first day of the week index (0-6)
let firstDayMonthIndex = getDayIndex(calendarYear, currentMonthIndex,1);

//Get HTML month tag, index start from 0
function getHtmlMonthIndex(month) {
    var index = monthArray.findIndex(monthArray => monthArray === month);
    //console.log("getHtmlMonthIndex " + index)
    return index;
}

//Return the day's index(start from 0) with the argument year = normal, month = start from 0, day = normal
function getDayIndex(year, monthIndex, day) {
    var full_date = new Date();
    full_date.setFullYear(year, monthIndex, day);
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

// gets today's date and returns the day
function getToday(){
    var today = new Date();
    var dd = today.getDate();
    return dd;
}

// function adds HTML element to addElementToScreen before ElementID
// gets ElementID as reference point and HTML text is added before anchor
function addElementToScreen (ElementID, HTMLText, beforeAfter) {
    document.getElementById(ElementID).insertAdjacentHTML(beforeAfter,HTMLText);
    console.log("Added element to", ElementID);
}

// given an first day and last day 
// draws days with numbers between first and last
function addDaysToCalendar (firstDay, lastDay) {
    // prints rest of elements up to lastDay given
    for (let i = firstDay; i <= lastDay ; i++) {
        let HTMLText = '<a><section class="calendar-text">'+ i +'</section></a>';
        addElementToScreen("calendar-container",HTMLText,"beforeend");
        console.log("calendar day added");
    }
}

addDaysToCalendar (1,calendarLastDay,getDayIndex(calendarYear,getHtmlMonthIndex(calendarMonth),1));

// Display variables
function displayVariables(){
    let variables = "Variables: " + calendarMonth + ", " + calendarYear + ", " + calendarLastDay + ", " + currentMonthIndex + ", " + firstDayMonthIndex; 
    document.getElementById("display").innerHTML = variables;

}

displayVariables();