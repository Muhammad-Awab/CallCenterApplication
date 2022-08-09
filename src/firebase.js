import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7pYDQByqvTO7Jo9bnsgko6IA61kGJcdk",
  authDomain: "react-authentication-9e3d9.firebaseapp.com",
  projectId: "react-authentication-9e3d9",
  storageBucket: "react-authentication-9e3d9.appspot.com",
  messagingSenderId: "931119955721",
  appId: "1:931119955721:web:b04ec16df684b0293f1dd8",
  measurementId: "G-SE8PXV16XB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;