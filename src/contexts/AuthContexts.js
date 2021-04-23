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

    async function saveToTheDatabase(items, projectName, projectWidth, projectLength) {
        const projectType = "Traditional";
        const data = {}
        data.vegetables = items;
        data.projectWidth = projectWidth;
        data.projectLength = projectLength;
        await firestore
            .collection('Users')
            .doc(currentUser.email)
            .collection(projectType)
            .doc(projectName)
            .set(data)
    }

    async function getUserProjects() {
        const project = await firestore
            .collection('Users')
            .doc(currentUser.email)
            .collection('Traditional')
            .get()
        const tmp = [];
        project.docs.map(async (doc) => {
            tmp.push({ id: doc.id, ...doc.data() });
        });
        return tmp;
    }

    async function getUserProject(projectName) {
        const project = await firestore
            .collection('Users')
            .doc(currentUser.email)
            .collection('Traditional')
            .doc(projectName)
            .get()
        return project;
    }

    async function getVegetables() {
        const vegetables = await firestore
            .collection("Vegetables")
            .get();
        const tmp = [];
        vegetables.docs.map(async (doc) => {
            tmp.push({ id: doc.id, ...doc.data() });
        });
        tmp.sort((a, b) => (a.name > b.name ? 1 : -1));
        return tmp;
    }


    const value = {
        currentUser,
        signIn,
        signUp,
        signOut,
        saveToTheDatabase,
        getUserProjects,
        getUserProject,
        getVegetables,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
