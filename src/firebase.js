import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDrhFJ_goALYPqOMoj5gqW8PXjo56Lkzk",
  authDomain: "chat-66c06.firebaseapp.com",
  projectId: "chat-66c06",
  storageBucket: "chat-66c06.appspot.com",
  messagingSenderId: "409701925994",
  appId: "1:409701925994:web:03852a901191439414b613"
};

export const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const storage = getStorage();
export const db = getFirestore();