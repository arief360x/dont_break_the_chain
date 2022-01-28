// Initial setup with current month
// setUpCalendarHeader(calendarMonth, calendarYear);
setUpCalendarHeader("January", "2022");


// Global Variables
//Months array
let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//Global variable for month from HTML tag
let calendarMonth = document.getElementById("calendar-month");
//Global variable for year from HTML tag
let calendarYear = document.getElementById("calendar-year");


//Last day of current month (1-31)
let calendarLastDay = getLastDay(calendarYear,getHtmlMonthIndex(calendarMonth));
// gets current month index (0-11)
let currentMonthIndex = getHtmlMonthIndex(calendarMonth);
// first day of the week index (0-6)
let firstDayMonthIndex = getDayIndex(calendarYear, currentMonthIndex,1);
// get last day of previous month (1-31)
let lastDayPreviousMonth = getLastDay(calendarYear,currentMonthIndex-1);
// get current month last day index (0-6)
let currentMonthLastDayIndex = getDayIndex(calendarYear, currentMonthIndex,calendarLastDay);
// gets today's day
let today = getToday();
// used to keey track of increase
let counter = 1;

// gets today's date and returns the day
function getToday(){
    var today = new Date();
    var dd = today.getDate();
    return dd;
}

// gets current month date ruturns index (0-11)
function getMonth(){
    var today = new Date();
    var month = today.getMonth();
    return month;
}


// gets today's year in 2000 format
function getYear(){
    var today = new Date();
    var year = (today.getYear()+1900);
    return year;
}


//Get HTML month tag, index start from 0
function getHtmlMonthIndex(month) {
    var index = monthArray.findIndex(monthArray => monthArray === month);
    //console.log("getHtmlMonthIndex " + index)
    return index;
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

//Return the day's index(start from 0) with the argument year = normal, month = start from 0, day = normal
function getDayIndex(year, monthIndex, day) {
    var full_date = new Date();
    full_date.setFullYear(year, monthIndex, day);
    res = full_date.getDay();
    console.log("getDay " + res);
    return res;
}


// function adds HTML element to addElementToScreen before ElementID
// gets ElementID as reference point and HTML text is added before anchor
function addElementToScreen (ElementID, HTMLText) {
    document.getElementById(ElementID).insertAdjacentHTML("beforeend",HTMLText);
    console.log("Added element to", ElementID);
}

// given an first day and last day 
// draws days with numbers between first and last
function addDaysToCalendar (firstDay, lastDay) {
    // prints rest of elements up to lastDay given
    for (let i = firstDay; i <= lastDay ; i++) {
        let HTMLText = '<a><section class="calendar-text">' + "" + i + '</section></a>';
        addElementToScreen("calendar-container",HTMLText);
        console.log("calendar day added");
    }
}


// Display variables
function displayVariables(){
    let variables = "<b><br><br>Variables: </b> <br> <br> Month: <b>" + calendarMonth + "</b><br>Year: <b>" + calendarYear + "</b><br> Last day: <b>" + calendarLastDay + "</b><br> Month (0-11): <b>" + currentMonthIndex + "</b><br> First day index (0-6): <b>" + firstDayMonthIndex + "</b><br> Last day index (0-6): <b>" + currentMonthLastDayIndex + "</b><br> Today: <b>" + today + "</b><br> Previous month last day:  <b>" + lastDayPreviousMonth + "</b>"; 
    document.getElementById("display-variables").insertAdjacentHTML("beforeend", variables);
}

// adds days of calendar
// draws previous, current and next month
function drawCalendar(){
    // adds days for previous month
    addDaysToCalendar(lastDayPreviousMonth-(firstDayMonthIndex-1),lastDayPreviousMonth);
    // adds days for current month
    addDaysToCalendar(1,calendarLastDay);
    // adds days for next month
    // uses index of current month last date and gets remaning days
    addDaysToCalendar(1,Math.abs((currentMonthLastDayIndex)-6));
}

// sets header date to month and year date
function setUpCalendarHeader(month, year) {
    document.getElementById("current-month").innerHTML = month;
    document.getElementById("current-year").innerHTML = year;
}



// main function for drawing calendor
// drawCalendar();
displayVariables();
drawCalendar();

// moves to next month
function nextMonth(){
    
    document.getElementById("calendar-container").innerHTML = "";
    calendarMonth = monthArray[getMonth()+ counter] 
    if (counter == 11){
        counter = 0;
    }
    else {
        counter++;
    }
    setUpCalendarHeader(calendarMonth, calendarYear);
    drawCalendar();
    displayVariables();

}

// moves to previous month
function previousMonth(){
    
    document.getElementById("current-month").innerHTML = "";
    calendarMonth = monthArray[getMonth()+ counter] 
    counter++;
    drawCalendar();
    setUpCalendarHeader(calendarMonth, "2022");
    displayVariables();

}

// nextMonth()
// nextMonth()

// can add a class with just spaces
// to disable the calendar