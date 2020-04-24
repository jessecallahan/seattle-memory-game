import React from 'react'
import './Card.css'

const Card = props => {
  const { frontImg, backImg, flipped, onClick } = props
  const img = flipped ? frontImg : backImg
  return (
    <div className="Card" onClick={onClick}>
      <img className="cover" src={img} alt="" />
    </div>
  )
}

export default Card