$(document).ready(submitForm());
/*
function person(rating, comment) {
    this.rating = rating;
    this.comment = comment;
}
*/
function submitForm() {
    console.log("opened script file");
}
function myFunction() {
    console.log("Hello myFunction()s")
    if (document.getElementById('up').checked) {
        console.log("UP");
    }
    if (document.getElementById('down').checked) {
        console.log("DOWN");
    }
    console.log(document.getElementById('textArea').value);
}



