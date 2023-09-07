import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Dealer() {
  return (
    <div>
    <div className='w-full h-screen bg-[url(/533702.jpg)] p-32'>
      <div className='text-white'>
        <p className='text-4xl c'>DEALER LOCATOR</p>
        <h1 className='text-8xl font-bold'>FIND YOUR</h1>
        <h1 className='text-8xl font-bold'>COUNTRY DEALER</h1>
        <Link>
          <div className='h-14 w-14 rounded-full border-white border-2 flex items-center justify-center mt-5'>
            <BsChevronRight size={25} />
          </div>
        </Link>

      </div>
    </div>


  </div>
  )
}
