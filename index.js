var today = new Date();
var htmld = document.getElementById("day");
var htmlm = document.getElementById("month");
var htmly = document.getElementById("year");

let months = ['Jan', 'Feb', 'March', 'April', 'May'];

var dd = String(today.getDate()).padStart(2, '0');
var mm = today.getMonth()
var yy = today.getFullYear();



function changeColor(){
    if(htmld == dd && true){
    }
    console.log(months[mm]);
}