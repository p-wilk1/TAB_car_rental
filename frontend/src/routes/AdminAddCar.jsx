import React from 'react';
import {useContext} from "react";
import AuthContext from "../context/AuthProvider.jsx";
import Navbar from "../components/sectionHeader/Navbar.jsx";
import AdminNavbar from "../components/sectionAdminPanel/AdminNavbar.jsx";
import AddCar from "../components/sectionAdminPanel/AddCar.jsx";

const AdminAddCar = () => {
    const{auth} = useContext(AuthContext)
    return (
        <>
            <Navbar auth={auth}/>
            <AdminNavbar/>
            <AddCar/>

        </>
    );
};

export default AdminAddCar;