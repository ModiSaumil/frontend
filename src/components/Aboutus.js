import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Aboutus = () => {

    const navigate = useNavigate();

    useEffect(() => {

        const auth = localStorage.getItem("role");
        console.log(auth);
        if (auth) {
            if (auth === "admin") {
                navigate("/adminphotolist")
            }
            else if (auth === "viewer") {
                navigate("/home")
            }
            else if (auth === "photog") {
                navigate("/photoadd")
            }
            else {
                navigate("/Login")
            }
        }
    })


    return (
        <div >



            <section class="home" id="home">

                <div class="content">
                    <h3>UKA<span>TARSADIA</span>UNIVERSITY</h3>
                    <p>NAAC accredited 'B+' Grade with CGPA 2.74</p>
                </div>

            </section>


            <section class="features" id="features">

                <h1 class="heading"> our <span>features</span> </h1>

                <div class="box-container">

                    <div class="box">
                        <h1><i class="fas fa-map"></i></h1>
                        <h1 className='h1tag'>Uka Tarsadiya University</h1>
                        <a href='http://utu.ac.in/' target="_blank"><h2>Visit US</h2></a>

                    </div>
                    <div class="box">
                        <h1><i class="fas fa-handshake"></i></h1>
                        <h1 class='h1tag'>Collaborations</h1>
                        <a href="http://utu.ac.in/Collaborations.html" target="_blank"><h2>50+</h2></a>
                    </div>
                </div>
                <div class="box-container" style={{ marginTop: "10px" }}>

                    <div class="box">
                        <h1><i class="fas fa-user"></i></h1>
                        <h1 className='h1tag'>Happy Staff</h1>
                        <a href='http://utu.ac.in/' target="_blank"><h2>550+</h2></a>

                    </div>
                    <div class="box">
                        <h1><i class="fas fa-users"></i></h1>
                        <h1 class='h1tag'>Happy Students</h1>
                        <a href="http://utu.ac.in/" target="_blank"><h2>10000+</h2></a>
                    </div>
                </div>
            </section>


        </div>

    )
}

export default Aboutus;