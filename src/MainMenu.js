import React from 'react'
import { Link } from 'react-router-dom'

export const MainMenu = () => {
  return (

    <div className='flex flex-wrap justify-center'>
        <div className='w-full pb-16 overflow-hidden'>
            <img src="/images/restaurant.jpg" alt="Example" className='w-screen lg:h-96 h-72 object-cover object-top opacity-85'/>
        </div> 

        <div className='pb-8 lg:w-4/6 max-h-full flex flex-wrap m-2'>
            <Link to='/ana' className='relative w-full bg-slate-700 h-72 mb-4 rounded-xl'>  
                    <img src='/images/ana-yemek.jpg' alt='Ana Yemek' className='object-cover w-full h-full relative opacity-55 rounded-xl'/>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <span className='text-white lg:text-8xl text-6xl'>Ana Yemek</span>
                    </div>  
            </Link>

            <Link to='/döner' className='relative w-3/6 bg-slate-700 h-96 rounded-xl'>
                <img src='/images/döner.jpg' alt='Dönerler' className='object-cover w-full h-full opacity-55 rounded-xl'/>
                <div className='absolute inset-0 flex items-center justify-center'>
                    <span className='text-white lg:text-6xl text-4xl'>DÖNERLER</span>
                </div>
            </Link>
            
            <div className='w-3/6 flex flex-col gap-4 h-96 pl-4'>
                <Link to='/atıştırmalık' className='relative w-full bg-slate-700 h-44 rounded-xl'>
                    <img src='/images/atıstırmalık.jpg' alt='Atıştırmalıklar' className='object-cover h-full w-full opacity-55 rounded-xl'/>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <span className='text-white lg:text-4xl text-2xl'>ATIŞTIRMALIK</span>
                    </div>
                </Link>
                <Link to='/içecek' className='relative w-full bg-slate-700 h-48 rounded-xl'>
                    <img src='/images/icecekler.jpg' alt='İçecekler' className='object-cover h-full w-full opacity-55 rounded-xl'/>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <span className='text-white lg:text-4xl text-2xl'>İÇECEKLER</span>
                    </div>
                </Link>
            </div>
            
        </div>
    </div>
    
  )
}
