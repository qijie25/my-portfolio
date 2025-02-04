import React from 'react'
import calculator from '../assets/portfolio/calculatorApp.jpg'
import rockPaperScissors from '../assets/portfolio/rockPaperScissors.jpg'
import landingPage from '../assets/portfolio/landingPage.jpg'
import ecommerceManagement from '../assets/portfolio/ecommerceManagement.jpg'
import etchASketch from '../assets/portfolio/etchASketch.jpg'

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            src: ecommerceManagement,
            demo: "https://dbs-assignment.vercel.app/login.html",
            code: "https://github.com/qijie25/dbs-assignment"
        },
        {
            id: 2,
            src: rockPaperScissors,
            demo: "https://qijie25.github.io/odin-rock-paper-scissors/",
            code: "https://github.com/qijie25/odin-rock-paper-scissors"
        },
        {
            id: 3,
            src: calculator,
            demo: "https://qijie25.github.io/calculator/",
            code: "https://github.com/qijie25/calculator"
        },
        {
            id: 4,
            src: etchASketch,
            demo: "https://qijie25.github.io/etch-a-sketch/",
            code: "https://github.com/qijie25/etch-a-sketch"
        },
        {
            id: 5,
            src: landingPage,
            demo: "https://qijie25.github.io/odin-landing-page/",
            code: "https://github.com/qijie25/odin-landing-page"
        },
    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black via-black to-gray-800 w-full text-white md:min-h-screen py-10'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Portfolio
                </p>
                <p className='py-6'>
                    Check out some of my work right here
                </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {projects.map(({id, src, demo, code}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' onClick={() => window.open(demo, '_blank')}>
                                Demo
                            </button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' onClick={() => window.open(code, '_blank')}>
                                Code
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio