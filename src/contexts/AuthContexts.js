import React, { useState, useContext, useEffect } from 'react'
import { auth, firestore } from '../data/firebase'

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe
    }, [currentUser])

    function signUp(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function signIn(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function signOut() {
        return auth.signOut()
    }

    async function saveToTheDatabase(projectName, items) {
        const projectType = "Traditional";
        for (let i = 0; i < items.length; i++) {
            await firestore.collection('Users').doc(currentUser.email).collection(projectType).doc(projectName).collection('vegetables').doc(items[i].id).set(items[i]);
        }
    }

    async function getUserProjects() {
        const project = await firestore.collection('Users').doc(currentUser.email).collection('Standard').doc('test').get()
        const tmp = [];
        project.docs.map(async (doc) => {
            tmp.push({ id: doc.id, ...doc.data() });
        });
        console.log(tmp)
        if (!project.exists) {
            console.log('No such document!');
        } else {
            console.log('Document data:', project.data());
        }

    }

    const value = {
        currentUser,
        signIn,
        signUp,
        signOut,
        saveToTheDatabase,
        getUserProjects
    }



    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
