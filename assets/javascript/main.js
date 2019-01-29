var config = {
  apiKey: "AIzaSyC3v8FS9NhOhS1OJLvOFMmdGC7zDvzyf9I",
  authDomain: "amystrainschedule.firebaseapp.com",
  databaseURL: "https://amystrainschedule.firebaseio.com",
  projectId: "amystrainschedule",
  storageBucket: "amystrainschedule.appspot.com",
  messagingSenderId: "64451924337"
};
firebase.initializeApp(config);

  var trainName = "";
  var destination = "";
  var firstTrain;
  var frequency; 
  var nextTrain;
  var minAway;

  var database = firebase.database();

  $("#submit").on("click", function(e) { 
    e.preventDefault();
    trainName = $("#trainName").val()//.trim();
    destination = $("#destination").val()//.trim();  
    firstTrain = $("#firstTrain").val()//.trim();
    frequency = $("#frequency").val()//.trim();
      $("#inputtrainName").empty();
      $("#inputdestination").empty();
      $("#inputfirstTrain").empty();
      $("#inputfrequency").empty();

  database.ref().push({
    trainName: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
  })
});

database.ref().on("child_added", function(snapshot){
  var snap = snapshot.val();
console.log(snap);
$("#td").html(trainName);

function renderTrains() {
/*var tdtn = $("<td>");
trainName.attr("tdtn");
trainName.addClass("tdtn");
$("#tdtn").append(trainName)*/

  for (var i = 0; i<snap.length; i++) {
    var row = $("<tr>");
    var tdtn= $("<td>");
    var tdd= $("<td>");
    var tdf= $("<td>");
    var tdnt= $("<td>");
    var tdma= $("<td>");

    tdtn.text(snap[i].trainName);
    tdd.text(snap[i].destination);
    tdf.text(snap[i].frequency);
    tdnt.text(snap[i].nextTrain);
    tdma.text(snap[i].minutesAway);

    tdtn.addClass$("td");

    $("#tr").html(tdtn);

    $("td1").addClass("#td");
  }
  renderTrains()
};
})