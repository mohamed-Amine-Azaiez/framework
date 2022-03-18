import React from 'react'
import Rcard from './Rcard'

function place({img,p1,p2,p3,location,title,price,id}) {
  return (
    <div>
        <Rcard img={img} location={location} title={title} p1={p1} p2={p2} p3={p3} price={price} id={id} />
    </div>
  )
}

export default place