import React from 'react'

function MiniInfo({op,sop1,sop2}) {
  return (
    <div>
        <h4 className='mt-2 mb-6 text-xl font-semibold'>{op}</h4>
        <p>{sop1}</p>
        <p>{sop2}</p>
    </div>
  )
}

export default MiniInfo