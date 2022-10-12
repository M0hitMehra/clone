import React from 'react'
import Cards from './Cards'
import "./objectives.css"

const Objectives = () => {

  const card = [{
    img: 'https://simmifoundation.org/home/images/objectives/education.jpg',
    title: 'Education',
    content: "We provide free academic education, scholarship, training and other incentives to the children.",
    link: 'http://google.com'

  },
  {
    img: 'https://simmifoundation.org/home/images/objectives/livelihood.jpg',
    title: 'Livelihood',
    content: "We implement various schemes to provide livelihood and uplift the poor in society.",
    link: 'http://google.com'

  },
  {
    img: 'https://simmifoundation.org/home/images/objectives/healthcare.jpg',
    title: 'Healthcare',
    content: "We are increasing awareness on Sanitization and providing people with access to better nutrition, clean water and toilets.",
    link: 'http://google.com'

  },
  {
    img: 'https://simmifoundation.org/home/images/objectives/women%20empowerment.jpg',
    title: 'Women and Youth Empowerment',
    content: "We focus on providing equal opportunities for women in the work field.",
    link: 'http://google.com'

  }]




  return (
    <>

      <div className=" objectives d-flex flex-column justify-content-center align-items-center">
        <h1 className="objectives-title">Objectives</h1>
        <div className="cards d-flex flex-column flex-md-row justify-content-between align-items-center">

          {
            card.map((card) => (
              <Cards img={true} card={card} />
            ))
          }

        </div>

      </div>

    </>
  )
}

export default Objectives