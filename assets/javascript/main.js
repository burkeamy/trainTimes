
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC3v8FS9NhOhS1OJLvOFMmdGC7zDvzyf9I",
    authDomain: "amystrainschedule.firebaseapp.com",
    databaseURL: "https://amystrainschedule.firebaseio.com",
    projectId: "amystrainschedule",
    storageBucket: "",
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
    trainName = $("#inputtrainName").val().trim();
    destination = $("#inputdestination").val().trim();  
    firstTrain = $("#inputfirstTrain").val().trim();
    frequency = $("#inputfrequency").val().trim();
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

  for (var i = 0; i<snap.length; i++) {
    var row  = $("<tr>");
    var td1= $("<td>");
    var td1= $("<td>");
    var td1= $("<td>");
    var td1= $("<td>");

    td1.append(snap[i].trainName);
    td2.append(snap[i].destination);


  }
})