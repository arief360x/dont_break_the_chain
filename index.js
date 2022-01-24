var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yy = today.getFullYear();

setFirstDay(7);

// index can be any number from 1 to 7
// function sets the start of the calendar accordingly

function setFirstDay(index){
    document.getElementById("calendar--first-day").style.gridColumnStart = index;
    console.log("First day is " + "works");
}

