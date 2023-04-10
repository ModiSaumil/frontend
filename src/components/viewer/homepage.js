import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
    const [photos, setPhoto] = React.useState([]);
    const [img, setImg] = React.useState([])
    const navigate = useNavigate();

    useEffect(() => {
        getalllist();

    }, [])

    const getalllist = async () => {
        let result = await fetch("http://localhost:5000/getphotos");
        result = await result.json();
        console.log(result)
        setPhoto(result)
        //http://192.168.1.103:5000/
        // localStorage.setItem("photos", JSON.stringify(result));
        // // const userid = JSON.parse(localStorage.getItem("user"))._id;
        // const photol = JSON.parse(localStorage.getItem('photos')).photo;
        // setImg(photol)
        // console.warn(photo)
    }
    // console.warn("photo", photos);

    const searchHandle = async (event) => {

        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5000/searchtags/${key}`)
            result = await result.json();
            if (result) {
                setPhoto(result);
            }
        } else {
            getalllist();
        }

    }

    return (
        <>
            {/* <section class="home" id="home">

                <div class="content">
                    <h3>fresh and <span>organic</span> products for your</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi.</p>
                    <a href="#" class="btn">shop now</a> 
                </div>

            </section>*/}
            <section class="products" id="products" style={{ marginTop: "5%" }}>

                <h1 class="heading"> our <span> Media </span> </h1>
                <input className="inputbox" onChange={searchHandle} type="text" placeholder='enter any tag to search..'></input>

                <div class="swiper product-slider" >

                    <div class="divmargin" >
                        <div class="wrap" >

                            {
                                photos.length > 0 ? photos.map((item, index) => (
                                    <div className="tile" >
                                        <img src={`http://localhost:5000/${item.photo}`} alt="aree yaarrrr" />
                                        <div class="text" >
                                            <h1 className="animate-text">{item.imgname}</h1>
                                            <h2 className="animate-text">{item.category}</h2>
                                            <h2 className="animate-text">{item.tag}</h2>
                                            <button className="animate-text" style={{backgroundColor:"skyblue",border:"none",borderRadius:"10px",padding:"5px"}}><Link to={"/photoviewv/" + item._id}>View</Link></button>
                                            {/* <button className="animate-text"><Link to={"/Login"}>add comment</Link></button> */}
                                        </div>
                                    </div>

                                ))
                                    : <p><strong>No Records
                                        Found!</strong></p>
                            }
                        </div>
                    </div>

                </div>




            </section>
        </>
    )
}

export default Homepage;
