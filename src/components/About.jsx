import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-6'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
        <p className='text-xl mt-20'>
            Hi, my name is Leow Qi Jie, I was born in Singapore, and I am currently a Singapore Polytechnic student equipped 
            with a Diploma in Information Technology. Where I learn many things like programming, UI/UX design and presentation. 
            I love reading and traveling when I have time. I am passionate about web design and development. 
            I am interested in web design and development as there is always a new challenge as each website has it's own 
            unique purpose and design and it is rewarding seeing my codes become something that users can interact with.
        </p>

        <br />

        <p className='text-xl'>
            I have taken modules such as JavaScript Programming, Front-end web development, design for user interaction, 
            back-end web development. During the holidays, I learn new things for example, I try to learn how to build a web 
            application using React and Tailwind. I join groups on Discord to find like-minded people and learn from them as 
            I request help from them. In the future, I hope to work on projects that allow me to learn more about how to be a 
            full-stack developer and create web applications that are useful to people all around the world. 
        </p>
        </div>
    </div>
  )
}

export default About