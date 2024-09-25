// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBe7mmz1VI_wvgSLB8q2JaFDL7iEKGgURg",
    authDomain: "interview-c6bff.firebaseapp.com",
    projectId: "interview-c6bff",
    storageBucket: "interview-c6bff.appspot.com",
    messagingSenderId: "1098103554330",
    appId: "1:1098103554330:web:9351b221e4939c7926eca3",
    measurementId: "G-BJ9SKSFZ53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
export const auth = getAuth(app);
const db = getFirestore(app);

// Export auth methods
export const registerUser = async (email, password, userType) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store user data in Firestore in different collections based on userType
    const collection = userType === "HR" ? "hr_users" : "candidates";
    
    await setDoc(doc(db, collection, user.uid), {
        email: email,
        userType: userType,
        createdAt: new Date(),
    });
};

export const loginUser = async (email, password, userType) => {
    // First, authenticate the user
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Check if the user exists in the corresponding Firestore collection
    const collection = userType === "HR" ? "hr_users" : "candidates";
    const userDoc = await getDoc(doc(db, collection, user.uid)); // Check by user ID

    if (!userDoc.exists()) {
        throw new Error("User not found in the specified user type collection.");
    }

    return user; // Optionally return user info
};
