import React from 'react'

const FundCard = () => {
  return (
    <>
    
    
    <div class="card col-md-4 aos-init aos-animate w-25"  style={{height:"700px" ,marginLeft:"100px",marginRight:"100px" ,marginTop:"50px"  }} data-aos="zoom-out" data-aos-duration="1000">
                <img class="card-img-top" src="https://simmifoundation.org/admin/images/fundRaisers/WhatsApp%20Image%202021-11-09%20at%2010.34.25.jpeg" alt="Card image cap" />
                <div class="card-body">
                    <a href="#">
                        <h5 class="card-title" style={{color:"black"}} > Test Fund Raiser Kavach</h5>
                    </a>
                    <p class="card-text" style={{ maxHeight: "124px", overflow: "hidden" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sit amet consectetur adipiscing elit duis tristique</p>
                    <p class="card-text" style={{ fontWeight: "bold" }}>15000 raised of 30000</p>
                    <div class="progress" style={{ height: "5px" }}>
                        <div class="progress-bar" role="progressbar" style={{ width: " 50%", backgroundColor: "#f58634" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="card-footer">
                        <a href="#"  style={{color:"black"}}  >Read more <i class="fas fa-angle-right fa-1x" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>

    
    </>
  )
}

export default FundCard