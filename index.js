// Array of months of the year
// from 1 to taday-1
let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//Sets global variables for future use
let calendarMonth = "";
let calendarYear = "";
let counter = "";
// database example
let monthStatusArray = ["fail","success","success","fail","success","success","success","success","success","fail","success","success","success","success"];

function getToday(){
    var today = new Date();
    var day = today.getDate();
    console.log("🚀 ~ file: index.js ~ line 28 ~ getToday ~ day", day)
    return day;
}

// gets current month date returns month as a string
function getThisMonth(){
    var today = new Date();
    var monthIndex = today.getMonth();
    var month = monthArray[monthIndex];
    console.log("🚀 ~ file: index.js ~ line 38 ~ getThisMonth ~ month", month)
    return month;
}
    

// gets today's year in YYYY format
function getThisCalendarYear(){
    var today = new Date();
    var year = (today.getYear()+1900);
    console.log("🚀 ~ file: index.js ~ line 45 ~ getThisCalendarYear ~ year", year)
    return year;
}


//Returns index (0-11) given a month
function getMonthIndex(month) {
    var index = monthArray.findIndex(monthArray => monthArray === month);
    console.log("🚀 ~ file: index.js ~ line 53 ~ getMonthIndex ~ index", index)
    return index;
}

//Return the last day of the month(month argument start with 0), return real date
function getLastDay(year, month) {
    var date = new Date();
    date.setFullYear(year, month, 1);
    var lastDay = new Date(date.getFullYear(), (date.getMonth() + 1), 0);
    lastDay = lastDay.getDate();
    console.log("🚀 ~ file: index.js ~ line 63 ~ getLastDay ~ lastDay", lastDay)
    return lastDay;
}

// updates header displayed given a month (string) and a year 
function updateHeader(month, year) {
    document.getElementById("current-month-display").innerText = month;
    console.log("🚀 ~ file: index.js ~ line 69 ~ updateHeader ~ month", month)
    document.getElementById("current-year-display").innerText = year;
    console.log("🚀 ~ file: index.js ~ line 69 ~ updateHeader ~ year", year)   
}

//Return the day's index(start from 0) with the argument year = normal, month = start from 0, day = normal
function getDayIndex(year, monthIndex, day) {
    var full_date = new Date();
    full_date.setFullYear(year, monthIndex, day);
    res = full_date.getDay();
    console.log("🚀 ~ file: index.js ~ line 83 ~ getDayIndex ~ res", res) 
    return res;
}

// given an first day and last day 
// draws days with numbers between first and last
// special style draws main calendars
function addDaysToCalendar (firstDay, lastDay, style) {
    
    // function adds HTML element to addElementToScreen before ElementID
    // gets ElementID as reference point and HTML text is added before anchor
    function addElementToScreen (ElementID, HTMLText) {
        document.getElementById(ElementID).insertAdjacentHTML("beforeend",HTMLText);
        console.log("🚀 ~ file: index.js ~ line 94 ~ addElementToScreen ~ ElementID", ElementID)
    }
    // for special case
    // paints this month's calendar 
    if (style == "special") {
        for (let i = firstDay; i <= lastDay ; i++) {
            let htmlText = "";
            // if array has a success status adds completed style
            if (monthStatusArray[i-1]=="success") {
                var HTMLText = '<a><section class="calendar-text calendar-days-completed">' + i + '</section></a>';
            }
            // if array has a success status adds notcompleted style
            else if (monthStatusArray[i-1]=="fail") {
                var HTMLText = '<a><section class="calendar-text calendar-days-notcompleted">' + i + '</section></a>';
            }
            // if array has a success status adds notcompleted style
            else if (calendarYear==getThisCalendarYear() && calendarMonth==getThisMonth() && i==getToday()) {
                var HTMLText = '<a><section class="calendar-text calendar-days-enabled" onclick="updateStatusArray()">' + i + '</section></a>';
            }
            // else it creates a normal days
            else {
                var HTMLText = '<a><section class="calendar-text">' + i + '</section></a>';  
            }
            addElementToScreen("calendar-container",HTMLText);
            console.log("🚀 ~ file: index.js ~ line 103 ~ addDaysToCalendar ~ i", i)
        }
    }

    else {
    // prints rest of elements up to lastDay given
    for (let i = firstDay; i <= lastDay ; i++) {
        let HTMLText = '<a><section class="calendar-text '+ style +'">' + i + '</section></a>';
        addElementToScreen("calendar-container",HTMLText);
        console.log("🚀 ~ file: index.js ~ line 103 ~ addDaysToCalendar ~ i", i)
        }
    }    
}

