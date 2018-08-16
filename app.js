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
    console.log(rate);
    var months = "";
    var billed = "";

    database.ref().push({
        name: name,
        role: role,
        startDate: date,
        rate: rate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP,
    });

})

database.ref().on("child_added", function(childSnapshot){

    var months = moment().diff(childSnapshot.val().startDate, "months");
    console.log(months, rate);
    var billed = (parseInt(months) * parseInt(childSnapshot.val().rate)).toLocaleString('en');
    console.log(billed);
    
    var newRow = "<tr><td>" + childSnapshot.val().name + "</td><td>" + childSnapshot.val().role + "</td><td>" + moment(childSnapshot.val().startDate).format("MM/DD/YYYY") + "</td><td>" + months + "</td><td>" + (childSnapshot.val().rate).toLocaleString('en') + "</td><td>" + billed + "</td></tr>";

    $("#current").append(newRow);
})




})






