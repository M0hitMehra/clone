import React from 'react'
import './card.css'

const Cards = ({img=false , card }) => {

    return (
        <>

            <div className=" card1 mx-5  shadow mb-5 bg-body rounded ">
                <div class="card blur " style={{width: "18rem"}}>
                  {img &&  <img src={card.img} class="card-img-top shadow  bg-body rounded  " style={{height: "200px"}}  />}
                    <div class="card-body d-flex flex-column justify-content-around align-items-center"  style={{height: "300px"}}>
                        <h5 class="card-title">{card.title}</h5>
                        <p class="card-text">{card.content}</p>
                        <a href={card.link} class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cards