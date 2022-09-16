const firebaseConfig = {
    apiKey: "AIzaSyAoPuQ-DtO5JsbN1KxWcxr2AGAFc1bICsA",
    authDomain: "project-94-8f233.firebaseapp.com",
    databaseURL: "https://project-94-8f233-default-rtdb.firebaseio.com",
    projectId: "project-94-8f233",
    storageBucket: "project-94-8f233.appspot.com",
    messagingSenderId: "343902184744",
    appId: "1:343902184744:web:e7c4a1e13d569594069c1d"
  };
  initializeApp(firebaseConfig);

  function addUser() {
        user_name = document.getElementById("user_name").value;
        firebase.database().ref("/").child(user_name).update({
            purpose : "adding_user"
        });
      localStorage.setItem("user_name",user_name);
    window.location = "kwitter_room.html";
    }