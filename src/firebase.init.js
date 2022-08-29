// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPUEJ6vkG8aoDtDzvuqfDeIYAWUMhtglA",
    authDomain: "api-task-5bf8f.firebaseapp.com",
    projectId: "api-task-5bf8f",
    storageBucket: "api-task-5bf8f.appspot.com",
    messagingSenderId: "224000393664",
    appId: "1:224000393664:web:319fb54c340e92c68e0825"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;