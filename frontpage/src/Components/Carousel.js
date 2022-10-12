import React from 'react'

const Carousel = () => {
    return (

        <>

            <div id="carouselExampleIndicators" class="carousel slide  mt-5" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://simmifoundation.org/home/admin/upload/img71e24d0f53.jpg" class="d-block w-100" alt="..." width='1000px' height="670px" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://simmifoundation.org/home/admin/upload/img6e825bdb65.jpeg" class="d-block w-100" alt="..." width='1000px' height="670px" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://simmifoundation.org/home/admin/upload/imga75b483924.jpg" class="d-block w-100" alt="..." width='1000px' height="670px" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </>

    )
}

export default Carousel