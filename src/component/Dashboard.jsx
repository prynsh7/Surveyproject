import React, { useState } from 'react';
// import AddMenu from './AddMenu/AddMenu';
import './Dashboard.scss'
import Location from './Location/Location';
import Faculty from './Faculty/Faculty';
import Camp from './Camp/Camp';
import Retailer from './Retailer/Retailer';
import Truck from './Truck/Truck';
import Order from './Order/Order';
import { useNavigate, Navigate } from 'react-router';

// import Orders from './Orders/Orders';

function Dashboard() {

    const [menuOpen, setMenuOpen] = useState(true);
    const [selected, setSelected] = useState('home');


    const navigate = useNavigate();

    const auth = localStorage.getItem("auth");

    return (
        <div className="dashboard">
            {
                auth ? null : <Navigate replace to="login" /> 
            }
            <div className={menuOpen ? `sidebar close` : 'sidebar'}  >

                <ul className="nav-links">
                    <li>
                        <i className='bx bx-menu' onClick={() => setMenuOpen(!menuOpen)} ></i>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-grid-alt' ></i>
                            <span className="link_name">Dashboard</span>
                        </a>
                        <ul className="sub-menu blank" >
                            <li><a className="link_name" href="!#">Dashboard</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#" onClick={() => setSelected('location')}>
                            <i className='bx bx-pie-chart-alt-2' ></i>
                            <span className="link_name">Locations</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Locations</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#!" onClick={() => setSelected('faculty')}>
                            <i className='bx bx-line-chart' ></i>
                            <span className="link_name">Faculty</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Faculty</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#" onClick={() => setSelected('camp')}>
                            <i className='bx bx-compass' ></i>
                            <span className="link_name">Camps</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Camps</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" onClick={() => setSelected('truck')}>
                            <i className='bx bx-history'></i>
                            <span className="link_name">Patients</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Patients History</a></li>
                        </ul>
                    </li>
                    {/* <li>
                        <a href="#" onClick={() => setSelected('retailer')}>
                            <i className='bx bx-cog' ></i>
                            <span className="link_name">Retailer</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Retailer</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" onClick={() => setSelected('order')}>
                            <i className='bx bx-cog' ></i>
                            <span className="link_name">Order</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Order</a></li>
                        </ul>
                    </li> */}
                    <li>
                        <div className="profile-details">
                            <div className="profile-content">
                                <img src="./Assets/profile.jpg" alt="profileImg" />
                            </div>
                            <div className="name-job">
                                <div className="profile_name">Admin</div>
                                <div className="job">Authorizer</div>
                            </div>
                            <i className='bx bx-log-out' ></i>
                        </div>
                    </li>

                </ul>
            </div>
            <section className="home-section">

                {selected === 'location' ? <Location /> : null}
                {selected === 'faculty' ? <Faculty /> : null}
                {selected === 'camp' ? <Camp /> : null}
                {selected === 'retailer' ? <Retailer /> : null}
                {selected === 'truck' ? <Truck /> : null}
                {selected === 'order' ? <Order /> : null}



            </section>


        </div >

    );
}

export default Dashboard;