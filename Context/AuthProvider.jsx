import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { auth } from '../firebase/firebase.init'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const googleProvider = new GoogleAuthProvider()
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // observer Auth
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log(currentUser)
        })
        return unSubscribe;
    }, [])

    const authInfo = {
        user,
        loading,
        registerUser,
        signInUser,
        signInGoogle
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider
