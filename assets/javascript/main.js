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
  var row = $("<tr>)");
console.log(snap);
console.log(snap.trainName);

    var tdtn= $("<td>").text(snap.trainName);
    var tdd= $("<td>").text(snap.destination);
    var tdf= $("<td>").text(snap.frequency);
    var tdnt= $("<td>").text(nextTrain);
    var tdma= $("<td>").text(minAway);
    
    row.append(tdtn, tdd, tdf,tdnt, tdma);
    $("tbody").append(row);
  })
