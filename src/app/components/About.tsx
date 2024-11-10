import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='container mt-40'data-aos="zoom-out">
        <h2 className='text-5xl font-semibold'><u>About Me</u></h2><br />
        <p className='text-lg md:text-xl'> Hi, I m [Kahkashan], a dedicated student currently learning web development at Saylani Welfare Trust and Governor House Karachi. I am building my skills in both front-end and back-end technologies, including HTML, CSS, JavaScript, and Next.js, with a strong interest in creating dynamic and user-friendly applications. With every project and assignment, I aim to grow and learn more about the world of full-stack development. My goal is to become a proficient full-stack developer, able to design and develop complete solutions that can make a difference in the tech industry.</p>

        <div className="mt-10">
          <Link href="/">
          <button className="font-bold bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-white hover:text-yellow-700 transition">
            Go to Home Page</button>
          </Link>
       </div>
    </div>
  )
}

export default About