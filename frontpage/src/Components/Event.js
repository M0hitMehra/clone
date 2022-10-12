import React from 'react'

const Event = () => {
  return (
    <>
    
    <div class="card col-md-4 aos-init aos-animate  w-25  " data-aos="zoom-in" data-aos-duration="1000" style={{height:"800px" ,marginLeft:"100px",marginRight:"100px" ,marginTop:"50px"}}>
                <img class="card-img-top h-50" src="https://simmifoundation.org/admin/images/events/Image(17).jpeg" alt="Card image cap" />
                <div class="card-body">
                    <a href="event.php">
                        <h5 class="card-title">Marathon Event </h5>
                    </a>
                    <p class="card-text"><span class="text-muted"><i class="fas fa-map-marked-alt" aria-hidden="true"></i>Delhi </span></p>
                    <p class="card-text">
                        <span class="text-muted"><i class="fas fa-clock" aria-hidden="true"></i>22:25:00 - 23:25:00 </span>
                        <span class="text-muted" style={{paddingLeft: "3%;"}}><i class="fas fa-calendar-alt" aria-hidden="true"></i>2020-07-09 </span>
                    </p>
                    <p class="card-text" style={{maxHeight:"124px" , overflow:"hidden"}}>Lorem Ipsum generator a baeeLorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee </p>
                    <div class="card-footer">
                        <a href="/event.php">Read more <i class="fas fa-angle-right fa-1x" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>

    
    </>
  )
}

export default Event