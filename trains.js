


    // TODO: Add SDKs for Firebase products that you want to use
    //  https://firebase.google.com/docs/web/setup#config-web-app 


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBs532DNS6U-xmaPAt6U8JmZwBUlm_WXPY",
    authDomain: "train-schedule-1c4f0.firebaseapp.com",
    databaseURL: "https://train-schedule-1c4f0.firebaseio.com",
    projectId: "train-schedule-1c4f0",
    storageBucket: "train-schedule-1c4f0.appspot.com",
    messagingSenderId: "663230176854",
    appId: "1:663230176854:web:848b475680d7b4e6"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // create a var to Reference the database             
    var dataref = firebase.database();

// Add route onClick function 
 $("#add-train-btn").on("click" ,function(event){

   // page refresh
  event.preventDefault();

//  Gets the user data
 train = $("#train-name-input").val().trim();
 destination = $("#destination-input").val().trim();
 first = $("#start-input").val().trim(); 
 frequency = $("#frequency-input").val().trim();

  // Creates local "temporary" object for holding employee data

      var newRoute = {
       name:train,
       route:destination,
       start:first,
       howoften:frequency
   };
  
  // Uploads employee data to the database & create a new table 
  dataref.ref().push(newRoute);

     // Logs everything to console
  console.log(newRoute.name);
  console.log(newRoute.route);
  console.log(newRoute.start);
  console.log(newRoute.howoften);

  alert("Route successfully added");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#start-input").val("");
  $("#frequency-input").val("");




     // Uploads employee data to the database
       dataref.ref().on("child_added" ,function(childSnapshot){ 
      console.log(childSnapshot.val());
        // create and store in a var 
      var train = (childSnapshot.val().name);
      var destination = (childSnapshot.val().route);
      var first = (childSnapshot.val().start);
      var frequency = (childSnapshot.val().howoften);
     
 
       // Employee Info
        console.log(train);
        console.log(destination);
        console.log(first);
        console.log(frequency);
  
      // =====================Moments==============================
       // Assumptions
    var tFrequency = 30;

    // Time is 3:30 AM
    var firstTime = "03:30";

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

// Current Time
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
  
// Difference between the times
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
//console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    //console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
 
    //==================== Create a new row ================================

    var newRow = $("<tr>").append(
      $("<td>").text(train),
      $("<td>").text(destination),
      $("<td>").text(frequency),
      $("<td>").text(nextTrain),
      $("<td>").text(tMinutesTillTrain)
    );
  
    // Append the new row to the table
    $("#Train-table > tbody").append(newRow);

  });

});
  