import React, {useContext} from 'react';

import AuthContext from "../context/AuthProvider.jsx";
import Navbar from "../components/sectionHeader/Navbar.jsx";
import AdminNavbar from "../components/sectionAdminPanel/AdminNavbar.jsx";
import Cars from "../components/sectionAdminPanel/Cars.jsx";

const AdminCars = () => {
    const{auth} = useContext(AuthContext)
    return (
        <>
            <Navbar auth={auth}/>
            <AdminNavbar/>
            <Cars/>
        </>

    );
};

export default AdminCars;