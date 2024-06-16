import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import {getAuth} from "firebase/auth";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBiNWXEt9M-I2Osw6PZaDTHcpiAKJsVyu4",
    authDomain: "drivesyn-bd045.firebaseapp.com",
    projectId: "drivesyn-bd045",
    storageBucket: "drivesyn-bd045.appspot.com",
    messagingSenderId: "542547893547",
    appId: "1:542547893547:web:f031d44e590a48c97ab96e",
    measurementId: "G-20KMBSB4M8"
  };

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);