import React from 'react';
import AdminNav from "./AdminNavbar.module.css";
import {Link} from "react-router-dom";
const AdminNavbar = () => {
    return (
        <>
            <div className={AdminNav.navPanel}>

                <div className={AdminNav.nav2}>
                    <div className={AdminNav.logoName}>
                        <span className={AdminNav.logo_name}>Admin panel</span>
                    </div>

                    <div className={AdminNav.menuItems}>
                        <ul className={AdminNav.nav2Links}>
                            <li>
                                <Link to={"/admin/dashboard"}>
                                    <i className="uil uil-estate"></i>
                                    <span className={AdminNav.linkName}>Panel główny</span>
                            </Link>
                            </li>
                            <li><Link to={"/admin/users"}>
                                <i className="uil uil-files-landscapes"></i>
                                <span className={AdminNav.linkName}>Użytkownicy</span>
                            </Link></li>
                            <li><Link to={"/admin/cars"}>
                                <i className="uil uil-chart"></i>
                                <span className={AdminNav.linkName}>Samochody</span>
                            </Link></li>
                            <li><a href="">
                                <i className="uil uil-thumbs-up"></i>
                                <span className={AdminNav.linkName}>Rezerwacje</span>
                            </a></li>
                        </ul>
                    </div >
                </div>


                </div>

        </>
    );
};

export default AdminNavbar;