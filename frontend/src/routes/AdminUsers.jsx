import React, {useContext} from 'react';
import Navbar from "../components/sectionHeader/Navbar.jsx";
import AdminNavbar from "../components/sectionAdminPanel/AdminNavbar.jsx";
import Cars from "../components/sectionAdminPanel/Cars.jsx";
import Users from "../components/sectionAdminPanel/Users.jsx";
import AuthContext from "../context/AuthProvider.jsx";

const AdminUsers = () => {
    const{auth} = useContext(AuthContext)
    return (
        <>
            <Navbar auth={auth}/>
            <AdminNavbar/>
            <Users/>
        </>

    );
};

export default AdminUsers;