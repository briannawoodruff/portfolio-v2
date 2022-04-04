import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
// routing
import { NavLink } from 'react-router-dom'

const navigation = [
    { name: 'About Me', to: '/' },
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'Contact Me', to: '/contact-me' },
    { name: 'Resume', to: '/resume' },
]

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-700">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.to}
                            className="border-transparent text-gray-700 hover:border-rose-700 hover:text-rose-700 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium focus:border-rose-700 focus:text-rose-700 focus:border-b-2"
                            >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.to}
                    className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-rose-700 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-lg font-medium focus:bg-rose-50 focus:text-rose-700 focus:border-b-2"
                    >
                    {item.name}
                </NavLink>
                ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
