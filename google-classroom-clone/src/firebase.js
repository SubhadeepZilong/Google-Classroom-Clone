import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};


  const app = firebase.initializeApp(firebaseConfig);
  const auth = app.auth();
  const db = app.firestore();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  // Sign in and check or create account in firestore
  const signInWithGoogle = async () => {
    try {
      const response = await auth.signInWithPopup(googleProvider);
      console.log(response.user);
      const user = response.user;
      console.log(`User ID - ${user.uid}`);
      const querySnapshot = await db
        .collection("users")
        .where("uid", "==", user.uid)
        .get();
      if (querySnapshot.docs.length === 0) {
        // create a new user
        await db.collection("users").add({
          uid: user.uid,
          enrolledClassrooms: [],
        });
      }
    } catch (err) {
      alert(err.message);
    }
  };
  const logout = () => {
    auth.signOut();
  };
  
  export { app, auth, db, signInWithGoogle, logout };
