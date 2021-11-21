import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/navbar"
import Sidebar from "./Components/Sidebar/sidebar"
import Home from "./Pages/HomePage/home"
import Users from "./Pages/Users/users";
import { routes } from "./Utilities/route";
// import { Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main">
        <Sidebar />
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.users} element={<Users />} />        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
