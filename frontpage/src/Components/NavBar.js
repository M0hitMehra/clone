import React from 'react'

const NavBar = () => {
    return (
        <div className=' fixed-top'>

            <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
                    <div className="collapse navbar-collapse d-flex flex-md-row-reverse " id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Donate</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link "  href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Volunteer</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link "  href="#">Events</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Careers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacts</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <marquee width="100%" direction="left" height="30px" scrollamount="12" class="rolling-text" style={{background:"white"}}>
         Smart India Multi Management Institute! &ensp;  स्मार्ट इंडिया बहुद्देश्यीय प्रबन्धन संस्थान! &ensp; Registration number : 085953/2020  &ensp; Niti Aayog (Govt. Of India ) Unique Id : HR/2020/0258148
    </marquee>
        </div>
    )
}

export default NavBar