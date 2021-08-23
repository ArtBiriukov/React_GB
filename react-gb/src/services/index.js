import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCwggNRRHn1N-acX-CdS6B2aNjnRbjGBUg",
  authDomain: "myfirstapp-71a5c.firebaseapp.com",
  projectId: "myfirstapp-71a5c",
  storageBucket: "myfirstapp-71a5c.appspot.com",
  messagingSenderId: "1068822308099",
  appId: "1:1068822308099:web:69b5156b9b082d63423536"
};

export const initFB = () => firebase.initializeApp(firebaseConfig);