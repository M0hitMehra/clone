import React from 'react'
import './welcome.css'

const Welcome = () => {
  return (
    <div>
        
        <div className="welcome d-flex flex-column flex-sm-row " style={{backgroundColor:"black" , color:"white"}}>
            <div className='welcome-txt'>
                <h1>
                Welcome to SIMMI
                </h1>
                <p>
                Smart India Multi Management Institute is a pan India NGO registered in Haryana, India; carrying out welfare projects on education, healthcare, livelihood and women empowerment. We believe that unless members of the civil society are involved proactively in the process of development, sustainable change will not happen. Based on this, Simmi Foundation sensitizes and engages the civil society, making it an active partner in all its welfare initiatives.
                </p>
            </div>
            <div className='welcome-img'></div>
            <img src="https://simmifoundation.org/home/images/home/map-dark.png" alt="map" height="450px" width="350px" />
        </div>

    </div>
  )
}

export default Welcome