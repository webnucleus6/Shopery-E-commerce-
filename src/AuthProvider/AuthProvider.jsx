import { createContext, useEffect, useState } from "react";
import auth from "../FireBase/Firebase.js";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic.jsx";

 


 
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
     
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()
    const googleProvider = new GoogleAuthProvider() 
    console.log(user);
    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            console.log('current user',currentUser);
            // if (currentUser) {
            //     const userInfo = {email : currentUser.email}
            //     //get and store token
            //     axiosPublic.post('/jwt',userInfo)
            //     .then(res =>{
                     
            //         if (res.data.token) {
            //             localStorage.setItem('access-token',res.data.token)
            //             setLoading(false)
            //         }
            //     })
            // }
            // else{
            //     //reomve token
            //     localStorage.removeItem('access-token')
            //     setLoading(false)
            // }
            
        });
        return () => {
            return unsubcribe();
        }  
    },[axiosPublic])

    const signIN = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn = () =>{
        setLoading(true)

        return signInWithPopup(auth,googleProvider)
    }
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUser = (name,photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL:photo
          })
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const authInfo = {
        user,
        loading,
        signIN,
        createUser,
        logOut,
        updateUser ,
        googleSignIn,
         
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;