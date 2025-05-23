import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import nodeImage from '../assets/node.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import postgresql from '../assets/postgresql.png'
import java from '../assets/java.png'
import python from '../assets/python.png'
import mysql from '../assets/mysql.png'
import typescript from "../assets/typescript.png"

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: postgresql,
            title: 'PostgreSQL',
            style: 'shadow-blue-500'
        },
        {
            id: 5,
            src: java,
            title: 'Java',
            style: 'shadow-orange-500'
        },
        {
            id: 6,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-500'
        },
        {
            id: 7,
            src: nodeImage,
            title: 'Node JS',
            style: 'shadow-green-500'
        },
        {
            id: 8,
            src: mysql,
            title: 'MySQL',
            style: 'shadow-blue-500'
        },
        {
            id: 9,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-500'
        },
    ]

    const newTech = [
        {
            id: 1,
            src: tailwind,
            title: 'Tailwind CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 2,
            src: reactImage,
            title: 'React JS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: typescript,
            title: 'TypeScript',
            style: 'shadow-blue-500'
        }
    ]

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full min-h-screen py-10'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                    Experience
                </p>
                <p className='py-6'>
                    These are the technologies I have worked with
                </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {techs.map(({ id, src, title, style }) => (
                    <div key={id} className={`shadow-md rounded-lg hover:scale-105 duration-500 py-2 ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>{title}</p>
                    </div>
                ))}
            </div>
        </div>

         {/* new experience */}
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                    Learning
                </p>
                <p className='py-6'>
                    These are the technologies I am learning
                </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {newTech.map(({ id, src, title, style }) => (
                    <div key={id} className={`shadow-md rounded-lg hover:scale-105 duration-500 py-2 ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>{title}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Experience