// adds days of calendar
// draws previous, current and next month
function drawCalendar(){
    
    // variables used to drawCalendar();
    //Last day of current month (1-31)
    let calendarLastDay = getLastDay(calendarYear,getMonthIndex(calendarMonth));
    console.log("🚀 ~ file: index.js ~ line 12 ~ calendarLastDay", calendarLastDay)
    // gets current month index (0-11)
    let calendarMonthIndex = getMonthIndex(calendarMonth);
    console.log("🚀 ~ file: index.js ~ line 15 ~ calendarMonthIndex", calendarMonthIndex)
    // first day of the week index (0-6)
    let firstDayMonthIndex = getDayIndex(calendarYear, calendarMonthIndex,1);
    console.log("🚀 ~ file: index.js ~ line 18 ~ firstDayMonthIndex", firstDayMonthIndex)
    // get last day of previous month (1-31)
    let lastDayPreviousMonth = getLastDay(calendarYear,calendarMonthIndex-1);
    console.log("🚀 ~ file: index.js ~ line 21 ~ lastDayPreviousMonth", lastDayPreviousMonth)
    // get current month last day index (0-6)
    let monthLastDayIndex = getDayIndex(calendarYear, calendarMonthIndex,calendarLastDay);
    console.log("🚀 ~ file: index.js ~ line 24 ~ monthLastDayIndex", monthLastDayIndex)
    document.getElementById("calendar-container").innerText = "";

    // algorithm for calculating month days
    // adds days for previous month
    addDaysToCalendar(lastDayPreviousMonth-(firstDayMonthIndex-1),lastDayPreviousMonth,"calendar-days-disabled");
 
    // adds days for current month
    // calculates the days to draw given array monthStatusArray
    function colorDays(array){
        addDaysToCalendar(1,calendarLastDay,"special")
    }
    colorDays(monthStatusArray)
    
    // adds days for next month
    // uses index of current month last date and gets remaning days
    addDaysToCalendar(1,(42-calendarLastDay-firstDayMonthIndex),"calendar-days-disabled");
    
    // VARIABLES >>> FOR DEBUGGING PURPOSES
    let variables = "Month: <b>" + calendarMonth + "</b><br>Year: <b>" + calendarYear + "</b><br> Last day: <b>" + calendarLastDay + "</b><br> Month Index (0-11): <b>" + calendarMonthIndex + "</b><br> First day index (0-6): <b>" + firstDayMonthIndex + "</b><br> Last day index (0-6): <b>" + monthLastDayIndex + "</b><br> Previous month last day:  <b>" + lastDayPreviousMonth + "</b><p>"; 
    document.getElementById("display-variables").insertAdjacentHTML("beforeend", variables);
    console.log("🚀 ~ file: index.js ~ line 117 ~ displayVariables ~ variables", [calendarMonth,calendarYear,calendarLastDay,calendarMonthIndex,firstDayMonthIndex,monthLastDayIndex,lastDayPreviousMonth]);
}

// switches current month (0-11) and year YYYY and updates variables
function updateCalendar(indexMonth,year){
    if (indexMonth > 11){
        indexMonth = 0;
        year++;
        
    }
    else if (indexMonth < 0){
        indexMonth = 11;
        year = year - 1;
    }
    // sets new month as global variable
    calendarMonth = monthArray[indexMonth];
    // updates display month
    calendarYear = year;
    updateHeader(calendarMonth,calendarYear);
    drawCalendar();
}

// gets current month and year
// updates header display
// draws calendar
function initialSetup (){
    calendarMonth = getThisMonth();
    calendarYear = getThisCalendarYear();
    updateHeader(calendarMonth,calendarYear);
    drawCalendar();
}

// initial setup using date provided by device
initialSetup();

// updates calendar to display next month
function nextMonth(){
    monthStatusArray=[];
    updateCalendar(getMonthIndex(calendarMonth)+1,calendarYear); 
}

// updates calendar to display previous month
function previousMonth(){
    monthStatusArray=[];
    updateCalendar(getMonthIndex(calendarMonth)-1,calendarYear);
}

// adds a success value to array
// pushes new array to database and updates calendar
function updateStatusArray(){
    monthStatusArray.push("success");
    drawCalendar();
}
