/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDul8PQtRwlfjQfhow5SIMW6DvMOBHhLHs',
  authDomain: 'bread-coffee-management-352f7.firebaseapp.com',
  projectId: 'bread-coffee-management-352f7',
  storageBucket: 'bread-coffee-management-352f7.firebasestorage.app',
  messagingSenderId: '131070373042',
  appId: '1:131070373042:web:e95aaf50d96ac927a52dab',
  measurementId: 'G-FYSR0KZFWP',
};

// Initialize Firebase
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const analytics = getAnalytics(app);

export { app, db, analytics, auth, storage };
