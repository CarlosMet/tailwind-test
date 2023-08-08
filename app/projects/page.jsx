import React from 'react'

export default function page() {

    const projects = [{
        src: '',
        image: 'https://i.imgur.com/vhn2tOL.png',
        title: '1st project',
        id:1
    },
    {
        src: '',
        image: 'https://i.imgur.com/vhn2tOL.png',
        title: '2nd one',
        id: 2
    },
    {
        src: '',
        image: 'https://i.imgur.com/vhn2tOL.png',
        title: '2nd one',
        id: 2
    },
    {
        src: '',
        image: 'https://i.imgur.com/vhn2tOL.png',
        title: '2nd one',
        id: 2
    }

    ]

  return (
    <div className='w-screen h-screen overflow-hidden px-3 md:px-12 lg:px-16 xl:px-36 2xl:px-64 py-28 lg:py-36 xl:py-44'>

      <div className='flex flex-col lg:flex-row items-center w-full'>

        <div className='w-full lg:w-4/12'>
            <p>
                Projects
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eum laboriosam harum dignissimos magnam quibusdam cum odit inventore nesciunt. Sed, illum?</p>
        </div>

        <div className='w-11/12 lg:w-8/12 grid place-items-center grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-y-5 lg:gap-y-4'>
            {projects.map( (project)=>{
                return(
                    <div key={project.id} className='relative w-8/12 lg:w-[95%] h-36 bg-gradient-to-br from-pink-600 to-pink-300 rounded-lg overflow-hidden'>
                        <div className="absolute top-6 transform -rotate-45 -left-8 grid place-items-center w-32 h-5 bg-gradient-to-tr from-green-500 to-green-300 text-sm">Tag</div>
                    </div>
                )
            } )}
        </div>
      </div>

    </div>
  )
}
