import Head from 'next/head'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import Background from "../components/background/Background"

const navigation = [
  { name: 'About us', href: '#' },
  { name: 'Our mission', href: '#' },
  { name: 'Whitepaper', href: '#' },
  { name: 'Roadmap', href: '#' },
]

const DAPP = [
  {
    id: 1,
    title: 'NFT Marketplace',
    href: '#',
    imageSrc: 'dapp.svg',
    imageAlt: "NFT Marketplace",
    sub_title: '[Q4 2021]',
    cta: "Launch DAPP"
  },
  {
    id: 2,
    title: 'NFT Marketplace',
    href: '#',
    imageSrc: 'dapp.svg',
    imageAlt: "NFT Marketplace",
    sub_title: '[Q4 2021]',
    cta: "Launch DAPP"
  },
  {
    id: 3,
    title: 'NFT Marketplace',
    href: '#',
    imageSrc: 'dapp.svg',
    imageAlt: "NFT Marketplace",
    sub_title: '[Q4 2021]',
    cta: "Launch DAPP"
  },
]


export default function Home() {
  return (
    <div className="w-full lg:w-4/5 py-2 mx-auto">
      <Head>
        <title>Demo Frog</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <script src="https://cdn.jsdelivr.net/npm/tsparticles@1.37.5/tsparticles.min.js"></script>
      </Head>

      <Background />
        <div className="relative z-10">
          <div className="pb-8sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            <Popover>
              <div className="relative pt-2 px-4 sm:px-6 lg:px-8">
                <nav className="relative flex items-center justify-between sm:h-10" aria-label="Global">
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a href="#">
                        <span className="sr-only">Workflow</span>
                        <div className="h-8 w-auto sm:h-10">
                          <img src="logo.png"/>
                        </div>
                      </a>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    {navigation.map((item) => (
                      <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    ))}
                    <a href="#" className="font-medium text-white bg-green-600 hover:bg-green-500 px-6 py-1 rounded-md">
                      TOKEN ICO
                    </a>
                  </div>
                </nav>
              </div>

              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark-green-600.svg"
                          alt=""
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                          <span className="sr-only">Close main menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="block w-full px-5 py-3 text-center font-medium text-green-600 bg-gray-50 hover:bg-gray-100"
                    >
                      Log in
                    </a>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              
              <div className="flex justify-between">
                <div className="sm:text-center md:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                    <span className="block xl:inline">Data to enrich your</span>{' '}
                    <span className="block text-green-600 xl:inline">online business</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                    fugiat veniam occaecat fugiat aliqua.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center md:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                      >
                        Get started
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
                      >
                        Live demo
                      </a>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block">
                    <img src="/crypto.svg" className="mx-auto"></img>
                </div>
              </div>

              <div className="mt-36 flex justify-between flex-wrap gap-y-12 gap-x-6">
                {DAPP.map((elem) => (
                  <div key={elem.id} className="group bg-white border py-4 rounded-md shadow-2xl flex-grow md:flex-grow-0">
                    <div className="w-1/2 h-1/2 mx-auto aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                      <img
                        src={elem.imageSrc}
                        alt={elem.imageAlt}
                        className="w-full h-full object-center object-contain"
                      />
                    </div>
                    <div className="mt-16 flex justify-between flex-col text-center">
                      <div>
                        <h3 className="text-xl font-bold text-gray-700">
                          <a href={elem.href}>
                            {elem.title}
                          </a>
                        </h3>
                        <p className="mt-1 text-base text-gray-500">{elem.sub_title}</p>
                      </div>
                    </div>
                    <div className="mt-6 w-full">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 w-full">{elem.cta}</button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-between mt-24 p-6 border-t gap-y-10">

                {[...Array(6)].map((e,i)=>(
                  <div key={i} className="flex gap-x-4 place-items-center">
                    <div className="w-20 h-20">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                    <h1 className="text-gray-700 font-bold text-xl md:text-2xl">Something cool</h1>
                  </div>
                ))}

              </div>
            </main>

          </div>
        </div>

      {/* <footer className="flex items-center justify-center w-full h-24 border-t">
        
      </footer> */}
    </div>
  )
}
