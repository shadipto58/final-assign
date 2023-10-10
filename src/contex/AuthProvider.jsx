import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    // CURRENT USER STATE
    const [user, setUser] = useState({});

    // LOADING STATE
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    // USER CREATE
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // USER LOGIN
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // GOOGLE LOGIN
    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }

    // USER LOGOUT
    const userLogOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // UPDATE USER
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }


    // CURRENT USER
    //console.log(user);
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, currentUser => {
            //console.log('user in eye');
            setUser(currentUser);
        })
        return () => unsub();
    }, [])





    const authInfo = {
        createUser,
        userLogin,
        userLogOut,
        updateUser,
        googleLogin,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;