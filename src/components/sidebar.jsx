import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Home } from 'lucide-react'

const sidebar = () => {
  return (
   <>
   <DesktopSidebar></DesktopSidebar>
   <MobileSidebar></MobileSidebar>
   </>
  )
}


const DesktopSidebar = () => {
    return (
        <div className='p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block'>

        <div className='flex flex-col gap-20 sticky top-10 left-0'>

        <div className='w-full'>
          <img src="/logo.svg" alt="" className='hidden md:block' />
          <img src="/mobile-logo.svg" alt="" className='block md:hidden' />
        </div>

        <ul className='flex flex-col items-center md:items-start gap-8'>
            <Link to={"/"} className='flex gap-1'>
            <Home size={"24"}></Home>
            <span className='font-bold hidden md:block'>Home</span>
            </Link>
            <Link to={"/favorites"} className='flex gap-1'>
            <Heart size={"24"}></Heart>
            <span className='font-bold hidden md:block'>Favorites</span>
            </Link>
        </ul>

        </div>
        </div>
    )
}

const MobileSidebar = () => {
  return (
    <div className='flex justify-center gap-10 border-t fixed w-full
    bottom-0 left-0 bg-white z-10 p-2 sm:hidden' >
     
     <Link to={"/"}>
     <Home size={"24"} className='cursor-pointer'></Home>
     </Link>
  
     <Link to={"/favorites"}>
     <Heart size={"24"} className='cursor-pointer'></Heart>
     </Link>
    </div>
  )
}

export default sidebar