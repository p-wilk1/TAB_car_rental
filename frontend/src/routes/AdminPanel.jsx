import React, {useContext} from 'react';
import AdminNavbar from "../components/sectionHeader/AdminNavbar.jsx";
import Navbar from "../components/sectionHeader/Navbar";
import AuthContext from "../context/AuthProvider.jsx";


const AdminPanel = () => {
    const{auth} = useContext(AuthContext)
    return (
        <>
            <Navbar auth={auth}/>
            <AdminNavbar/>
        </>

    );
};

export default AdminPanel;