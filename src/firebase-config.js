import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCm8jO1iZg2BQs65t53cjzb2n3Z4Z5zM-I",
  authDomain: "chatappreact-e61ed.firebaseapp.com",
  projectId: "chatappreact-e61ed",
  storageBucket: "chatappreact-e61ed.appspot.com",
  messagingSenderId: "48512268892",
  appId: "1:48512268892:web:6e397617c38a82a80c4499",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
