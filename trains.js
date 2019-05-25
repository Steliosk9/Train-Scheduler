



    // TODO: Add SDKs for Firebase products that you want to use
    //  https://firebase.google.com/docs/web/setup#config-web-app 


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBdcvtNolhaJ4MuGy4_rH8dOUx5G8uVQYo",
    authDomain: "train-schedule-321d0.firebaseapp.com",
    databaseURL: "https://train-schedule-321d0.firebaseio.com",
    projectId: "train-schedule-321d0",
    storageBucket: "train-schedule-321d0.appspot.com",
    messagingSenderId: "250586016497",
    appId: "1:250586016497:web:f416b7bc44dc67b1"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var trainName ="";
  var destination ="";
  var firstTrain ="";
  var frequency ="";



// Add route onClick function 
 $("#add-train-btn").on("click" ,function(){
 trainName = $("#train-name-input").val().trim();
 destination = $("#destination-input").val().trim();
 firstTrain = $("#start-input").val().trim(); 
 frequency = $("#frequency-input").val().trim();

// Creates local "temporary" object for holding employee data
  firebaseConfig.database().ref().set({
 //  var newroute = {
  trainName:trainName,
  destination: destination,
  firstTrain: firstTrain,
  frequency: frequency,
  dateAdded: firebase.database
   });

 //firebaseConfig.database().ref().push(newroute);

});