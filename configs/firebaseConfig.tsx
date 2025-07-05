// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import {getStorage} from 'firebase/storage'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYNOMKSFue0quQ9MixXzy0RuLTIqvAkwg",
    authDomain: "myapp-c808f.firebaseapp.com",
    projectId: "myapp-c808f",
    storageBucket: "myapp-c808f.appspot.com",
    messagingSenderId: "923334711609",
    appId: "1:923334711609:web:bdba231fd415427a16b0e8",
    measurementId: "G-6W1FPMH3RR"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
// // const analytics = getAnalytics(app);

