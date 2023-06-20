import React, {useContext, useState} from 'react';
import AdminNavbar from "../components/sectionAdminPanel/AdminNavbar.jsx";
import Navbar from "../components/sectionHeader/Navbar";
import AuthContext from "../context/AuthProvider.jsx";
import Dashboard from "../components/sectionAdminPanel/Dashboard.jsx";
import {Route, Routes} from "react-router";
import Home from "./Home.jsx";


const AdminDashboard = () => {
    const{auth} = useContext(AuthContext)

    return (
        <>
            <Navbar auth={auth}/>
            <AdminNavbar/>
            <Dashboard/>
        </>

    );
};

export default AdminDashboard;