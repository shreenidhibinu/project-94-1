
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBEazmdDV9fa-6WZA8rlQHMBwbQ1IXoAoM",
    authDomain: "chatting-app-e0cfd.firebaseapp.com",
    databaseURL: "https://chatting-app-e0cfd-default-rtdb.firebaseio.com",
    projectId: "chatting-app-e0cfd",
    storageBucket: "chatting-app-e0cfd.appspot.com",
    messagingSenderId: "1064111317472",
    appId: "1:1064111317472:web:6a9f41628a1ec2551e0b85"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function adduser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });

  }