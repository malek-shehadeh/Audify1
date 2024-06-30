// Import the functions you need from the SDKs you need
  //Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDE6micSH2dW5H4Y6RLmjLo-zU1rgiK-J4",
    authDomain: "login-form-41b79.firebaseapp.com",
    projectId: "login-form-41b79",
    storageBucket: "login-form-41b79.appspot.com",
    messagingSenderId: "320009613878",
    appId: "1:320009613878:web:8fca664ad5bce95466de97"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth=getAuth();
  const db=getFirestore();

  onAuthStateChanged(auth, (user)=>{
    const loggedInUserId=localStorage.getItem('loggedInUserId');
    if(loggedInUserId){
        console.log(user);
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
        .then((docSnap)=>{
            if(docSnap.exists()){
                const userData=docSnap.data();
                document.getElementById('loggedUserFName').innerHTML=userData.firstName;
                document.getElementById('loggedUserEmail').innerHTML=userData.email;
                document.getElementById('loggedUserFName').value=userData.firstName;
                document.getElementById('loggedUserLName').value=userData.lastName;
                document.getElementById('loggedUserLName').innerHTML=userData.lastName;
                document.getElementById('loggedUserEmail').value=userData.email;
                document.getElementById('password').value=userData.password;

            }
            else{
                console.log("no document found matching id")
            }
        })
        .catch((error)=>{
            console.log("Error getting document");
        })
    }
    else{
        console.log("User Id not Found in Local storage")
    }
  })

  const logoutButton=document.getElementById('logout');

  logoutButton.addEventListener('click',()=>{
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
    .then(()=>{
        window.location.href='index.html';
    })
    .catch((error)=>{
        console.error('Error Signing out:', error);
    })
  })

//////////////////////////////////////////////////////////
// // Import Firebase SDK modules
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// import { getFirestore, getDoc, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// // Firebase configuration
// const firebaseConfig = {
//         apiKey: "AIzaSyDE6micSH2dW5H4Y6RLmjLo-zU1rgiK-J4",
//         authDomain: "login-form-41b79.firebaseapp.com",
//         projectId: "login-form-41b79",
//         storageBucket: "login-form-41b79.appspot.com",
//         messagingSenderId: "320009613878",
//         appId: "1:320009613878:web:8fca664ad5bce95466de97"
//       };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth();
// const db = getFirestore();

// // Function to populate profile fields
// function populateProfile(userData) {
//     document.getElementById('loggedUserFName').innerHTML = userData.firstName;

//     document.getElementById('loggedUserFName').value = userData.firstName;
//     document.getElementById('loggedUserLName').value = userData.lastName;
//     // Add more fields if needed
// }


// // Check auth state
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         const loggedInUserId = localStorage.getItem('loggedInUserId');
//         if (loggedInUserId) {
//             const docRef = doc(db, "users", loggedInUserId);
//             getDoc(docRef)
//                 .then((docSnap) => {
//                     if (docSnap.exists()) {
//                         const userData = docSnap.data();
//                         populateProfile(userData);
//                     } else {
//                         console.log("No document found matching ID");
//                     }
//                 })
//                 .catch((error) => {
//                     console.log("Error getting document:", error);
//                 });
//         } else {
//             console.log("User ID not found in local storage");
//         }
//     } else {
//         console.log("User not logged in");
//         window.location.href = 'visitor.html'; // Redirect to visitor page if not logged in
//     }
// });


// // // Edit button functionality
// // document.getElementById('editButton').addEventListener('click', () => {
// //     // Enable form fields for editing
// //     document.querySelectorAll('#profileForm input').forEach(input => {
// //         input.removeAttribute('disabled');
// //     });

// //     // Toggle button visibility
// //     document.getElementById('editButton').style.display = 'none';
// //     document.getElementById('saveButton').style.display = 'inline-block';
// // });

// // // Save button functionality
// // document.getElementById('saveButton').addEventListener('click', () => {
// //     // Disable form fields after saving (not strictly necessary for demo)
// //     document.querySelectorAll('#profileForm input').forEach(input => {
// //         input.setAttribute('disabled', true);
// //     });

// //     // Save updated information to Firestore
// //     const loggedInUserId = localStorage.getItem('loggedInUserId');
// //     const docRef = doc(db, "users", loggedInUserId);
// //     const updatedData = {
// //         firstName: document.getElementById('loggedUserFName').value,
// //         lastName: document.getElementById('loggedUserLName').value,
// //         // Add more fields as needed
// //     };

// //     setDoc(docRef, updatedData, { merge: true })
// //         .then(() => {
// //             alert("Document successfully updated!");
// //             // Toggle button visibility
// //             document.getElementById('editButton').style.display = 'inline-block';
// //             document.getElementById('saveButton').style.display = 'none';
// //         })
// //         .catch((error) => {
// //             console.error("Error updating document: ", error);
// //         });
//   const logoutButton=document.getElementById('logout');
// logoutButton.addEventListener('click',()=>{
//   localStorage.removeItem('loggedInUserId');
//   signOut(auth)
//   .then(()=>{
//       window.location.href='visitor.html';
//   })
//   .catch((error)=>{
//       console.error('Error Signing out:', error);
//   })
// })
// // });
