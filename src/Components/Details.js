import React from 'react'
import { useParams } from 'react-router-dom'

const Details = ({list}) => {
    const {id}=useParams()
   
    const tour=list.find((el)=>el.id==id)
  return (
    <div>
        <div className="home-container">
      <img
        src={tour.image}
        alt="404"
      />
      <div className="content">
        <h2>{tour.name}</h2>
        <p>
         {tour.info}
        </p>
      </div>
    </div>
    </div>
  )
}

export default Details