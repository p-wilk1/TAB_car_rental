import React from 'react';
import {useContext} from "react";
import AuthContext from "../context/AuthProvider.jsx";
import Navbar from "../components/sectionHeader/Navbar.jsx";
import AdminNavbar from "../components/sectionAdminPanel/AdminNavbar.jsx";
import EditCar from "../components/sectionAdminPanel/EditCar.jsx";

const AdminEditCar = () => {
    const{auth} = useContext(AuthContext)
    return (
        <>
            <Navbar auth={auth}/>
            <AdminNavbar/>
            <EditCar/>

        </>
    );
};

export default AdminEditCar;
