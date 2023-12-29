import { db } from "../firebaseConfig.js"
import { getDoc, doc, setDoc } from "firebase/firestore";
import { handleAsyncErr } from "../middleware/handleAsyncErr.js";
import HandErr from "../utils/err.js";

export const createAdmin = handleAsyncErr(async (req, res, next) => {
    const { email, password } = req.body;
    console.log(req.body)
    if (!email || !password) {
        return next(new HandErr("no user with the email or pass exists"), 202)
    }
    console.log("Creating the admin please wait...");
    try {
        const docRef = await setDoc(doc(db, "users", email), {
            email: email,
            password: password
        })
        res.status(200).json({
            success: true,
            message: "admin created",
            data: {
                email: email,
                password: password
            }
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
});

export const loginAdmin = handleAsyncErr(async (req, res, next) => {
    const { email, password } = req.body;
    console.log(req.body)
    if (!email || !password) {
        return next(new HandErr("No admin is created"), 400);
    }
    if (!email) {
        return next(new HandErr("The admin email is incorrect or the pass is incorrect"), 401);
    }
    // We must ensure that the email is unique everytime
    const docRef = doc(db, "users", email);
    const querySnapshot = await getDoc(docRef)
    // console.log(querySnapshot) 
    console.log("Fetched the admin")
    // const querySnapshot = await getDoc(q);
    if (querySnapshot.exists()) {
        const admin = querySnapshot.data()
        res.status(200).json({
            success: true,
            message: "admin logged in",
            data: admin
        })
    }
    else {
        return (new HandErr("No admin is created you must create an admin first"), 400)
    }

})