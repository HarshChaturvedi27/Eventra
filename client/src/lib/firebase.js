// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoQJNVixd2zZAjC9oYoNk6rD5wtd-Rhko",
  authDomain: "eventra-auth-dev.firebaseapp.com",
  projectId: "eventra-auth-dev",
  storageBucket: "eventra-auth-dev.firebasestorage.app",
  messagingSenderId: "350179912189",
  appId: "1:350179912189:web:31248e208c603032219194"
};

// Initialize Firebase only if it hasn't been initialized yet
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApps()[0]; // Use the already initialized app
}

// Get the Auth service instance
const auth = getAuth(firebaseApp);

// Export the auth instance to use in other files
export { auth };