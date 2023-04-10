import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const CommonNav = () => {
    const auth = localStorage.getItem("user");
    const navigate = useNavigate();

    const logout = () => {

        localStorage.clear();
        navigate('/')
    }
    return (
        <div>
            <header class="header">

                <a href="#" class="logo"> <i class="fas fa-camera"></i> UTU Gallery </a>

                {auth ? <nav class="navbar">

                </nav>
                    :
                    <nav class="navbar">
                        <Link to="/">Home<a></a></Link>
                        <Link to="/aboutus">About Us<a></a></Link>
                        <Link to="/SignUp">SignUp<a></a></Link>
                        <Link to="/Login">Login<a></a></Link>

                        {/* <div class="icons">
                            <div class="fas fa-bars" id="menu-btn"></div>
                            <div class="fas fa-search" id="search-btn"></div>
                            <div class="fas fa-shopping-cart" id="cart-btn"></div>
                            <div class="fas fa-user" id="login-btn"></div>
                        </div> */}

                    </nav>
                }

            </header>
        </div>
    )
}

export default CommonNav;