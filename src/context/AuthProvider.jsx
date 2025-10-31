import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  const createUser = (email, password) => {
    setUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singInUser = (email, password) =>{
    setUserLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signInWithGoogle = ()=>{
    setUserLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const signOutUser = ()=>{
    setUserLoading(true);
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setUserLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    userLoading,
    createUser,
    singInUser,
    signInWithGoogle,
    signOutUser
  };

  return <AuthContext value={authInfo}>
    {children}
  </AuthContext>;
};

export default AuthProvider;
