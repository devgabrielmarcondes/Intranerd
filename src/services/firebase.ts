import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2PXgF2kI_La71tx-0YalL1SnvqoeUhws",
  authDomain: "AIzaSyA2PXgF2kI_La71tx-0YalL1SnvqoeUhws",
  databaseURL: "https://intranerd-da46a-default-rtdb.firebaseio.com",
  projectId: "intranerd-da46a",
  storageBucket: "intranerd-da46a.appspot.com",
  messagingSenderId: "605339050720",
  appId: "1:605339050720:web:d2a02c3098dd8b6fa76685" 
};

const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const auth = getAuth();

export { firebase };

/*
REACT_APP_API_KEY="AIzaSyA2PXgF2kI_La71tx-0YalL1SnvqoeUhws"
REACT_APP_AUTH_DOMAIN="AIzaSyA2PXgF2kI_La71tx-0YalL1SnvqoeUhws"
REACT_APP_DATABASE_URL="https://intranerd-da46a-default-rtdb.firebaseio.com"
REACT_APP_PROJECT_ID="intranerd-da46a"
REACT_APP_STORAGE_BUCKET="intranerd-da46a.appspot.com"
REACT_APP_MESSAGING_SENDER_ID="605339050720"
REACT_APP_APP_ID="1:605339050720:web:d2a02c3098dd8b6fa76685" 

SEED
LOCATION=us-west2 PROJECT_ID=intranerd-da46a ALGOLIA_APP_ID=YU3OOTFUEY ALGOLIA_API_KEY=efd7e40ea0661d6da085e28493d9f39f ALGOLIA_INDEX_NAME=produtos COLLECTION_PATH=Produtos FIELDS=nome GOOGLE_APPLICATION_CREDENTIALS=./seed.sh npx firestore-algolia-search
*/ 