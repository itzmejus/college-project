import React from 'react'
import '../Styles/AdminDashbord.css'
import {Link} from 'react-router-dom'
import { AllProducts } from './AllProducts'
import LoginUsers from './LoginUsers'
function AdminDashbord() {
    return (

        <body>
            

            <input type="checkbox" id="nav-toggle" />
            <div class="sidebar">
                <div class="sidebar-brand">
                    <h2><span class="lab la-accusoft"></span> <span>Shop Now</span>  </h2>
                </div>

                <div class="sidebar-menu">
                    <ul>
                        <li>
                            <a class="active"><span class="las la-igloo"></span><span>Dashboard</span></a>
                        </li>
                        <li>
                        <Link to='/admin/loginusers'>
                            <a ><span class="las la-users"></span><span>Customers</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link to= '/admin/allproducts'>
                            <a><span class="las la-clipboard-list"></span><span>All Products</span></a>
                            </Link>
                        </li>
                        <li>
                        <Link to='/admin/orderhistory'>
                            <a><span class="las la-shopping-bag"></span><span>Orders</span></a>
                        </Link>    
                        </li>
                        <li>
                        <Link to='admin/addproducts'>
                            <a><span class="las la-receipt"></span><span>Add Products</span></a>
                        </Link>
                        </li>
                        <li>
                            <a href=""><span class="las la-user-circle"></span><span>Accounts</span></a>
                        </li>

                        <li>
                            <a href=""><span class="las la-clipboard-list"></span><span>Tasks</span></a>
                        </li>
                    </ul>
                </div>
            </div>


            <div class="main-content">
                <header>
                    <h2>
                        <label for="nav-toggle">
                            <span class="las la-bars"></span>
                        </label>

                        Dashboard
                   
                    </h2>

                   {/*  <div class="search-wrapper">
                        <span class="las la-search"></span>
                        <input type="search" placeholder="Search here" />
                    </div> */}

                    {/* <div class="user-wrapper">
                <img src="img/2.png" width="40px" height="40px" alt="my-pic"/>
                <div>
                    <h4>s m shaown</h4>
                    <small>Super admin</small>
                </div>
            </div> */}
                </header>




                <main>
                    <div class="cards">
                        <div class="card-single">
                            <div>
                                <h1>54</h1>
                                <span>Customers</span>
                            </div>
                            <div>
                                <span class="las la-users"></span>
                            </div>
                        </div>

                        <div class="card-single">
                            <div>
                                <h1>79</h1>
                                <span>Products</span>
                            </div>
                            <div>
                                <span class="las la-clipboard-list"></span>
                            </div>
                        </div>


                        <div class="card-single">
                            <div>
                                <h1>124</h1>
                                <span>Orders</span>
                            </div>
                            <div>
                                <span class="las la-shopping-bag"></span>
                            </div>
                        </div>

                        <div class="card-single">
                            <div>
                                <h1>$6k</h1>
                                <span>Income</span>
                            </div>
                            <div>
                                <span class="lab la-google-wallet"></span>
                            </div>
                        </div>
                    </div>




                    <div class="recent-flex">
                        <AllProducts/>
                       {/*  <div class="porjects">
                            <div class="card">
                                <div class="card-header">
                                    <h3>Recent Projects</h3>

                                    <button>See all <span class="las la-arrow-right"></span></button>
                                </div>

                                <div class="card-body">
                                    <div class="table-resposive">
                                        <table width="100%">
                                            <thead>
                                                <tr>
                                                    <td>Project Title</td>
                                                    <td>Department</td>
                                                    <td>Status</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>UI/UX Design</td>
                                                    <td>UI Team</td>
                                                    <td><span class="status purple"></span>review</td>
                                                </tr>
                                                <tr>
                                                    <td>Web developemt</td>
                                                    <td>Frontend</td>
                                                    <td>
                                                        <span class="status pink"></span>in progress
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Ushop app</td>
                                                    <td>Mobile Team</td>
                                                    <td>
                                                        <span class="status orange"></span>pending
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>UI/UX Design</td>
                                                    <td>UI Team</td>
                                                    <td><span class="status purple"></span>review</td>
                                                </tr>
                                                <tr>
                                                    <td>Web developemt</td>
                                                    <td>Frontend</td>
                                                    <td>
                                                        <span class="status pink"></span>in progress
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Ushop app</td>
                                                    <td>Mobile Team</td>
                                                    <td>
                                                        <span class="status orange"></span>pending
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>UI/UX Design</td>
                                                    <td>UI Team</td>
                                                    <td><span class="status purple"></span>review</td>
                                                </tr>
                                                <tr>
                                                    <td>Web developemt</td>
                                                    <td>Frontend</td>
                                                    <td>
                                                        <span class="status pink"></span>in progress
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Ushop app</td>
                                                    <td>Mobile Team</td>
                                                    <td>
                                                        <span class="status orange"></span>pending
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div class="custommrs">
                            <LoginUsers/>
                            {/* <div class="card">
                                <div class="card-header">
                                    <h3>New customer</h3>

                                    <button>See all <span class="las la-arrow-right"></span></button>
                                </div>

                                <div class="card-body">
                                    <div class="customer">
                                        <div class="info">
                                            <img src="img/2.png" width="40px" height="40px" alt="" />
                                            <div>
                                                <h4>s m shaown</h4>
                                                <small>CEO Excerpt</small>
                                            </div>
                                        </div>

                                        <div class="contact">
                                            <span class="las la-user-circle"></span>
                                            <span class="las la-comment"></span>
                                            <span class="las la-phoen"></span>
                                        </div>
                                    </div>

                                    <div class="customer">
                                        <div class="info">
                                            <img src="img/2.png" width="40px" height="40px" alt="" />
                                            <div>
                                                <h4>Hayatul Emon</h4>
                                                <small>CEO Excerpt</small>
                                            </div>
                                        </div>
                                        <div class="contact">
                                            <span class="las la-user-circle"></span>
                                            <span class="las la-comment"></span>
                                            <span class="las la-phoen"></span>
                                        </div>
                                    </div>

                                    <div class="customer">
                                        <div class="info">
                                            <img src="img/2.png" width="40px" height="40px" alt="" />
                                            <div>
                                                <h4>Sayed Alam</h4>
                                                <small>CEO Excerpt</small>
                                            </div>
                                        </div>
                                        <div class="contact">
                                            <span class="las la-user-circle"></span>
                                            <span class="las la-comment"></span>
                                            <span class="las la-phoen"></span>
                                        </div>
                                    </div>


                                    <div class="customer">
                                        <div class="info">
                                            <img src="img/2.png" width="40px" height="40px" alt="" />
                                            <div>
                                                <h4>Rafiyan Rafa</h4>
                                                <small>CEO Excerpt</small>
                                            </div>
                                        </div>
                                        <div class="contact">
                                            <span class="las la-user-circle"></span>
                                            <span class="las la-comment"></span>
                                            <span class="las la-phoen"></span>
                                        </div>
                                    </div>

                                    <div class="customer">
                                        <div class="info">
                                            <img src="img/2.png" width="40px" height="40px" alt="" />
                                            <div>
                                                <h4>A M Ali Utshob</h4>
                                                <small>CEO Excerpt</small>
                                            </div>
                                        </div>
                                        <div class="contact">
                                            <span class="las la-user-circle"></span>
                                            <span class="las la-comment"></span>
                                            <span class="las la-phoen"></span>
                                        </div>
                                    </div>


                                    <div class="customer">
                                        <div class="info">
                                            <img src="img/2.png" width="40px" height="40px" alt="" />
                                            <div>
                                                <h4>MD Fahim</h4>
                                                <small>CEO Excerpt</small>
                                            </div>
                                        </div>
                                        <div class="contact">
                                            <span class="las la-user-circle"></span>
                                            <span class="las la-comment"></span>
                                            <span class="las la-phoen"></span>
                                        </div>
                                    </div>

                                </div>
                            </div> */}
                        </div>
                    </div>

                </main>

            </div>
        </body>
    )
}

export default AdminDashbord
