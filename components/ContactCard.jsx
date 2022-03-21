import React from 'react'
import MiniInfo from '../components/MiniInfo'
function ContactCard({title,op1,op2,op3,op4,sop1,sop2}) {
  return (
    <div className='flex border-b-2 mt-10'>
        <div className='w-1/3'>
            <h1 className="mt-2 ml-20 mb-6 text-3xl font-bold">{title}</h1>
        </div>
        <div className='w-2/3'>
          <div className='pl-20 grid grid-cols-2 gap-2 pb-10'>
            
            <MiniInfo op={op1} sop1={sop1} sop2={sop2} />
            <MiniInfo  op={op2} sop1={sop1} sop2={sop2} />
          </div>
          <div className='pl-20 grid grid-cols-2 gap-2 pb-10'>
            
            <MiniInfo op={op3} sop1={sop1} sop2={sop2} />
            <MiniInfo  op={op4} sop1={sop1} sop2={sop2} />
          </div>

        </div>
    </div>
  )
}

export default ContactCard