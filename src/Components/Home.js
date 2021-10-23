import React, { useEffect } from 'react'
import { Navbar } from './Navbar';
import { Products } from './Products'
import { useHistory } from 'react-router-dom'
import { auth } from '../Config/Config'
import NavbarNew from '../Routes/NavbarNew'
import { Link } from 'react-router-dom';
export const Home = ({ user }) => {

    const history = useHistory();

    useEffect(() => {
        // forcing user to signup
        auth.onAuthStateChanged(user => {
            if (!user) {
                history.push('/login');
            }
        })
    })

    return (

        <div className='wrapper'>

            <Navbar user={user} />
            <div class="container0">
                <div class="content01">
                    <Link to='/products' >
                        <img src={require("../img/offers.jpg")} alt="offer0" class="contentimg0" />
                    </Link>
                    <p class="contentdesc">top offers</p>
                </div>

                <div class="content01">
                    <img src={require('../img/mobiles.jpg')} alt="offer0" class="contentimg0" />
                    <p class="contentdesc">mobiles</p>
                </div>

                <div class="content01">
                    <img src={require("../img/electronics.jpg")} alt="offer0" class="contentimg0" />
                    <p class="contentdesc">Laptop</p>
                </div>
                <div class="content01">
                    <img src={require("../img/hsimg4.jpg")} alt="offer0" class="contentimg0" />
                    <p class="contentdesc">headphones</p>
                </div>
                <div class="content01">
                    <img src={require("../img/appliances.jpg")} alt="offer0" class="contentimg0" />
                    <p class="contentdesc">appliances</p>
                </div>
                <div class="content01">
                    <img src={require('../img/speaker11.png')} alt="offer0" class="contentimg0" />
                    <p class="contentdesc">Speaker</p>
                </div>
                <div class="content01">
                    <img src={require('../img/power.png')} alt="offer0" class="contentimg0" />
                    <p class="contentdesc">PowerBank</p>
                </div>
                <div class="content01">
                    <img src={require('../img/camera.png')} alt="offer0" class="contentimg0" />
                    <p class="contentdesc">Camera</p>
                </div>


            </div>
            <div class="container1">
                <img src={require("../img/sliderimg2.jpg")} class="imgslider00" id="imgslid1" alt="img2" />
            </div>



            <div class="container2">
                <div class="cont1slider">
                    <div class="titlecont">
                        <p>best of electronics</p>
                        <p class="descrip0">devices and accessories</p>

                    </div>
                    <div class="viewbtn0">
                        <a href="#" class="viewbtnlink">
                            <p class="viewbtn">view all</p>
                        </a>
                    </div>
                </div>
                <hr class="dividercont0"/>

                    <input type="radio" class="radioslider1" name="slider1" id="imgslider1l" checked />

                    <input type="radio" class="radioslider1" name="slider1" id="imgslider1r"/>

                        <div class="content000">

                            <div class="contents0">
                                <a href="#" class="linkcont0">
                                    <div class="imgcont0">
                                        <img src={require("../img/bestbrandphones.jpg" )} alt="bestphones0" class="contentimg00" />
                                    </div>
                                    <div class="desccont0">
                                        <p class="desccont1">best brands</p>
                                        <p class="desccont2">shop now</p>
                                        <p class="desccont3">for all phone models</p>
                                    </div>
                                </a>

                            </div>

                            <div class="contents0">
                                <a href="#" class="linkcont0">
                                    <div class="imgcont0">
                                        <img src={require("../img/boeimg2.jpg")} alt="boeimg2" class="contentimg01" />
                                    </div>
                                    <div class="desccont0">
                                        <p class="desccont1">lenovo tablets</p>
                                        <p class="desccont2">shop now</p>
                                        <p class="desccont3">for all related models</p>
                                    </div>
                                </a>

                            </div>

                            <div class="contents0">
                                <a href="#" class="linkcont0">
                                    <div class="imgcont0">
                                        <img src={require("../img/boeimg3.jpg")} alt="bestphones0" class="contentimg01" />
                                    </div>
                                    <div class="desccont0">
                                        <p class="desccont1">microsoft devices</p>
                                        <p class="desccont2">shop now</p>
                                        <p class="desccont3">for all microsoft products</p>
                                    </div>
                                </a>

                            </div>
                            <div class="contents0">
                                <a href="#" class="linkcont0">
                                    <div class="imgcont0">
                                        <img src={require("../img/boeimg4.jpg")} alt="bestphones0" class="contentimg00" />
                                    </div>
                                    <div class="desccont0">
                                        <p class="desccont1">samsung tablets</p>
                                        <p class="desccont2">shop now</p>
                                        <p class="desccont3">for all samsung products</p>
                                    </div>
                                </a>

                            </div>

                            <div class="contents0">
                                <a href="#" class="linkcont0">
                                    <div class="imgcont0">
                                        <img src={require("../img/boeimg5.jpg")} alt="bestphones0" class="contentimg01" />
                                    </div>
                                    <div class="desccont0">
                                        <p class="desccont1">TV streaming devices</p>
                                        <p class="desccont2">shop now</p>
                                        <p class="desccont3">for all related products</p>
                                    </div>
                                </a>

                            </div>
                            </div>
                            </div>
                            
            <Products />
        </div>
    )
}
