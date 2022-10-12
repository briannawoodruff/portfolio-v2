import React from 'react'
import './aboutme.css'
import { NavLink } from 'react-router-dom'

import Featured from '../../components/aboutme/Featured'
import Pattern from '../../assets/pattern.svg'
import ProfileImg from '../../assets/headshot2022.jpg'
// import gradient1 from '../../assets/gradient1.png'
// import gradient2 from '../../assets/gradient2.png'
// import gradient3 from '../../assets/gradient3.png'
import gradient4 from '../../assets/gradient4.png'

export default function AboutMe() {
    return (
        <>
            <div className="relative bg-white">
                <div className="absolute inset-0">
                    <img
                        className="w-full h-full object-cover"
                        src={gradient4}
                        alt="gradient header"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
                    <img
                        className="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-96 opacity-40 overflow-y-hidden"
                        width={656}
                        height={784}
                        fill="none"
                        viewBox="0 0 600 784"
                        aria-hidden="true"
                        src={Pattern}
                        alt="Pattern" />
                    {/* <img
                        className="absolute top-full left-full transform translate-y-96 -translate-x-48 opacity-50"
                        width={600}
                        height={784}
                        fill="none"
                        viewBox="0 0 592 784"
                        aria-hidden="true"
                        src={Pattern}
                        alt="Pattern" /> */}

                    <div className="relative lg:ml-10 lg:flex lg:items-center">
                        <div className="hidden z-40 lg:block lg:flex-shrink-0">
                            <img
                                className="h-96 w-96 rounded-full xl:h-96 xl:w-96 -translate-x-10 lg:translate-y-40"
                                src={ProfileImg}
                                alt=""
                            />
                        </div>

                        <div className="relative sm:mx-auto sm:flex sm:items-center">
                            <div className="text-2xl leading-9 font-medium text-gray-900">
                                <h1 className="text-6xl mb-10 font-bold tracking-tight textshadow text-white sm:text-6xl lg:text-8xl">Brianna Woodruff</h1>
                                <p className="mt-10 text-xl smallshadow text-white max-w-3xl">
                                    Hi, I'm a Full-Stack Developer based in Chicago. I graduated from Northwestern's Full Stack Web Development Bootcamp in 2022 and also have a B.A. in Communication Arts - Radio, TV, Film from the University of Wisconsin - Madison.
                                </p>
                                <p className="mt-6 text-xl smallshadow text-white max-w-3xl">
                                    Combining both a background in arts and technology, I resourcefully blend creative and technical skills to solve problems, creatively adapt to challenges and rapidly pick up new tools/languages. I'm skilled in JavaScript, React.js, Vue.js, HTML5/CSS3, Sass, Jest, Node.js, MySQL, MongoDB, GraphQL, and Adobe Creative Cloud. I have strengths in creative thinking and problem solving, design, operating large and small scale projects, and working effectively and efficiently with others.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative bg-white max-w-2xl mx-auto px-6 py-16 lg:max-w-7xl lg:px-8 lg:py-24">
                <h2 className="mb-3 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Featured Project</h2>
                <NavLink to='/portfolio' className="hover:text-rose-700 text-2xl font-medium">+ <span className='underline'>View All</span>
                </NavLink>
            </div>
            <Featured />
        </>
    )
}
