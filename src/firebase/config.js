import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYZM1qyViydTcJCASZq_wuVrgXh0WWMZQ",
  authDomain: "login-page-5dafa.firebaseapp.com",
  projectId: "login-page-5dafa",
  storageBucket: "login-page-5dafa.appspot.com",
  messagingSenderId: "289850710333",
  appId: "1:289850710333:web:bb49abbdd9b35f2f630d54",
};

firebase.initializeApp(firebaseConfig)

// services
const projectAuth = firebase.auth()

export { projectAuth }