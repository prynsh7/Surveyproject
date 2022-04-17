import React, { useState } from 'react';
// import AddMenu from './AddMenu/AddMenu';
import './Dashboard.scss'
import Manufacturer from './Manufacturer/Manufacturer';
import Category from './Category/Category';
import Product from './Product/Product';
import Retailer from './Retailer/Retailer';
// import Orders from './Orders/Orders';

function Dashboard() {

    const [menuOpen, setMenuOpen] = useState(true);
    const [selected, setSelected] = useState('home');    

    return (


        <div className="dashboard">
            <div  className={menuOpen ? `sidebar close` : 'sidebar'}  >

                <ul className="nav-links">
                    <li>
                    <i className='bx bx-menu' onClick={()=> setMenuOpen(!menuOpen)} ></i>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-grid-alt' ></i>
                            <span className="link_name">Dashboard</span>
                        </a>
                        <ul className="sub-menu blank" >
                            <li><a className="link_name" href="!#">Category</a></li>
                        </ul>
                    </li>
                    
                    <li>
                        <a href="#" onClick={() => setSelected('manufacturer')}>
                            <i className='bx bx-pie-chart-alt-2' ></i>
                            <span className="link_name">manufacturers</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">manufacturers</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#!" onClick={() => setSelected('category')}>
                            <i className='bx bx-line-chart' ></i>
                            <span className="link_name">Category</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Category</a></li>
                        </ul>
                    </li>
                    {/* <li>
                        <div className="iocn-link">
                            <a href="#">
                                <i className='bx bx-plug' ></i>
                                <span className="link_name">Status</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name" href="#">Plugins</a></li>
                            <li><a href="#">UI Face</a></li>
                            <li><a href="#">Pigments</a></li>
                            <li><a href="#">Box Icons</a></li>
                        </ul>
                    </li> */}
                    <li>
                        <a href="#" onClick={() => setSelected('product')}>
                            <i className='bx bx-compass' ></i>
                            <span className="link_name">Products</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Products</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" onClick={() => setSelected('truck')}>
                            <i className='bx bx-history'></i>
                            <span className="link_name">Trucks</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Trucks History</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" onClick={() => setSelected('reatiler')}>
                            <i className='bx bx-cog' ></i>
                            <span className="link_name">Retailer</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Retailer</a></li>
                        </ul>
                    </li>
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
                {/* <div className="home-content">
                    <i className='bx bx-menu' onClick={()=> setMenuOpen(!menuOpen)} ></i>
                    <span className="text">Hello Admin</span>
                </div> */}

                 {selected === 'manufacturer' ? <Manufacturer /> : null}
                 {selected === 'category' ? <Category /> : null}
                 {selected === 'product' ? <Product /> : null}
                 {selected === 'retailer' ? <Retailer /> : null}
                 {selected === 'truck' ? <Retailer /> : null}


            </section>


        </div >

    );
}

export default Dashboard;