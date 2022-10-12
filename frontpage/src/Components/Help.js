import React from 'react'
import Cards from './Cards'
import "./help.css"

const Help = () => {


    const card = [{
        title: 'Collaborate',
        content: "Simmi Foundation serves in the collaboration with schools, colleges and other institutions.",
        link: 'http://google.com'
    
      },
      {
        title: 'Donate Money',
        content: "Your donation will further our mission of ensuring a happy and healthy life of those in need.",
        link: 'http://google.com'
    
      },
      {
        title: 'Be a Volunteer',
        content: "Even the all-powerful Pointing has no control about the blind texts.",
        link: 'http://google.com'
    
      },
      ]

  return (
    <>
    
    <div className="help d-flex flex-column justify-content-center align-items-center">
        <h1 className="help-title">How can you help us</h1>
        <div className="cards d-flex flex-column flex-md-row justify-content-between align-items-center">

          {
            card.map((card) => (
              <Cards  card={card} className="help-card"    />
            ))
          }

        </div>

      </div>
    
    </>
  )
}

export default Help