import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const auth = getAuth();

export { firebase };

/*
REACT_APP_API_KEY="AIzaSyA2PXgF2kI_La71tx-0YalL1SnvqoeUhws"
REACT_APP_AUTH_DOMAIN="intranerd-da46a.firebaseapp.com"
REACT_APP_DATABASE_URL="https://intranerd-da46a-default-rtdb.firebaseio.com"
REACT_APP_PROJECT_ID="intranerd-da46a"
REACT_APP_STORAGE_BUCKET="intranerd-da46a.appspot.com"
REACT_APP_MESSAGING_SENDER_ID="605339050720"
REACT_APP_APP_ID="1:605339050720:web:d2a02c3098dd8b6fa76685" 
*/ 