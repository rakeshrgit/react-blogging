import { createContext, useContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    confirmPasswordReset,
    updateProfile  
 } from "firebase/auth";
 import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({children}){
    const [user, setUser] = useState("");
    function signUp(email, password, name){
        return createUserWithEmailAndPassword(auth, email, password);
    }

   function logIn(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }

    function forgotPassword(email){
      return sendPasswordResetEmail(auth, email, {
        url: `http://localhost:3000/login`,
      });
    }
    
    function resetPassword(oobCode, newPassword) {
      return confirmPasswordReset(auth, oobCode, newPassword)
    }
  

    function logOut() {
        return signOut(auth);
      }

      function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
      }
       

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
          //console.log("Auth", currentuser);
          setUser(currentuser);
        });
    
        return () => {
          unsubscribe();
         
        };
      }, []);
    return (
        <userAuthContext.Provider value={{user, signUp, logOut, logIn, googleSignIn, forgotPassword, resetPassword}}>
            {children}
        </userAuthContext.Provider>   
    )
}

export function useUserAuth() {
    return useContext(userAuthContext)
    
}




