import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

  
export default function Header() {
  return (
    <div>
      <div className='w-full h-screen bg-cover bg-[url(/aventador.jpg)] p-32'>
        <div className='text-white'>
          <p className='text-4xl c'>DESIGNED BY NEW DESIRES</p>
          <h1 className='text-8xl font-bold'>LAMBORGHINI</h1>
          <h1 className='text-8xl font-bold'>LANZADOR</h1>
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
