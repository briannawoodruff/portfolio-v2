import PolariHomepage from '../../assets/project-images/polari-home.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const features = [
    {
        name: 'Front End',
        description: 'This is a React application with TailwindCSS styling.',
    },
    {
        name: 'Back End',
        description: 'MERN stack - MongoDB, GraphQL and Apollo, as well as bcrypt and JSON Web Token.',
    },
    {
        name: 'Tools',
        description:
            'MomentJS and EmailJS',
    },
    {
        name: 'Future Development',
        description: 'Photo storage with AWS, a mobile application, and improved security.'
    },
]

export default function Featured() {
    return (
        <div className="bg-white lg:mb-16">
            <section aria-labelledby="featured-project" className="relative">
                <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-16">
                    <img
                        src={PolariHomepage}
                        alt="Polari Homepage"
                        className="h-full w-full object-left-top object-cover lg:h-full lg:w-full"
                    />
                </div>

                <div className="bg-white max-w-2xl mx-auto pt-10 pb-24 px-4 sm:pb-10 sm:px-6 lg:max-w-7xl lg:pt-24 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
                    <div className="lg:mr-10 lg:col-start-2">
                        {/* <h2 id="features-heading" className="mb-5 font-medium text-gray-500">
                            Currently in production
                        </h2> */}

                        <p className="inline text-4xl font-extrabold text-gray-900 tracking-tight">Polari
                  
                            <a className="hover:text-rose-800 text-3xl ml-5 mr-2 font-medium text-gray-900" target="_blank" rel="noreferrer" href="https://github.com/polari-2022/frontend-polari"><FontAwesomeIcon icon={faGithub} /></a>
                            <a className="hover:text-rose-800 text-3xl mx-2 font-medium text-gray-900" target="_blank" rel="noreferrer" href="https://polari-attachments.herokuapp.com/"><FontAwesomeIcon icon={faGlobe} /></a>
                      
                        </p>

                        <p className="mt-4 text-lg text-gray-500">
                            Polari is an inclusive dating app aimed to promote healthy relationships through identifying and matching people with compatible attachment styles.
                        </p>

                        <dl className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-medium sm:grid-cols-2">
                            {features.map((feature) => (
                                <div key={feature.name}>
                                    <dt className="font-medium text-gray-900">{feature.name}</dt>
                                    <dd className="mt-2 text-gray-500">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>
        </div>
    )
}