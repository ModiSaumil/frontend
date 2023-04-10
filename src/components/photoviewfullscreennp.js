import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";

const Photoviewfullacreenv = () => {
    const [photo, setPhoto] = React.useState([]);
    const [comment, setCmt] = React.useState("");
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    const navigate = useNavigate();
    const params = useParams();
    useEffect(() => {
        getalllist();
    }, [])
    const alerte = async () => {
        alert("please login to add comment");
    }

    const getalllist = async () => {
        let result = await fetch(`http://localhost:5000/getPhotosbyid/${params.id}`);
        result = await result.json();
        setPhoto(result)
    }
    console.warn("photo", photo);

    return (
        <div style={{ marginTop: "5%" }}>
            <section class="products" id="products">
                <div class="swiper product-slider">
                    <div class="swiper-wrapper">
                        <table className='tablecss'>
                            <tbody>
                                {
                                    photo.length > 0 ? photo.map((item, index) => (
                                        <div class="swiper-slide box">
                                            <tr key={item._id}>
                                                <td>
                                                    {item ?
                                                        <img src={`http://localhost:5000/${item.photo}`} alt={item.imgname} />

                                                        :
                                                        <span>deleted</span>
                                                    }                                                </td>

                                            </tr>
                                        </div>
                                    ))
                                        : <p>
                                            <strong>No record found</strong>
                                        </p>

                                }
                                <tr>
                                    <td>
                                        <input className="inputbox" type="text"
                                            value={comment} onChange={(e) => setCmt(e.target.value)}
                                            placeholder='enter to add comment..'></input>
                                        <button className="btnsn" onClick={alerte} type="button">Submit</button>

                                    </td>
                                    <td>
                                        <div className="like-button-container">
                                            <button
                                                className={`like-button ${liked ? 'liked' : ''}`}
                                                onClick={() => {
                                                    setLikes(likes + 1);
                                                    setLiked(true);
                                                }}
                                            >
                                                {likes} Likes
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>




            </section>

        </div>
    )
}
export default Photoviewfullacreenv;
