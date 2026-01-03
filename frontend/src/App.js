import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Agents from "./pages/Agents";
import Tools from "./pages/Tools";
import Intelligence from "./pages/Intelligence";
import { Toaster } from "./components/ui/sonner";
import apiService from "./services/api";
import "./App.css";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [token, setToken] = useState(localStorage.getItem("vaelis_token"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      localStorage.setItem("vaelis_token", token);
      apiService.setToken(token); // Set token in API service
      fetchUser();
    } else {
      localStorage.removeItem("vaelis_token");
      apiService.setToken(null);
    }
  }, [token]);

  const fetchUser = async () => {
    try {
      const data = await apiService.getAccountInfo();
      setUser(data);
    } catch (error) {
      console.error("Failed to fetch user", error);
      setToken(null);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <div className="App min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/auth"
            element={
              token ? <Navigate to="/dashboard" /> : <Auth setToken={setToken} />
            }
          />
          <Route
            path="/dashboard"
            element={
              token ? (
                <Dashboard user={user} logout={logout} token={token} />
              ) : (
                <Navigate to="/auth" />
              )
            }
          />
          <Route
            path="/agents"
            element={
              token ? (
                <Agents user={user} logout={logout} token={token} />
              ) : (
                <Navigate to="/auth" />
              )
            }
          />
          <Route
            path="/tools"
            element={
              token ? (
                <Tools user={user} logout={logout} token={token} />
              ) : (
                <Navigate to="/auth" />
              )
            }
          />
          <Route
            path="/intelligence"
            element={
              token ? (
                <Intelligence user={user} logout={logout} token={token} />
              ) : (
                <Navigate to="/auth" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;