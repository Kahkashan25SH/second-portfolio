import Link from 'next/link';
import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
         <div className='text-xl font-bold'>Kahkashan</div>
           <ul className='font-bold gap-10 lg:gap-16 hidden md:flex'>
              <li className='menulink'><Link href='#hero'>Home</Link></li>
              <li className='menulink'><Link href='#about'>About</Link></li>
              <li className='menulink'><Link href='#projects'>Projects</Link></li>
              <li className='menulink'><Link href='#skills'>Skills</Link></li>
              <li className='menulink'><Link href='#contact'>Contact</Link></li>
         </ul>
         <div className='md:hidden' onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={30}/>
          : <AiOutlineMenu size={30}/>
        }
         </div>
      </div>

      {isMenuOpen && (
        <ul className='flex flex-col gap-4 mt-4 md:hidden'>
          <li className='menuLink'>
          <Link href="#hero" onClick={toggleMenu}>Home</Link>
          </li>
          <li className='menuLink'>
          <Link href="#about" onClick={toggleMenu}>About</Link>
          </li>
          <li className='menuLink'>
          <Link href="#projects" onClick={toggleMenu}>Projects</Link>
          </li>

          <li className='menuLink'>
          <Link href="#skills" onClick={toggleMenu}>Skills</Link>
          </li>
          <li className='menuLink'>
          <Link href="#contact" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      )}
    </div>
  

  )
}

export default Navbar