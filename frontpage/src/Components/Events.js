import React from 'react'
import Event from './Event'

const Events = () => {
    return (
        <>

           <div className="events d-flex flex-column  justify-content-around align-items-center" style={{backgroundColor:"black" ,color:"black"}} >
            <div className="heading ">
                <h1 style={{color:"white"}} >Current and Upcoming Events</h1>
            </div>
            <div className='_cards d-flex flex-wrap justify-content-around align-items-center'>
                    <Event />
                    <Event />
                    <Event />
                    <Event />
                    <Event />
                    <Event />
                    <Event />
                    <Event />
                    
            </div>
           </div>

        </>
    )
}

export default Events