import React from 'react'
import  Navbar from './Navbar'
  

const Hero = () => {
  return (
    
    <div id="hero"className='min-h-screen bg-no-repeat 
     bg-[url(/images/profile.png)] bg-coverd'
     style={{backgroundSize: '30%',backgroundPosition:"left 100px top 130px"}}
     >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-yellow-200 text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
         <div data-aos="zoom-in-down">
            <p>I m</p>
            <p>Kahkashan</p>
            <p>Hashmi</p>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Hero