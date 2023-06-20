import React from 'react';
import DashboardStyle from './Dashboard.module.css'
const Dashboard = () => {
    return (
        <>
            <section className={DashboardStyle.dashboard}>
                <div className={DashboardStyle.dashContent}>
                <div className="overview">
                    <div className={DashboardStyle.title}>
                        <i className="uil uil-tachometer-fast-alt"></i>
                        <span className={DashboardStyle.text}>Panel</span>
                    </div>

                    <div className={DashboardStyle.boxes}>
                        <div className={DashboardStyle.box}>
                            <i className="uil uil-thumbs-up"></i>
                            <span className={DashboardStyle.text}>Liczba użytkowników</span>
                            <span className={DashboardStyle.number}>50,120</span>
                        </div>
                        <div className={DashboardStyle.box}>
                            <i className="uil uil-comments"></i>
                            <span className={DashboardStyle.text}>Liczba samochodów</span>
                            <span className={DashboardStyle.number}>20,120</span>
                        </div>
                        <div className={DashboardStyle.box}>
                            <i className="uil uil-share"></i>
                            <span className={DashboardStyle.text}>Liczba rezerwacji</span>
                            <span className={DashboardStyle.number}>10,120</span>
                        </div>
                    </div>
                </div>

                    <div className={DashboardStyle.activity}>
                        <div className={DashboardStyle.title}>
                            <i className="uil uil-clock-three"></i>
                            <span className={DashboardStyle.text}>Ostatnia aktywność</span>
                        </div>

                        <div className={DashboardStyle.activityData}>
                            <div className={DashboardStyle.data}>
                                <span className={DashboardStyle.dataTitle}>Name</span>
                                <span className={DashboardStyle.dataList}>Prem Shahi</span>
                                <span className={DashboardStyle.dataList}>Deepa Chand</span>
                                <span className={DashboardStyle.dataList}>Manisha Chand</span>
                                <span className={DashboardStyle.dataList}>Pratima Shahi</span>
                                <span className={DashboardStyle.dataList}>Man Shahi</span>
                                <span className={DashboardStyle.dataList}>Ganesh Chand</span>
                                <span className={DashboardStyle.dataList}>Bikash Chand</span>
                            </div>
                            <div className={DashboardStyle.data}>
                                <span className={DashboardStyle.dataTitle}>Email</span>
                                <span className={DashboardStyle.dataList}>premshahi@gmail.com</span>
                                <span className={DashboardStyle.dataList}>deepachand@gmail.com</span>
                                <span className={DashboardStyle.dataList}>prakashhai@gmail.com</span>
                                <span className={DashboardStyle.dataList}>manishachand@gmail.com</span>
                                <span className={DashboardStyle.dataList}>pratimashhai@gmail.com</span>
                                <span className={DashboardStyle.dataList}>manshahi@gmail.com</span>
                                <span className={DashboardStyle.dataList}>ganeshchand@gmail.com</span>
                            </div>
                            <div className={DashboardStyle.data}>
                                <span className="data-title">Joined</span>
                                <span className={DashboardStyle.dataList}>2022-02-12</span>
                                <span className={DashboardStyle.dataList}>2022-02-12</span>
                                <span className={DashboardStyle.dataList}>2022-02-13</span>
                                <span className={DashboardStyle.dataList}>2022-02-13</span>
                                <span className={DashboardStyle.dataList}>2022-02-14</span>
                                <span className={DashboardStyle.dataList}>2022-02-14</span>
                                <span className={DashboardStyle.dataList}>2022-02-15</span>
                            </div>
                            <div className={DashboardStyle.data}>
                                <span className="data-title">Type</span>
                                <span className="data-list">New</span>
                                <span className="data-list">Member</span>
                                <span className="data-list">Member</span>
                                <span className="data-list">New</span>
                                <span className="data-list">Member</span>
                                <span className="data-list">New</span>
                                <span className="data-list">Member</span>
                            </div>
                            <div className={DashboardStyle.data}>
                                <span className="data-title">Status</span>
                                <span className="data-list">Liked</span>
                                <span className="data-list">Liked</span>
                                <span className="data-list">Liked</span>
                                <span className="data-list">Liked</span>
                                <span className="data-list">Liked</span>
                                <span className="data-list">Liked</span>
                                <span className="data-list">Liked</span>
                            </div>
                        </div>
                    </div>
             </div>
            </section>
        </>
    );
};

export default Dashboard;