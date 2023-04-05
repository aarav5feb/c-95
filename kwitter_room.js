const firebaseConfig = {
      apiKey: "AIzaSyCSZHFazIkQbgf--5EcjtIadYu_bl1S6N0",
      authDomain: "kwitter-b8442.firebaseapp.com",
      projectId: "kwitter-b8442",
      storageBucket: "kwitter-b8442.appspot.com",
      messagingSenderId: "113522764159",
      appId: "1:113522764159:web:0adfd4ee36dab2e3aad24a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
         console.log("Room Name -"+Room_names );
         row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
         document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();




function addRoom()
{
  room_name = document.getElementById("room_name").value ;

  firebase.database().ref("/").child(room_name).uptade({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name)
      window.location = "kwitter_page.html"
}
