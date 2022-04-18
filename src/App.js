import React from "react";
import { Route, Routes, BrowserRouter, useNavigate, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

//pages
import Login from "./component/Login";
import Signup from "./component/Signup";
import Navbar from "./component/Navbar";
import Welcome from "./component/Welcome";

function App() {
  const { authIsReady, user } = useAuthContext();
  

  return (
    <>
      {authIsReady && (
        <BrowserRouter basename="/login-page/">
          <Navbar />
          <Routes>
            <Route path="/welcome" element={user ?  (<Welcome />) : (<Navigate replace to="/login" />)} />
            <Route path="/" element={user ? (<Navigate replace to="/welcome" />) : (<Signup />)} />
            <Route path="/login" element={user ? (<Navigate replace to="/welcome" />) : (<Login />)} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
