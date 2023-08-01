// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK-Pya8YabROLCpLlgA3KcAN1Vgr_FXOc",
  authDomain: "linkedin-clone-12863.firebaseapp.com",
  projectId: "linkedin-clone-12863",
  storageBucket: "linkedin-clone-12863.appspot.com",
  messagingSenderId: "88199436201",
  appId: "1:88199436201:web:e36a09e0d5afbb29e696b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };