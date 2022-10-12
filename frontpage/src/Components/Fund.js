import React from 'react'
import FundCard from './FundCard'

const Fund = () => {
    return (
        <>

        <div className='fund  d-flex flex-column  justify-content-around align-items-center'    >
            <div className='fundheader d-flex flex-column  justify-content-around align-items-center'>
                <h1 style={{color:"black"}} >Fundrasier</h1>
                <p style={{color:"black"}} >A Little change can make small difference</p>
            </div>
            <div className='  d-flex flex-wrap justify-content-around align-items-center '>
                <FundCard />
                <FundCard />
                <FundCard />
                <FundCard />
            </div>
        </div>


        </>
    )
}

export default Fund