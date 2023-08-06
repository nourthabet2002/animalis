import React from 'react'
import Card from './Card'

const Cards = ({anim}) => {
  return (
    <div className='produits'>  
     {anim.map(el=><Card  el={el} />)}
     </div>
  )
}

export default Cards
