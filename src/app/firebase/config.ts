import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCzrUPAbcyg1iRfHOMVDBbmPnGUT5Xh0eQ",
    authDomain: "myinternshipproject-64877.firebaseapp.com",
    projectId: "myinternshipproject-64877",
    storageBucket: "myinternshipproject-64877.appspot.com",
    messagingSenderId: "421983263315",
    appId: "1:421983263315:web:960c7a6317b3f87586c4a6",
    measurementId: "G-QJMC4FN8TJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


