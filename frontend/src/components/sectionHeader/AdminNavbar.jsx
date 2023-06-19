import React from 'react';
import AdminNav from "./AdminNavbar.module.css";
const AdminNavbar = () => {
    return (
        <>
            <div className={AdminNav.essa}>
                <div className={AdminNav.nav2}>
                    <div className={AdminNav.logoName}>
                        <span className={AdminNav.logo_name}>Admin panel</span>
                    </div>

                    <div className={AdminNav.menuItems}>
                        <ul className={AdminNav.nav2Links}>
                            <li><a href="#">
                                <i className="uil uil-estate"></i>
                                <span className={AdminNav.linkName}>Dashboard</span>
                            </a></li>
                            <li><a href="#">
                                <i className="uil uil-files-landscapes"></i>
                                <span className={AdminNav.linkName}>Users</span>
                            </a></li>
                            <li><a href="#">
                                <i className="uil uil-chart"></i>
                                <span className={AdminNav.linkName}>Cars</span>
                            </a></li>
                            <li><a href="#">
                                <i className="uil uil-thumbs-up"></i>
                                <span className={AdminNav.linkName}>Reservations</span>
                            </a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    );
};

export default AdminNavbar;