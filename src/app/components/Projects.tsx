import React from 'react'
import Heading from './Heading'
import Card from './Card'
import Link from 'next/link'
// import { describe } from 'node:test'

const data = [
  {
    id: 0,
    title: 'Static Resume Builder',
    description: 'A form that allows users to fill in their details and generate a static resume in a predefined format.',
    image: '/images/project-1.png',
    tags: ['Node', 'HTML', 'CSS', 'TypeScript'],
  },
  {
    id: 1,
    title: 'Dynamical Resume',
    description: 'A flexible form where users can input, modify, and save details, generating a personalized resume with dynamic sections.',
    image: '/images/project-2.png',
    tags: ['Node', 'HTML', 'CSS', 'TypeScript'],
  },
  {
    id: 2,
    title: 'Shareable Resume',
    description: ' A form that lets users create a resume and share it through a generated link or export it to various formats (PDF, Word)',
    image: '/images/project-3.png',
    tags: ['Node', 'HTML', 'CSS', 'TypeScript'],
  },
  {
    id: 3,
    title: 'Simple Calculator',
    description: 'A basic calculator app that performs arithmetic operations like addition, subtraction, multiplication, and division.',
    image: '/images/project-4.png',
    tags: ['Node', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 4,
    title: 'Temperature Converter',
    description:' A responsive app that converts temperatures between Celsius, Fahrenheit, and Kelvin',
    image: '/images/project-5.png',
    tags: ['Node', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 5,
    title: 'Table Printer',
    description: 'An app that prints tables of any number with customizable columns and rows.',
    image: '/images/project-6.png',
    tags: ['Node', 'HTML', 'CSS', 'JavaScript'],
  },
]

const Projects = () => {
  return (
    <div id="projects" className="container pt-32">
      <Heading title="My Projects" />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map(({ id, title, description, image, tags }) => (
          <Card
            key={id}
            title={title || 'Untitled Project'} // Fallback title
            description={description}
            image={image}
            tags={tags} // pass the tags array as a prop to the Card component
          />
        ))}
      </div>
      <div className="mt-8">
        <Link href="/">
          <button className="font-bold bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-white hover:text-yellow-700 transition">
            Go to Home Page
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Projects