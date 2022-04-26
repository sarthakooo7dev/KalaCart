import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAUFd3u2B3oCEPAIILxi7HbGU6d_LfxZ48",
    authDomain: "kalacart-theart.firebaseapp.com",
    projectId: "kalacart-theart",
    storageBucket: "kalacart-theart.appspot.com",
    messagingSenderId: "357644577935",
    appId: "1:357644577935:web:6f826e2c46499aed9a54fa"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

