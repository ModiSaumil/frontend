import React, { Component } from 'react'

const Footer = () => {
    return (
        <div>
            <section class="footer">

                <div class="box-container">

                    <div class="box">
                        <h3> UTU Gallery <i class="fas fa-camera"></i> </h3>
                        <p>Established under Gujarat Private University(Amendment) Act No. 25 - 2011 Government of Gujarat and approved under section 22 of UGC Act 1956.</p>
                        <div class="share">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-google"></a>
                        </div>
                    </div>

                    <div class="box">
                        <h3>contact info</h3>
                        <a href="#" class="links"> <i class="fas fa-phone"></i> +91-9805673478 </a>
                        <a href="#" class="links"> <i class="fas fa-phone"></i> +91-9876569765 </a>
                        <a href="#" class="links"> <i class="fas fa-envelope"></i> registrar@utu.ac.in </a>
                        <a href="#" class="links"> <i class="fas fa-map-marker-alt"></i> Gujarat, India </a>
                    </div>

                    <div class="box">
                        <h3>quick links</h3>
                        <a href="#" class="links"> <i class="fas fa-arrow-right"></i> home </a>
                        {/*<a href="#" class="links"> <i class="fas fa-arrow-right"></i> features </a>
                        <a href="#" class="links"> <i class="fas fa-arrow-right"></i> products </a>
                        <a href="#" class="links"> <i class="fas fa-arrow-right"></i> categories </a>
                        <a href="#" class="links"> <i class="fas fa-arrow-right"></i> review </a>
                        <a href="#" class="links"> <i class="fas fa-arrow-right"></i> blogs </a> */}
                    </div>

                    {/* <div class="box">
                        <h3>newsletter</h3>
                        <p>subscribe for latest updates</p>
                        <input type="email" placeholder="your email" class="email"></input>
                        <input type="submit" value="subscribe" class="btn"></input>
                        <img src="./image/payment.png" class="payment-img" alt=""></img> 
                    </div> */}

                </div>

                <div class="credit"> created by <span><a href="#">Saumil Modi & Bhakti Patel</a></span> | all rights reserved </div>

            </section>
        </div>

    )
}

export default Footer;