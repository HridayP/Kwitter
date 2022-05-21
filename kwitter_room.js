var firebaseConfig = {
      apiKey: "AIzaSyDRPd4FVotq7rMjxnrdzwGPfQh-71SJIH8",
      authDomain: "hellochatbot-aiec.firebaseapp.com",
      databaseURL: "https://hellochatbot-aiec-default-rtdb.firebaseio.com",
      projectId: "hellochatbot-aiec",
      storageBucket: "hellochatbot-aiec.appspot.com",
      messagingSenderId: "784323225034",
      appId: "1:784323225034:web:2b34aeb688fea3dcad9b33"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"

      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";



}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room name- " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML+=row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}