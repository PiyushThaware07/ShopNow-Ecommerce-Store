import React from 'react'

export default function cardsCarousel(props) {
  return (
    <>
      <div className="card w-full h-[165px] md:h-[380px] md:rounded-xl" style={{background:`url("${props.image}") no-repeat center`,backgroundSize:"cover"}}></div>
    </>
  )
}
