$(document).ready(function(){

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDTGzlg7HZGd7clegIYeCMicx5SGQlyqmk",
    authDomain: "timesheet-df431.firebaseapp.com",
    databaseURL: "https://timesheet-df431.firebaseio.com",
    projectId: "timesheet-df431",
    storageBucket: "timesheet-df431.appspot.com",
    messagingSenderId: "838836693904"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

$("#submitBtn").on("click", function(event) {
    event.preventDefault();

    var name = $("#name").val();
    var role = $("#role").val();
    var date = $("#date").val();
    var rate = $("#rate").val();
    var months = "";
    var billed = "";

    database.ref().push({
        name: name,
        role: role,
        startDate: date,
        rate: rate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP,
    });

    var newRow = "<tr><td>" + name + "</td><td>" + role + "</td><td>" + date + "</td><td>" + months + "</td><td>" + rate + "</td><td>" + billed + "</td></tr>";

    $("#current").append(newRow);
})

database.ref().on("child_added", function(){
    $("#current").empty();
    for (vari = 0; i < database.numChildren(); i++) {
        
    }
})




})






