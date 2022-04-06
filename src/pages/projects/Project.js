import AllProjects from '../projects/AllProjects'
import '../about-me/aboutme.css'
import Pattern from '../../assets/pattern.svg'

// import gradient1 from '../../assets/gradient1.png'
// import gradient2 from '../../assets/gradient2.png'
// import gradient3 from '../../assets/gradient3.png'
import gradient4 from '../../assets/gradient4.png'

export default function Project() {
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
                        className="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-36 opacity-40 overflow-y-hidden"
                        width={600}
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
                </div>

                <div className="relative">
                    <div className="text-2xl leading-9 font-medium text-gray-900">
                        <h1 className="-translate-y-20 text-5xl mb-10 font-bold textshadow text-white sm:text-6xl lg:text-6xl">Projects</h1>
                    </div>
                </div>
            </div>

            <div className="relative bg-white mb-20 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <AllProjects />
            </div>
        </>
    )
}