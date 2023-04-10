import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {

    const [photos, setPhoto] = React.useState([]);
    const [img, setImg] = React.useState([])
    const navigate = useNavigate();
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        getalllist();

    }, [])

    const getalllist = async () => {
        let result = await fetch("http://localhost:5000/getphotos");
        result = await result.json();
        const sort = result.sort((a, b) => b - a)
        console.log(result)
        console.warn(sort)
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

            </section> */}

            <section class="products" id="products" style={{ marginTop: "5%" }}>

                <h1 class="heading"> UTU <span> Media </span> </h1>

                <div class="swiper product-slider">

                    <div class="divmargin" >
                        <div class="wrap" >

                            {
                                photos.length > 0 ? photos.map((item, index) => (
                                    <div class="tile" >
                                        <img src={`http://localhost:5000/${item.photo}`} alt=""></img>
                                        <div class="text" >

                                            <h1 className="animate-text">{item.imgname}</h1>
                                            <h2 className="animate-text">{item.category}</h2>
                                            <h2 className="animate-text">{item.tag}</h2>
                                            <a className="animate-text"><button className="dropbtn"><Link to={"/photoviewc/" + item._id}>View</Link></button></a>
                                            <a className="animate-text"><button className="dropbtn"><Link to={"/Login"}>add comment</Link></button></a>
                                         
                                        </div>
                                    </div>
                                ))
                                    : <p>
                                        <strong>No record found</strong>
                                    </p>

                            }
                        </div>
                    </div>

                </div>




            </section>
        </>


    )
}

export default Homepage;