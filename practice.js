//ADD YOUR FIREBASE LINKS

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgO6TM7UhJqdVnN0DtKk3SuVAD0D6sFiA",
    authDomain: "kwitter-25d0d.firebaseapp.com",
    projectId: "kwitter-25d0d",
    storageBucket: "kwitter-25d0d.appspot.com",
    messagingSenderId: "1024943134458",
    appId: "1:1024943134458:web:7cfc54eb43fdd6677fdb43"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function addUser() {
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({ 
        purpose : "adding user"
     
    });
    
}