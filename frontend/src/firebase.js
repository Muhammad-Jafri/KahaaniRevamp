// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getfirestore} from 'firebase/firestore';



// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC09MRmTfmzQDQjY0FvOH5jnoNqRUTqFYw",
//   authDomain: "kahaani-3af12.firebaseapp.com",
//   projectId: "kahaani-3af12",
//   storageBucket: "kahaani-3af12.appspot.com",
//   messagingSenderId: "489892307631",
//   appId: "1:489892307631:web:42beb54e6ce71a9d8aea5a",
//   measurementId: "G-FYTZKVC8VX"
// };

// // Initialize Firebase

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db=getfirestore(app);
// export default db;


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC09MRmTfmzQDQjY0FvOH5jnoNqRUTqFYw",
  authDomain: "kahaani-3af12.firebaseapp.com",
  projectId: "kahaani-3af12",
  storageBucket: "kahaani-3af12.appspot.com",
  messagingSenderId: "489892307631",
  appId: "1:489892307631:web:42beb54e6ce71a9d8aea5a",
  measurementId: "G-FYTZKVC8VX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;

