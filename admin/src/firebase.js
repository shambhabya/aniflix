
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBhAiK1vpZOpBGtDU3NlHj6xWEuIqZl2X0",
  authDomain: "aniflix-4739c.firebaseapp.com",
  projectId: "aniflix-4739c",
  storageBucket: "aniflix-4739c.appspot.com",
  messagingSenderId: "791498422500",
  appId: "1:791498422500:web:826407abbf6cd58a75d4f1",
  measurementId: "G-BCGYJWYPW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;