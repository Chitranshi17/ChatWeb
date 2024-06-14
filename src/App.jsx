import React from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import MainScreen from "./Screens/MainScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import UserWelcomeScreen from "./Screens/UserWelcomeScreen";

const App = () => {
  return (
    <Router>
       <Routes>
        <Route path="/chat" element={<MainScreen/>}/>
        <Route path="/login" element={<LoginScreen/>}/>
        <Route path="/register" element={<RegisterScreen/>}/>
        <Route path="/" element={<WelcomeScreen/>}/>
        <Route path="/userwelcome" element={<UserWelcomeScreen/>}/>
       </Routes>
    </Router>
  );
};

export default App;
