import Link from 'next/link'
import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="fade-up">
        <h2 className='text-5xl font-semibold'><u>Skills</u></h2><br />
        <p className=' text-white pt-2 text-xl'> I have a solid foundation in essential web development technologies including HTML, CSS, and JavaScript. Additionally, I have basic experience with TypeScript, Tailwind CSS, Bootstrap, and Next.js, which allows me to create structured, responsive, and visually appealing websites. My journey with these tools is ongoing, and I am excited to continue expanding my skills, applying them to real-world projects, and enhancing my understanding of web development best practices.</p>
         <div className='mt-6'>
         <Link href="/">
            <button className="font-bold bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-white hover:text-yellow-700 transition">Go to Home Page</button>
          </Link>
          </div>
      </div>
      <div className='grid-cols-2 text-yellow-400 text-4xl'>
      <div>
        <ul className='list-disc ml-9 mt-20'>
          <li data-aos="zoom-out-right">Html5</li>
          <li data-aos="zoom-out-right">CSS3</li>
          <li data-aos="zoom-out-right">Bootstrap</li>
          <li data-aos="zoom-out-left">JavaScript(ES6+)</li>
          <li data-aos="zoom-out-left">TypeScript</li>
          <li data-aos="zoom-out-left">Tailwind CSS</li>
          <li data-aos="zoom-out-left">Next.js</li>
        </ul>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Skills