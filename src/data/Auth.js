import { useState, useEffect, createContext } from 'react'
import app from './firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, [])
    return null
}