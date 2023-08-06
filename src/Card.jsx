import React from 'react'

const Card = ({el}) => {
  return (
    <div className='card'>
       <img src={el.imgsrc} alt="" />
      <p>{el.descripition}</p>
      <h3>{el.prix}</h3>
    </div>
  )
}

export default Card
