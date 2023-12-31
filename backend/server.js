import express from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import midErr from "./middleware/basicErr.js";
import cors from 'cors'
import adminRoutes from './routes/adminroutes.js'
import highlightRoutes from "./routes/highlightRoutes.js"
import dataRoutes from "./routes/dataRoutes.js"
import cookieParser from "cookie-parser";

import {db}  from "./firebaseConfig.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { setDoc, doc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";


import { getStorage } from "firebase/storage";

import { initializeAuth } from 'firebase/auth';



// Configuring dotenv
dotenv.config()
// const upload = multer({ dest: './uploads/' })

const app = express();


// Init an Express App. 
// Use your dependencies here
// use all controllers(APIs) here
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(upload.array());
app.use(cookieParser());
app.use(cors());
//http://localhost:8000/api/admin/login This will be the route for the login 
//http://localhost:8000/api/admin/create this will be the route to create the admin the very first time
app.use("/api/admin", adminRoutes);
app.use("/api/getHighlights", highlightRoutes)
app.use("/api/story", dataRoutes)






const firebaseConfig = {
  apiKey: "AIzaSyC09MRmTfmzQDQjY0FvOH5jnoNqRUTqFYw",
  authDomain: "kahaani-3af12.firebaseapp.com",
  projectId: "kahaani-3af12",
  storageBucket: "kahaani-3af12.appspot.com",
  messagingSenderId: "489892307631",
  appId: "1:489892307631:web:42beb54e6ce71a9d8aea5a",
  measurementId: "G-FYTZKVC8VX"
};


app.use("/api/myStories", (req, res)=>{
  
  try {
      getDocs(collection(db, "Stories")).then((querySnapshot) => {

          // console.log("Checking", querySnapshot);
          let dataItems = [];
          let genres = [];
          querySnapshot.forEach((doc) => {
              const data = doc.data();
              genres.push(data.genre);
              dataItems.push(data);
          });
          // arrange dataitems based on genre such that all stories of the same genre are grouped together
          let newObj = {};
          for (let i = 0; i < dataItems.length; i++) {
              if (newObj[dataItems[i].genre]) {
                  newObj[dataItems[i].genre].push(dataItems[i]);
              } else {
                  newObj[dataItems[i].genre] = [dataItems[i]];
              }
          }
          dataItems = newObj;
          // console.log(dataItems);

          res.status(200).json({
              success: true,
              message: "stories fetched",
              dataItems

          });
      }
      )
    } catch (error) {
        console.log(error);
        return null;
    }

});






app.get('/', (req, res) => {
    res.sendStatus(200)
})

///middleware err this must always be at the end 
app.use(midErr);

app.listen(3000, () => {
    // console.log(`server is running at port ${process.env.PORT}`)
    console.log(`server is running at port 3000`)
});


