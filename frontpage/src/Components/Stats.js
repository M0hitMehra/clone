import React from 'react'

const Stats = () => {
    return (
        <>

            <div class="c-no body-heading container-fluid">
                <div class="row ">
                    <div class="col-4 counter-Txt">
                        <div class="inner-div" style={{ backgroundColor: "#f8702e" }}>
                            <span class="counter-value" data-count="10">10</span> Countries
                        </div>
                    </div>
                    <div class="col-4 counter-Txt">
                        <div class="inner-div" style={{ backgroundColor: "#fa8f3e padding-left:25% padding-right:25%" }}>
                            <span class="counter-value" data-count="150">150</span> Projects
                        </div>
                    </div>
                    <div class="col-4 counter-Txt margin-bot-35">
                        <div class="inner-div" style={{ backgroundColor: "#f9a93a" }}>
                            <span class="counter-value" data-count="10000">10000</span> Volunteers
                        </div>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-6 counter-Txt">
                        <div class="inner-div" style={{ backgroundColor: "#f9a93a padding-left:22% padding-right:22%" }}>
                            <span class="counter-value" data-count="20">20</span> States
                        </div>
                    </div>
                    <div class="col-6 counter-Txt">
                        <div class="inner-div" style={{ backgroundColor: "#f8702e" }}>
                            <span class="counter-value" data-count="500000">500000</span> Benificiries
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Stats