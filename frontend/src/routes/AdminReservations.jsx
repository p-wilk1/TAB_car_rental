import React from 'react';
import Navbar from "../components/sectionHeader/Navbar.jsx";
import AdminNavbar from "../components/sectionAdminPanel/AdminNavbar.jsx";
import {useContext} from "react";
import AuthContext from "../context/AuthProvider.jsx";
import Reservations from "../components/sectionAdminPanel/Reservations.jsx";

const AdminReservations = () => {
    const{auth} = useContext(AuthContext)
    return (
        <>
            <Navbar auth={auth}/>
            <AdminNavbar/>
            <Reservations/>
        </>

    );
};

export default AdminReservations;