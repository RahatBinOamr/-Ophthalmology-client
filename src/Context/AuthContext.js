import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

import app from '../firebase/Firebase.init';


const auth = getAuth(app);
export const AuthContext = createContext();

const AuthContext = ({ children }) => {
    const authInfo= {}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;