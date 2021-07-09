

<script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js"></script>


https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyCXzhtwlLzYDtYgqw49R-b_irWNLODLMwQ",
authDomain: "kwitter-9f5c9.firebaseapp.com",
databaseURL: "https://kwitter-9f5c9-default-rtdb.firebaseio.com",
projectId: "kwitter-9f5c9",
storageBucket: "kwitter-9f5c9.appspot.com",
messagingSenderId: "375494067261",
appId: "1:375494067261:web:654d03f0d10c22b4b7d654"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
</script>

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code

 //End code
 });});}
getData();
