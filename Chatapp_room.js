var firebaseConfig = {
    apiKey: "AIzaSyBC3d8PLpYUmcNehLiavYt48DWjgvQSdLg",
    authDomain: "chatapp-33346.firebaseapp.com",
    databaseURL: "https://chatapp-33346-default-rtdb.firebaseio.com",
    projectId: "chatapp-33346",
    storageBucket: "chatapp-33346.appspot.com",
    messagingSenderId: "585598370848",
    appId: "1:585598370848:web:587fdec38a835ab52aa845"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";
     function addRoom(){
           room_name = document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({
                 purpose : "adding room name"
           });
           localStorage.setItem("room_name", room_name);
           window.location = "Chatapp_page.html";
     }
     

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room_names" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();


function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name,", name);
      window.location = "Chatapp_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.loaction = "index.html";
}