import React from 'react'
import Image from 'next/image';

interface propsTypes {
    title: string,
    description: string,
    image: string,
    tags: string[],
}

const Card:React.FC<propsTypes> = ({title,description,image,tags}) => {
  return (
    <div className='border border-yellow-400 w-[300px] sm:w[350px]'>
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <Image className='w-[300px] sm:w[350px] h-auto'
        src={image}
        width={350}
        height={350}
        alt={title}
        />
      </div>

          <div className='p-4 space-y-4'>
            <div className='text-4xl font-extralight'>{title}</div>
            <div>{description}</div>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                {tags.map((el) => (
                    <div className='tags' key={el}>
                    {el}
                    </div>))}
            </div>
          </div>
    </div>
  )
}

export default Card