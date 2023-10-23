
import { initializeApp} from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC5oBkyrQA8JNdXT2UULoepp2gfqC2gTOY",

  authDomain: "gislayneifal513.firebaseapp.com",

  projectId: "gislayneifal513",

  storageBucket: "gislayneifal513.appspot.com",

  messagingSenderId: "671961153799",

  appId: "1:671961153799:web:53862f100b57a0267b85a2"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app)

export { app, db, auth }