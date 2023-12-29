// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDmY-XN9v4igWUlUMdZGT0n5GsrangzRik",
//   authDomain: "kahaani-16516.firebaseapp.com",
//   projectId: "kahaani-16516",
//   storageBucket: "kahaani-16516.appspot.com",
//   messagingSenderId: "609376881408",
//   appId: "1:609376881408:web:b42511ca8422c7f6c341e5",
//   measurementId: "G-BQBX97VEW6"
// };
const firebaseConfig = {
  apiKey: "AIzaSyAl6msIj3mRbwnslQDwZNLhCgB_nNgkcAU",
  authDomain: "kahaani-55fc7.firebaseapp.com",
  projectId: "kahaani-55fc7",
  storageBucket: "kahaani-55fc7.appspot.com",
  messagingSenderId: "1053660490720",
  appId: "1:1053660490720:web:c9b91fa5ef9710575c1985",
  measurementId: "G-SSGY67QE1S"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
