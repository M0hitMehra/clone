import React from 'react'
import "./About.css"

const About = () => {
    return (
        <>

            <div class="footer ftco-section img" style={{paddingBottom:"0.5rem" , backgroundColor:"#212529"}}>
                <div class="overlay"></div>
                <div class="container">
                    <div class="row mb-2">
                        <div class="col-md-4">
                            <div class="ftco-footer-widget mb-4">
                                <h2 class="ftco-heading-2">About Us</h2>
                                <p class="footer-text">We envisions to develop a society based on legitimate rights, equity, justice, honesty, social sensitivity and a culture of service in which all are self-reliant. </p>
                                <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                    <li class="ftco-animate aos-init" data-aos="fade-up"><a href="https://twitter.com/simmifoundation/ " target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
                                    <li class="ftco-animate aos-init" data-aos="fade-up"><a href="https://fb.me/simmifoundation.org" target="_blank"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                                    <li class="ftco-animate aos-init" data-aos="fade-up"><a href="https://www.instagram.com/simmifoundation/" target="_blank"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="ftco-footer-widget mb-4">
                                <h2 class="ftco-heading-2">Initiatives</h2>
                                <div class="row">
                                    <div class="col-md-5">
                                        <ul class="list-unstyled">
                                            <li><a href="../Khel-Sanghthan.php" class="py-2 d-block"> Khel Sangathan</a></li>
                                            <li><a href="../Sukoon-Parikram.php" class="py-2 d-block">Sukoon Parikram </a></li>
                                            <li><a href="../Simmi-Olympiads.php" class="py-2 d-block">Simmi Olympiads </a></li>
                                            <li><a href="../Kalaakaar-manch.php" class="py-2 d-block">Kalaakaar Manch</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-md-7">
                                        <ul class="list-unstyled">
                                            <li><a href="../Sanskritik-Setu.php" class="py-2 d-block">Sanskritik Setu</a></li>
                                            <li><a href="../Sambhav-Madad.php" class="py-2 d-block">Sambhav Madad</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="ftco-footer-widget mb-4">
                                <h2 class="ftco-heading-2">Have Questions?</h2>
                                <div class="block-23">
                                    <ul>
                                        <li><a><i class="icon fas fa-map-marker-alt" aria-hidden="true"></i> <span class="text">479, Baspadamka, Tehsil Pataudi, Gurugram, Haryana - 122503, India</span></a></li>
                                        <li><a href="#"><i class="icon fas fa-phone-alt" aria-hidden="true"></i> <span class="text">(+91) 70152 - 95025</span></a></li>
                                        <li><a href="mailto: support@simmifoundation.org"><i class="icon fas fa-envelope" aria-hidden="true"></i> <span class="text">support@simmifoundation.org</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <img src="https://simmifoundation.org/home/images/logo.png" height="50px" />
                            <img src="https://simmifoundation.org/home/images/NITI-Aayog-logo.png" height="50px" />
                            <p>Our Registration number : 085953/2020<br />
                                Niti Aayog (Govt. Of India ) Unique Id : HR/2020/0258148<br />
                            </p><hr /><p>Copyright ©<script>document.write(new Date().getFullYear());</script>2022 All rights reserved | Simmi Foundation
                                <i class="fas fa-heart" aria-hidden="true"></i></p><p></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About