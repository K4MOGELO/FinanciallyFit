import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../firebase";

const AuthContext = createContext();
const InventoryContext = createContext();
const SalesContext = createContext();

export const useAuth = () => useContext(AuthContext);
export const useInventoryData = () => useContext(InventoryContext);
export const useSalesData = () => useContext(SalesContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [salesData, setSalesData] = useState([{}]);
  const [inventoryData, setInventoryData] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [loadedSales, setLoadedSales] = useState(false);
  const [loadedInventory, setLoadedInventory] = useState(false);

  const [unsubscribe, setUnsubscribe] = useState(null);

  async function getSalesData() {
    try {
      const salesDocRef = doc(db, "sales", currentUser.userId);
      const salesDocSnap = await getDoc(salesDocRef);

      const data = salesDocSnap.data();

      if (salesDocSnap.exists()) {
        setSalesData(data.data);
        setLoadedSales(true);
      } else {
        console.error("Sales document does not exist");
      }
    } catch (error) {
      console.error("Error fetching sales data:", error.message);
    }
  }

  async function getInventoryData() {
    try {
      const inventoryDocRef = doc(db, "inventory", currentUser.userId);

      const inventoryDocSnap = await getDoc(inventoryDocRef);
      const data = inventoryDocSnap.data();

      if (inventoryDocSnap.exists()) {
        setInventoryData(data.data);
        setLoadedInventory(true);
      } else {
        console.error("Inventory document does not exist");
      }
    } catch (error) {
      console.error("Error fetching inventory data:", error.message);
    }
  }

  async function getCurrentUser() {
    const newUnsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        try {
          const userRef = doc(db, "users", userAuth.uid);
          const snapshot = await getDoc(userRef);

          if (snapshot.exists()) {
            setCurrentUser({
              uid: userAuth.uid,
              email: userAuth.email,
              ...snapshot.data(),
            });
          } else {
            setCurrentUser(null);
          }
        } catch (error) {
          console.error("Error fetching user data:", error.message);
          setCurrentUser(null);
        }
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    setUnsubscribe(() => newUnsubscribe);
  }

  useEffect(() => {
    getCurrentUser();

    return () => {
      if (unsubscribe) unsubscribe(); // Call the unsubscribe function if it exists
    };
  }, []);
  useEffect(() => {
    getInventoryData();
    getSalesData();
  }, [currentUser]);

  const authValues = {
    currentUser,
    loading,
    setCurrentUser,
  };

  const inventoryDataValues = {
    InventoryData: inventoryData,
    loadedInventory,
  };

  const salesDataValues = {
    loadedSales,
    SalesData: salesData,
  };

  return (
    <AuthContext.Provider value={authValues}>
      <InventoryContext.Provider value={inventoryDataValues}>
        <SalesContext.Provider value={salesDataValues}>
          {children}
        </SalesContext.Provider>
      </InventoryContext.Provider>
    </AuthContext.Provider>
  );
};
