import React from "react";
import { useAuth } from "../components/auth/AuthProvider";

const Home = () => {
  const { currentUser, loading } = useAuth();
  console.log(currentUser);
  return (
    <div className="">
      <h1>hello, {currentUser?.email}</h1>
    </div>
  );
};

export default Home;
