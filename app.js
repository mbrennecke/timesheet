$(document).ready(function(){

$("#submit").on("click", function(event) {
    event.preventDefault();

    var name = $("#name").val();
    var role = $("#role").val();
    var date = $("#date").val();
    var rate = $("#rate").val();
    var months = "";
    var billed = "";

    var newRow = "<tr><td>" + name + "</td><td>" + role + "</td><td>" + date + "</td><td>" + months + "</td><td>" + rate + "</td><td>" + billed + "</td></tr>";

    $("#current").append(newRow);
})






})






