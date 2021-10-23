import React from 'react'
import Lap2 from '../images/lap2.jpg'
import Lap1 from '../images/lap1.jpg'

import '../Styles/Homepage.css'
import { Link } from 'react-router-dom'
function HomePage() {
    return (

        <div>
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
                    <p class="contentdesc">electronics</p>
                </div>
                <div class="content01">
                    <img src={require("../img/hsimg4.jpg")} alt="offer0" class="contentimg0" />
                    <p class="contentdesc">headphones</p>
                </div>
                <div class="content01">
                    <img src={require("../img/appliances.jpg")} alt="offer0" class="contentimg0" />
                    <p class="contentdesc">appliances</p>
                </div>


            </div>
            <div class="container1">

                <div class="imgslider0">
                    <input type="radio" class="radio00" name="slide" id="img1" checked />
                    <input type="radio" class="radio00" name="slide" id="img2" />
                    <input type="radio" class="radio00" name="slide" id="img3" />
                    <input type="radio" class="radio00" name="slide" id="img4" />

                    <img src='' class="imgslider00" id="imgslid0" alt="img1" />
                    <img src={require("../img/sliderimg2.jpg")} class="imgslider00" id="imgslid1" alt="img2" />
                    <img src={require("../img/sliderimg3.jpg")} class="imgslider00" id="imgslid2" alt="img3" />
                    <img src={require("../img/sliderimg4.jpg")} class="imgslider00" id="imgslid3" alt="img4" />


                </div>
                <div class="dots">
                    <label for="img1"></label>
                    <label for="img2"></label>
                    <label for="img3"></label>
                    <label for="img4"></label>
                </div>

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

                            <div class="contents0">
                                <a href="#" class="linkcont0">
                                    <div class="imgcont0">
                                        <img src={require("../img/boeimg6.jpg")} alt="bestphones0" class="contentimg01" />
                                    </div>
                                    <div class="desccont0">
                                        <p class="desccont1">home audio speakers</p>
                                        <p class="desccont2">shop now</p>
                                        <p class="desccont3">for all related products</p>
                                    </div>
                                </a>

                            </div>

                        
                        </div>

                    </div>
                    <div class="container2">
                        <div class="cont2slider">
                            <div class="titlecont">
                                <p>headphones & speakers</p>
                                <p class="descrip0"></p>

                            </div>
                            <div class="viewbtn0">
                                <a href="#" class="viewbtnlink">
                                    <p class="viewbtn">view all</p>
                                </a>
                            </div>
                        </div>
                        <hr class="dividercont0" />

                        <input type="radio" class="radioslider1" name="slider2" id="imgslider2l" checked />

                        <input type="radio" class="radioslider1" name="slider2" id="imgslider2r" />

                        <div class="content000">

                            <div class="contents0">
                                <a href="#" class="linkcont0">
                                    <div class="imgcont0">
                                        <img src={require("../img/hsimg1.jpg")} alt="bestphones0" class="contentimg00" />
                                    </div>
                                    <div class="desccont0">
                                        <p class="desccont1">wired earphones</p>
                                        <p class="desccont2">from $100</p>
                                        <p class="desccont3">Mi, budi, realme & more</p>
                                    </div>
                                </a>

                            </div>

                            <div class="contents0">
                                <a href="#" class="linkcont0">
                                    <div class="imgcont0">
                                        <img src={require("../img/hsimg2.jpg")} alt="boeimg2" class="contentimg01" id="shiftleftimg0" />
                                    </div>
                                    <div class="desccont0">
                                        <p class="desccont1">headphones</p>
                                        <p class="desccont2">explore more</p>
                                        <p class="desccont3">new launches</p>
                                    </div>
                                </a>

                            </div>

                            <div class="contents0">
                                <a href="#" class="linkcont0">
                                    <div class="imgcont0">
                                        <img src={require("../img/hsimg3.jpg")} alt="bestphones0" class="contentimg01" />
                                    </div>
                                    <div class="desccont0">
                                        <p class="desccont1">headphones over ear</p>
                                        <p class="desccont2">explore more</p>
                                        <p class="desccont3">new launches</p>
                                    </div>
                                </a>

                            </div>
                            <div class="contents0">
                                <a href="#" class="linkcont0">
                                    <div class="imgcont0">
                                        <img src={require("../img/hsimg4.jpg")} alt="bestphones0" class="contentimg00" />
                                    </div>
                                    <div class="desccont0">
                                        <p class="desccont1">bluetooth headphones</p>
                                        <p class="desccont2">from $150</p>
                                        <p class="desccont3">new launches</p>
                                    </div>
                                </a>

                            </div>

                            <div class="contents0">
                                <a href="#" class="linkcont0">
                                    <div class="imgcont0">
                                        <img src={require("../img/hsimg5.jpg")} alt="bestphones0" class="contentimg01" />
                                    </div>
                                    <div class="desccont0">
                                        <p class="desccont1">true wireless earphones</p>
                                        <p class="desccont2">shop now</p>
                                        <p class="desccont3">new launches</p>
                                    </div>
                                </a>

                            </div>

                            <div class="contents0">
                                <a href="#" class="linkcont0">
                                    <div class="imgcont0">
                                        <img src={require("../img/hsimg6.jpg")} alt="bestphones0" class="contentimg01" id="shiftleftimg0" />
                                    </div>
                                    <div class="desccont0">
                                        <p class="desccont1">dobly enabled</p>
                                        <p class="desccont2">shop now</p>
                                        <p class="desccont3">new launches</p>
                                    </div>
                                </a>

                            </div>

                            <div class="contents0">
                                <a href="#" class="linkcont0">
                                    <div class="imgcont0">
                                        <img src={require("../img/hsimg7.jpg" )}alt="bestphones0" class="contentimg00" />
                                    </div>
                                    <div class="desccont0">
                                        <p class="desccont1">home theatres</p>
                                        <p class="desccont2">shop now</p>
                                        <p class="desccont3">new launches</p>
                                    </div>
                                </a>

                            </div>

                            <div class="contents0">
                                <a href="#" class="linkcont0">
                                    <div class="imgcont0">
                                        <img src={require("../img/hsimg8.jpg" )}alt="bestphones0" class="contentimg00" />
                                    </div>
                                    <div class="desccont0">
                                        <p class="desccont1">sound bars</p>
                                        <p class="desccont2">shop now</p>
                                        <p class="desccont3">new launches</p>
                                    </div>
                                </a>

                            </div>

                        </div>
                        <label for="imgslider2l">
                            <img src={require("../img/slide_left.JPG")} class="slideleft0" id="slideleft00" /> </label>
                        <label for="imgslider2r">
                            <img src={require("../img/slide_right.JPG")} class="slideright0" id="slideright00" /></label>

                    </div>

                    <div class="container2">
                        <div class="cont4slider">
                            <div class="titlecont">
                                <p>top offers on</p>
                                <p class="descrip0">men's accessories</p>

                            </div>
                            <div class="viewbtn0">
                                <a href="#" class="viewbtnlink">
                                    <p class="viewbtn">view all</p>
                                </a>
                            </div>
                        </div>
                        <hr class="dividercont0"/>

                        <input type ="radio" class ="radioslider1" name="slider2" id="imgslider4l" checked/>

                        <input type ="radio" class ="radioslider1" name="slider2" id="imgslider4r"/>

                        <div class ="content000">

                        <div class ="contents0">
                        <a href="#" class ="linkcont0">
                        <div class ="imgcont0">
                        <img src={require("../img/tooimg1.jpg")} alt="bestphones0" class ="contentimg01"/>
                        </div>
                        <div class ="desccont0">
                        <p class ="desccont1">ray-Ban, fastrack & more</p>
                        <p class ="desccont2">20-60%</p>
                        <p class ="desccont3">frames</p>
                        </div>
                        </a>

                        </div>

                        <div class ="contents0">
                        <a href="#" class ="linkcont0">
                        <div class ="imgcont0">
                        <img src={require("../img/tooimg2.jpg")} alt="boeimg2" class ="contentimg01" />
                        </div>
                        <div class ="desccont0">
                        <p class ="desccont1">unbelievable deals on bags</p>
                        <p class ="desccont2">60-80% off</p>
                        <p class ="desccont3">american tourister</p>
                        </div>
                        </a>

                        </div>

                        <div class ="contents0">
                        <a href="#" class ="linkcont0">
                        <div class ="imgcont0">
                        <img src={require("../img/tooimg3.jpg")} alt="bestphones0" class ="contentimg01"/>
                        </div>
                        <div class ="desccont0">
                        <p class ="desccont1">azmani</p>
                        <p class ="desccont2"> from $2</p>
                        <p class ="desccont3">love what you wear</p>
                        </div>
                        </a>

                        </div>
                        <div class ="contents0">
                        <a href="#" class ="linkcont0">
                        <div class ="imgcont0">
                        <img src={require("../img/tooimg4.jpg")} alt="bestphones0" class ="contentimg00" id="shiftleftimg1"/>
                        </div>
                        <div class ="desccont0">
                        <p class ="desccont1">fossil, casio & more</p>
                        <p class ="desccont2">flat 30% off</p>
                        <p class ="desccont3">watches</p>
                        </div>
                        </a>

                        </div>

                        <div class ="contents0">
                        <a href="#" class ="linkcont0">
                        <div class ="imgcont0">
                        <img src={require("../img/tooimg5.jpg")} alt="bestphones0" class ="contentimg01" id="shiftleftimg0"/>
                        </div>
                        <div class ="desccont0">
                        <p class ="desccont1">invictus</p>
                        <p class ="desccont2">min 40% off</p>
                        <p class ="desccont3">men's belts</p>
                        </div>
                        </a>

                        </div>

                        <div class ="contents0">
                        <a href="#" class ="linkcont0">
                        <div class ="imgcont0">
                        <img src={require("../img/tooimg6.jpg")} alt="bestphones0" class ="contentimg01" id="shiftleftimg0"/>
                        </div>
                        <div class ="desccont0">
                        <p class ="desccont1">get stylish, get watch</p>
                        <p class ="desccont2"> from $4</p>
                        <p class ="desccont3">watches</p>
                        </div>
                        </a>

                        </div>

                        <div class ="contents0">
                        <a href="#" class ="linkcont0">
                        <div class ="imgcont0">
                        <img src={require("../img/tooimg7.jpg")} alt="bestphones0" class ="contentimg00"/>
                        </div>
                        <div class ="desccont0">
                        <p class ="desccont1">travel accessories</p>
                        <p class ="desccont2"> from $9</p>
                        <p class ="desccont3">budget buys</p>
                        </div>
                        </a>

                        </div>

                        <div class ="contents0">
                        <a href="#" class ="linkcont0">
                        <div class ="imgcont0">
                        <img src={require("../img/tooimg8.jpg")} alt="bestphones0" class ="contentimg01" id="shiftleftimg1"/>
                        </div>
                        <div class ="desccont0">
                        <p class ="desccont1">casio, fastrack & more</p>
                        <p class ="desccont2">upto 80% off</p>
                        <p class ="desccont3">women watches</p>
                        </div>
                        </a>

                        </div>







                        </div>
                        <label for="imgslider4l">
                        <img src={require("../img/slide_left.JPG")} class ="slideleft0" id="slideleft00" /> </label>
                        <label for="imgslider4r">
                        <img src={require("../img/slide_right.JPG")} class ="slideright0" id="slideright00" /></label>

                    </div>
        </div>
   
    )
}

                export default HomePage
