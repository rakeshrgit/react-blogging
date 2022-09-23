import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBk0GtxFa7ibfMAEthoh7DtcktOxCqE-xg",
  authDomain: "react-blogging-auth.firebaseapp.com",
  projectId: "react-blogging-auth",
  storageBucket: "react-blogging-auth.appspot.com",
  messagingSenderId: "573944434821",
  appId: "1:573944434821:web:b812a47fc390c8a812d9ec",
  measurementId: "G-5G8V7YTHPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;