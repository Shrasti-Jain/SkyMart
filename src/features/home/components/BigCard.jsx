import { ArrowRight, Star, Zap } from 'lucide-react'
import React from 'react'
import BigCardItem from './BigCardItem'

const BigCard = ({elem,cate}) => {
  
  return (
    <div className='w-[50%] text-black p-8 bg-white rounded-3xl flex flex-col '>
         <div className='flex justify-between items-center'>
          <div className='flex justify-between items-center gap-2 '> 
            {
              cate=="Top Rated"?<h3><Star fill='#FBBF24' color='#FBBF24'/></h3>:<h3><Zap fill='#C8F400' color='#C8F400'/></h3>
            }
            <h1 className='font-bold text-xl'>{cate}</h1>
          </div>
          <div>
            <h4 className='text-sm flex text-[#C8F400]'>See all <ArrowRight color='#C8F400'/></h4>
          </div>
         </div>
         <div className='mt-5 flex flex-col gap-3'>
           {
            elem.map((e)=><BigCardItem e={e}/>)
           }
         </div>
    </div>
  )
}

export default BigCard
