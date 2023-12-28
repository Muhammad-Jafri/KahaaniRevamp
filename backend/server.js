import express from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import midErr from "./middleware/basicErr.js";
import cors from 'cors'
import adminRoutes from './routes/adminroutes.js'
import highlightRoutes from "./routes/highlightRoutes.js"
import dataRoutes from "./routes/dataRoutes.js"
import cookieParser from "cookie-parser";
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
app.get('/', (req, res) => {
    res.sendStatus(200)
  })
///middleware err this must always be at the end 
app.use(midErr);

app.listen(process.env.PORT, () => {
    // console.log(`server is running at port ${process.env.PORT}`)
    console.log(`server is running at port 3000`)
});


