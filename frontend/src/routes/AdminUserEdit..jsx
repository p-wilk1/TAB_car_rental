import React from 'react';
import Navbar from "../components/sectionHeader/Navbar";
import {useContext} from "react";
import AuthContext from "../context/AuthProvider.jsx";
import AdminNavbar from "../components/sectionAdminPanel/AdminNavbar.jsx";
import EditUser from "../components/sectionAdminPanel/EditUser.jsx";

const AdminUserEdit = () => {
    const{auth} = useContext(AuthContext)
    return (
        <>
            <Navbar auth={auth}/>
            <AdminNavbar/>
            <EditUser/>

        </>
    );
};

export default AdminUserEdit;