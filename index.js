var today = new Date();



let months = ['Jan', 'Feb', 'March', 'April', 'May'];

var dd = String(today.getDate()).padStart(2, '0');
var mm = today.getMonth()
var yy = today.getFullYear();

function getFirstDay(){
    var date = new Date();
    m = date.getMonth();

    var firstDay = new Date(date.getFullYear(), date.getMonth + 1, 1);

    var text_month = document.getElementById("try_month").textContent;
    
    console.log("Text month" + text_month);

    console.log("first day  " + firstDay);
}

setFirstDay(7);

// index can be any number from 1 to 7
// function sets the start of the calendar accordingly

function setFirstDay(index){
    document.getElementById("calendar--first-day").style.gridColumnStart = index;
    console.log("First day is " + "works");
}

