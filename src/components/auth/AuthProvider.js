import React, { createContext, useContext, useState, useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        try {
          const userRef = doc(db, "users", userAuth.uid);
          const snapshot = await getDoc(userRef);

          if (snapshot.exists()) {
            setCurrentUser({
              uid: userAuth.uid,
              email: userAuth.email,
              ...snapshot.data(), // Include additional user data from Firestore
            });
          } else {
            setCurrentUser(null);
          }
        } catch (error) {
          console.error("Error fetching user data:", error.message);
          setCurrentUser(null); // Clear currentUser state on error
        }
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    setCurrentUser, // Expose setCurrentUser function to update currentUser state
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
