// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhkWTpb2XCv-ipve13ZsvorZGuY_LtwFU",
    authDomain: "latestblogs06.firebaseapp.com",
    projectId: "latestblogs06",
    storageBucket: "latestblogs06.appspot.com",
    messagingSenderId: "369269750774",
    appId: "1:369269750774:web:1b5cb620f5cbac5f5a25d7",
    measurementId: "G-K7TBCB6XD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);