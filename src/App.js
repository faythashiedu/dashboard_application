import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/navbar"
import Sidebar from "./Components/Sidebar/sidebar"
import Home from "./Pages/HomePage/home"
import Product from "./Pages/Product/product";
import SingleProduct from "./Pages/Product/singleProduct";
import EditStaff from "./Pages/Staffs/editStaff";
import Staff from "./Pages/Staffs/staff";
import EditUser from "./Pages/Users/editUser";
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
          <Route path={`${routes.users}/:id`} element={<EditUser />} />      
          <Route path={routes.staff} element={<Staff />} />
          <Route path={`${routes.staff}/:id`} element={<EditStaff />} />    
          <Route path={routes.product} element={<Product />} />
          <Route path={`${routes.product}/:id`} element={<SingleProduct />} />    
        </Routes>
      </div>
    </Router>
  );
}

export default App;
