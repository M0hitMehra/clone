import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';


const Speakers = () => {
    return (
        <div>

            {/* <Carousel autoPlay={true} centerMode={true} >

                <div>
                <img src='https://simmifoundation.org/home/images/speakers/sneha_agarwal.jpg' style={{ height: "150px" ,width:"150px" }} />
                </div>
                <div>
                <img src='https://simmifoundation.org/home/images/speakers/sneha_agarwal.jpg' style={{ height: "150px" ,width:"150px" }} />
                </div><div>
                <img src='https://simmifoundation.org/home/images/speakers/sneha_agarwal.jpg' style={{ height: "150px" ,width:"150px" }} />
                </div><div>
                <img src='https://simmifoundation.org/home/images/speakers/sneha_agarwal.jpg' style={{ height: "150px" ,width:"150px" }} />
                </div><div>
                <img src='https://simmifoundation.org/home/images/speakers/sneha_agarwal.jpg' style={{ height: "150px" ,width:"150px" }} />
                </div><div>
                <img src='https://simmifoundation.org/home/images/speakers/sneha_agarwal.jpg' style={{ height: "150px" ,width:"150px" }} />
                </div>

            </Carousel> */}

            <section id="partners" className='d-flex flex-column justify-content-between ' >
                <h3 class="body-heading mx-auto">Our Prominent Speaker</h3>

                <div class="row ">
                    <div class="ind-partner col-lg-2 col-md-2 col-sm-6" data-aos="fade-up" data-aos-duration="1000" >
                        <img src="https://simmifoundation.org/home/images/speakers/sneha_agarwal.jpg" height="200" width="200" alt="" />
                        <p class="orange-color"> </p>
                    </div>
                    <div class="ind-partner col-lg-2 col-md-2 col-sm-6" data-aos="fade-up" data-aos-duration="1000">
                        <img src="https://simmifoundation.org/home/images/speakers/megha_meelu.jpg" height="200" width="200" alt="" />
                        <p class="orange-color"> </p>
                    </div>
                    <div class="ind-partner col-lg-2 col-md-2 col-sm-6" data-aos="fade-up" data-aos-duration="1000">
                        <img src="https://simmifoundation.org/home/images/speakers/sandeep_narwal.jpg" height="200" width="200" alt="" />
                        <p class="orange-color"> </p>
                    </div>
                    <div class="ind-partner col-lg-2 col-md-2 col-sm-6" data-aos="fade-up" data-aos-duration="1000">
                        <img src="https://simmifoundation.org/home/images/speakers/amit_hooda.jpg" height="200" width="200" alt="" />
                        <p class="orange-color"> </p>
                    </div>
                    <div class="ind-partner col-lg-2 col-md-2 col-sm-6" data-aos="fade-up" data-aos-duration="1000">
                        <img src="https://simmifoundation.org/home/images/speakers/vikas_kandola.jpg" height="200" width="200" alt="" />
                        <p class="orange-color"> </p>
                    </div>
                    <div class="ind-partner col-lg-2 col-md-2 col-sm-6" data-aos="fade-up" data-aos-duration="1000">
                        <img src="https://simmifoundation.org/home/images/speakers/kevel_kaka.jpg" height="200" width="200" alt="" />
                        <p class="orange-color">  6</p>
                    </div>
                </div>

            </section>


        </div>
    )
}

export default Speakers