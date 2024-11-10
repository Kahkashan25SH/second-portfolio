import Link from 'next/link';
import React from 'react';
import { IoIosMail } from "react-icons/io";
import { MdOutlinePhonelinkRing } from "react-icons/md";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
          <h2 className='text-5xl font-semibold'><u>Contact Us</u></h2>
          <p className='text-[18px] pt-2'>
            We &apos re here to help you with any questions or concerns. Feel free to reach out to us at any time.
          </p>

          <div className='flex gap-3 items-center'>
            <IoIosMail size={40} />
            <span className="text-xl">ahmedalikahkashan@gmail.com</span>
          </div> 
          <div className='flex gap-3 items-center'>
            <MdOutlinePhonelinkRing size={40} />
            <span className="text-xl">0333-1237499</span></div>
           
            <Link href="/">
          <button className="mt-8 font-bold bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-white hover:text-yellow-700 transition">
            Go to Home Page
          </button>
        </Link>
        
        </div>
        <div className='space-y-8'data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
          <form>
            <div className='flex flex-col gap-1 text-yellow-400'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                className='h-[40px] bg-transparent border-2 border-white'
                id='name'
                required
              />
            </div>
            <div className='flex flex-col gap-1 text-yellow-400'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                className='h-[40px] bg-transparent border-2 border-white'
                id='email'
                required
              />
            </div>
            <div className='flex flex-col gap-1 text-yellow-400'>
              <label htmlFor='msg'>Message</label>
              <textarea
                className='bg-transparent border-2 border-white'
                id='msg'
                rows={8}
                placeholder='Write your message here...'
                required
              ></textarea>
            </div>
            <div className='flex justify-center'>
              <button className='mt-4 w-[200px] font-bold bg-white text-yellow-900 px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition'>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;