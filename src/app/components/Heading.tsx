import React from 'react'

interface propsTypes {
    title: string;
}

const Heading: React.FC<propsTypes> = ({title}) => {
  return (
    <div className='text-center text-4xl pb-8'>
      <p className='border-b-4 inline-block pb-2'>{title}</p>
    </div>
  )
}

export default Heading