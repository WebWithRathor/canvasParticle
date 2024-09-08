import React from 'react'

const Nav = () => {
  return (
    <nav className='w-full fixed top-0 left-0 px-20 py-10 flex justify-between items-center'>
        <h1 className='text-3xl'>IDM VTON</h1>
        <h1 className='flex items-center gap-2'>menu <div className="circle h-2 aspect-square bg-gray-200 rounded-full"></div> </h1>
    </nav>
  )
}

export default Nav