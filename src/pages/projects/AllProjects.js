import coool from '../../assets/project-images/coool.jpg'
import Polari1 from '../../assets/project-images/polari-homepage.png'
import Unpuffd from '../../assets/project-images/unpuffd.png'
import BookSearch from '../../assets/project-images/booksearch.png'
import TechBlog from '../../assets/project-images/techblog.jpg'
import NoteTaker from '../../assets/project-images/note-taker.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const projects = [
    {
        name: 'coool',
        description:
            'A freelance portfolio website, showcasing video projects in an interactive design. Implemented front end pixel-perfect design via React.js, HTML5, CSS3, and JavaScript with responsive mobile design. Built NoSQL database via MongoDB and MongoDB Atlas. Currently in production.',
        github: "https://github.com/coool-portfolio/coool",
        web: "https://coool-predeploy.herokuapp.com/",
        imageSrc: coool,
        imageAlt: 'coool',
    },
    {
        name: 'Polari',
        description:
            'Polari is an inclusive dating app aimed to promote healthy relationships through identifying and matching people with compatible attachment styles. React, TailwindCSS, Node.js, Express, MongoDB, and Apollo GraphQL were used to create this application.',
        github: "https://github.com/polari-2022/frontend-polari",
        web: "https://polari-attachments.herokuapp.com/",
        imageSrc: Polari1,
        imageAlt: 'Polari',
    },
    {
        name: 'Google Book Search',
        description:
            'This project is a refactor of a Google Books API search engine app with a RESTful API converted to a GraphQL API with Apollo Server. It is built using a MERN stack: React front end, MongoDB database, and a Node.js/Express.js server/API.',
        github: "https://github.com/briannawoodruff/Book-Search-Engine-MERN",
        web: "https://book-searched-mern.herokuapp.com",
        imageSrc: BookSearch,
        imageAlt: 'Google Book Search',
    },
    {
        name: 'UnPuffd',
        description:
            'UnPuffd is an application inspired by Untappd that allows people to learn about and review cannabis if of legal age. This application utilizes Node.JS, Express, Dotenv, Handlebars, bcrypt, MySQL, and Sequelize.',
        github: "https://github.com/coding-p2-g2/unpuffd",
        web: "https://unpuffd.herokuapp.com/",
        imageSrc: Unpuffd,
        imageAlt: 'UnPuffd',
    },
    {
        name: 'The Tech Blog',
        description:
            "A CMS-style blog where developers can create blog posts and comment on other developers' posts. This application uses Handlebars.js, Sequelize, and express-session authentication.",
        github: "https://github.com/briannawoodruff/tech-blog-mvc",
        web: "https://the-mvc-techblog.herokuapp.com/",
        imageSrc: TechBlog,
        imageAlt: 'Tech Blog',
    },
    {
        name: 'The Note Taker App',
        description:
            "A note taking application created by modifying starter code and adding an Express.js backend to save and retrieve notes from a JSON file.",
        github: "https://github.com/briannawoodruff/note-taker-app",
        web: "https://note-taker-app-bw.herokuapp.com/",
        imageSrc: NoteTaker,
        imageAlt: 'Note Taker App',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function AllProjects() {
    return (
        <div className="pt-10 space-y-16">
            {projects.map((project, projectIdx) => (
                <div
                    key={project.name}
                    className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
                >
                    <div
                        className={classNames(
                            projectIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                            'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
                        )}
                    >
                        <h3 className="text-3xl font-medium text-gray-900">{project.name}</h3>
                        <p className="mt-2 mb-4 text-lg text-gray-500">{project.description}</p>
                        <div className="flex justify-center">
                            <a className="hover:text-rose-800 text-4xl mx-3 font-medium text-gray-900" target="_blank" rel="noreferrer" href={project.github}><FontAwesomeIcon icon={faGithub} /></a>
                            <a className="hover:text-rose-800 text-4xl mx-3 font-medium text-gray-900" target="_blank" rel="noreferrer" href={project.web}><FontAwesomeIcon icon={faGlobe} /></a>
                        </div>
                    </div>
                    <div
                        className={classNames(
                            projectIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                            'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8'
                        )}
                    >
                        <a target="_blank" rel="noreferrer" href={project.web}>
                            <div className="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                                <img src={project.imageSrc} alt={project.imageAlt} className="object-cover object-top" />

                            </div>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}