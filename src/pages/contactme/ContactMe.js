import React, { useState } from 'react';
import { send } from 'emailjs-com';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import { CheckCircleIcon, XIcon } from '@heroicons/react/solid'

import Pattern from '../../assets/pattern.svg'

// import gradient1 from '../../assets/gradient1.png'
// import gradient2 from '../../assets/gradient2.png'
// import gradient3 from '../../assets/gradient3.png'
import gradient4 from '../../assets/gradient4.png'

export default function ContactMe() {
    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [alert, setAlert] = useState(false);

    const handleInput = (name, value) => {
        setToSend({ ...toSend, [name]: value });
        // console.log("toSend", toSend)
    };

    const reset = () => setToSend({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const sendEmail = (event) => {
        event.preventDefault();
        send(
            'gmail',
            'template_5x49ssk',
            toSend,
            'H1n96WJh1ZD8qa-Wi'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setAlert(true)
                reset();
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    }
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
                        className="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-36 opacity-40 z-40"
                        width={600}
                        height={784}
                        fill="none"
                        viewBox="0 0 592 784"
                        aria-hidden="true"
                        src={Pattern}
                        alt="Pattern" />
                </div>

                <div className="relative">
                    <div className="text-2xl leading-9 font-medium text-gray-900">
                        <h1 className="-translate-y-20 text-5xl mb-10 font-bold textshadow text-white sm:text-6xl lg:text-6xl">Contact Me</h1>
                    </div>
                </div>
            </div>

            <div className="relative bg-white">
                <div className="absolute inset-0">
                    <div className="absolute inset-y-0 left-0 w-1/2 bg-pink-50" />
                </div>
                <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
                    <div className="bg-pink-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12 z-50">
                        <div className="max-w-lg mx-auto">
                            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Get in touch</h2>
                            <p className="mt-3 text-lg leading-6 text-gray-500">
                                Send a message here or get in contact below.
                            </p>
                            <dl className="mt-8 text-base text-gray-500">
                                <div className="mt-6">
                                    <dt className="sr-only">Phone number</dt>
                                    <dd className="flex">
                                        <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3">+1 (715) 218-7546</span>
                                    </dd>
                                </div>
                                <div className="mt-3">
                                    <dt className="sr-only">Email</dt>
                                    <dd className="flex">
                                        <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3">briannaecwoodruff@gmail.com</span>
                                    </dd>
                                </div>
                            </dl>
                            <p className="mt-6 text-base text-gray-500">
                                Looking for my LinkedIn?{' '}
                                <a target="_blank" href="https://www.linkedin.com/in/briannaewoodruff/" rel="noreferrer" className="font-medium text-gray-700 underline">
                                    Connect with me
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                    <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                        <div className="max-w-lg mx-auto lg:max-w-none">
                            <form className="grid grid-cols-1 gap-y-6">
                                <div>
                                    <label htmlFor="name" className="sr-only">
                                        Full name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={toSend.name}
                                        onChange={(event) => handleInput("name", event.target.value)}
                                        // autoComplete="name"
                                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-fuchsia-900 focus:border-rose-700 border-gray-300 rounded-md"
                                        placeholder="Full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={toSend.email}
                                        onChange={(event) => handleInput("email", event.target.value)}
                                        // autoComplete="email"
                                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-fuchsia-900 focus:border-rose-700 border-gray-300 rounded-md"
                                        placeholder="Email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="sr-only">
                                        Phone
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        value={toSend.phone}
                                        onChange={(event) => handleInput("phone", event.target.value)}
                                        // autoComplete="tel"
                                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-fuchsia-900 focus:border-rose-700 border-gray-300 rounded-md"
                                        placeholder="Phone"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="sr-only">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={toSend.message}
                                        onChange={(event) => handleInput("message", event.target.value)}
                                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-fuchsia-900 focus:border-rose-700 border border-gray-300 rounded-md"
                                        placeholder="Message"
                                    // defaultValue={''}
                                    />
                                </div>
                                {/* Alert message */}
                                {alert && <div className="rounded-md bg-green-50 p-4">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-green-800">Successfully sent</p>
                                        </div>
                                        <div className="ml-auto pl-3">
                                            <div className="-mx-1.5 -my-1.5">
                                                <button
                                                    type="button"
                                                    onClick={(event) => setAlert(false, event.target.value)}
                                                    className="inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
                                                >
                                                    <span className="sr-only">Dismiss</span>
                                                    <XIcon className="h-5 w-5" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                }
                                <div>
                                    <button
                                        type="submit"
                                        onClick={sendEmail}
                                        className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-rose-900 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-900"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
