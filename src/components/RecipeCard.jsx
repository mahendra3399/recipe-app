import React from 'react'
import { Search, Soup, Heart, HeartPulse } from 'lucide-react'

const RecipeCard = ({recipe}) => {
  return (
    <div className='flex flex-col rounded-md bg-[#ecf7d4] overflow-hidden p-3 relative'>
            <a href="#" className='relative h-32'>
              <img src={recipe.image} alt="recipe img" style={{ height: '100%', objectFit: 'cover' }} className='rounded-md w-full object-cover cursor-pointer' />
              <div className='absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center
              gap-1 text-sm'>
                <Soup size={16}></Soup> {recipe.yield} Servings
              </div>
              <div className='absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer'>
                <Heart size={20} className='hover:fill-red-500 hover:text-red-500'></Heart>
              </div>
            </a>
         
         <div className='flex mt-1'>
          <p className='font-bold tracking-wide'>{recipe.label}</p>
         </div>
         <p className='my-2'>{recipe.cuisineType} Kitchen</p>

         <div className='flex gap-2 mt-auto'>

          <div className='flex gap-1 bg-[#d6f497] items-center p-1 rounded-md'>
           <HeartPulse size={16}></HeartPulse>
           <span className='text-sm tracking-tighter font-semibold'>Gluten-free</span>
          </div>

          <div className='flex gap-1 bg-[#d6f497] items-center p-1 rounded-md'>
           <HeartPulse size={16}></HeartPulse>
           <span className='text-sm tracking-tighter font-semibold'>Heart-Healthy</span>
          </div>
          
         </div>

        </div>
  )
}

export default RecipeCard
