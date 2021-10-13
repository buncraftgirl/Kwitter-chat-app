
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyA9HIgjBP2eG-4Vz5_ziOwHS7NN0OMYLAE",
    authDomain: "let-s-chat-web-app-78b84.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-78b84-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-78b84",
    storageBucket: "let-s-chat-web-app-78b84.appspot.com",
    messagingSenderId: "25342280750",
    appId: "1:25342280750:web:0f01cf4dd292e78fdf4bbf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  function addRoom() {
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({purpose : "Adding room name"});
localStorage.setItem("room_name",room_name);
window.location = "let's_chat_web_app.html";}
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

console.log("Room name - "+ Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)>#"+ Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "let's_chat_web_app.html";
}