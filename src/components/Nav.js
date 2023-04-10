import { Dropdown } from 'bootstrap';
import React, { useState, useEffect } from 'react';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem("user");
    const [products, setProducts] = useState('');
    const navigate = useNavigate();


    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/getphotos');
        result = await result.json();
        setProducts(result);
        //console.warn(result);
    }

    const searchHandle = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await (`http://localhost:5000/searchtags/${key}`);
            result = await result.json();
            if (result) {
                setProducts(result)
            }
        } else {
            getProducts();
        }
    }

    const logout = () => {

        localStorage.clear();
        navigate('/')
    }
    return (
        <div>
            <header class="header">

                <a href="#" class="logo"> <i class="fas fa-camera"></i> UTU Gallery </a>

                {auth ? <nav class="navbar">
                    <a className='logout' >Welcome, <Link to={"/profilea/" + JSON.parse(auth)._id}>{JSON.parse(auth).fname} {JSON.parse(auth).lname} </Link></a>

                    <a><button className='dropbtn'><Link to="/adminphotolist">All Photos</Link></button>
                    </a>
                    <a><button className='dropbtn'><Link to="/managecmt">Manage Comments</Link></button>
                    </a>
                    <a>
                        <div className='dropdownn'>
                            <button className='dropbtn'>Manage Category</button>
                            <div className='dropdownn-content'>
                                <li><Link to="/categories">Add Category</Link></li>
                                <li><Link to="/managecategories">Manage Category</Link></li>
                            </div>
                        </div>
                    </a>

                    <a>
                        <div className='dropdownn'>
                            <button className='dropbtn'>Manage Institute</button>
                            <div className='dropdownn-content'>
                                <li><Link to="/institutes">Add institute</Link></li>
                                <li><Link to="/manageInstitute">Manage institute</Link></li>
                            </div>
                        </div>
                    </a>

                    <a>
                        <div className='dropdownn'>
                            <button className='dropbtn'>Manage User</button>
                            <div className='dropdownn-content'>
                                <li><Link to="/photoglist">Photographers list</Link></li>
                                <li><Link to="/viewerlist">Viewer list</Link></li>
                            </div>
                        </div>
                    </a>
                    <a>
                        <div className='dropdownn'>
                            <button className='dropbtn'><Link onClick={logout} to="/SignUp">Logout</Link></button>
                        </div>  </a>
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
export default Nav;