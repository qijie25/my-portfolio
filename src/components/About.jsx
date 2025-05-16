import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-5'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className="text-lg mt-12">
                Hi, my name is Leow Qi Jie. I’m currently in my final year at Singapore Polytechnic, pursuing a Diploma in Information Technology. Throughout my studies, I’ve gained hands-on experience in programming, UI/UX design, and CI/CD practices. I’ve also explored areas such as cybersecurity and data visualization using Power BI and Python.
                <br /><br />
                I’m an independent and self-motivated learner, but I also enjoy working collaboratively with others. I’m passionate about web design and development—it fascinates me how I can bring ideas to life through code and design tools. I’m always eager to explore new technologies and continually improve both my technical and soft skills.
            </p>

            <br />

            <p className="text-lg">
                Some of the modules I’ve taken include JavaScript Programming, Front-End and Back-End Web Development, Design for User Interaction, Database Systems, Secure Coding, Java Programming, Software Engineering Practices, Programming for Data Science, and Cybersecurity Essentials.
                <br /><br />
                In my free time, I enjoy learning new technologies—for example, I’ve been exploring how to build web applications using React and Tailwind CSS. I also participate in Discord communities to connect with like-minded individuals, ask questions, and share knowledge whenever I can.
                <br /><br />
                In the future, I aspire to work on impactful projects as a software or web developer, creating web and mobile applications that are useful to people around the world.
            </p>
        </div>
    </div>
  )
}

export default About