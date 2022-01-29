//Months array
let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


//Sets global variables for future
let calendarMonth = "";
let calendarYear = "";
let counter = "";

// updates header displayed given a month and a year 
function updateDisplay(month, year) {
    document.getElementById("current-month-display").innerText = month;
    document.getElementById("current-year-display").innerText = year;
}


//Returns index (0-11) given a month
function getMonthIndex(month) {
    var index = monthArray.findIndex(monthArray => monthArray === month);
    //console.log("getMonthIndex " + index)
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

// gets today's date and returns the day
function getToday(){
    var today = new Date();
    var dd = today.getDate();
    return dd;
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
    setFirstDay(getDayIndex(calendarMonth,getMonthIndex(calendarMonth),1));
    addDaysToCalendar (2,getLastDay(calendarMonth,getMonthIndex(calendarMonth,1)));
}


// gets date from input and returns YYYY-MM

function getDateInput(){
    let choosenMonth = document.querySelector('input[type="month"]');
    console.log("hello",choosenMonth);
    console.log(choosenMonth.value);
    return choosenMonth.value;
}

removeDays(getLastDay(calendarMonth, getMonthIndex(calendarMonth)));

// switches current month (0-11) and year YYYY and updates variables
function switchMonth(indexMonth,year){
    
    // sets new month as global variable
    calendarMonth = monthArray[indexMonth];
    // updates display month
    calendarYear = year;
    updateDisplay(calendarMonth,calendarYear);
}

main();
switchMonth(5,2023);
