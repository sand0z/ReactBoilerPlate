import { auth } from './firebase'

export const doSignInWithEmailAndPassword = async (email, password) =>
    await auth.signInWithEmailAndPassword(email, password)

export const doSignOut = () => 
    auth.signOut()

export const onAuthStateChanged = (fn) => auth.onAuthStateChanged(fn)