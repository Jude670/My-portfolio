
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCU3NoHZe9b_3H-YSU7MghTQXWmMR4eTE8",
    authDomain: "signup-f66db.firebaseapp.com",
    projectId: "signup-f66db",
    storageBucket: "signup-f66db.appspot.com",
    messagingSenderId: "849590565673",
    appId: "1:849590565673:web:5183dfcaf485bd23265538"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const register = document.getElementById("submit");


  register.addEventListener("click", (event) => {
    event.preventDefault();
    const email= document.getElementById("email").value;
    const password= document.getElementById("password").value;

    const auth = getAuth();
    console.log(email,password)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert("success")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });


})


















































// document.getElementById('loginForm').addEventListener('submit', function(e) {
//     e.preventDefault(); // Prevent form submission

//     // Simulate a login process
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const errorMsg = document.getElementById('errorMsg');

//     // Hardcoded credentials for demonstration purposes
//     const validUsername = 'user';
//     const validPassword = 'password123';

//     if (username === validUsername && password === validPassword) {
//         alert('Login successful!');
//         // Redirect to the portfolio main page or dashboard
//         window.location.href = 'login.html'; // Change to your desired page
//     } else {
//         errorMsg.textContent = 'Invalid username or password.';
//     }
// });
