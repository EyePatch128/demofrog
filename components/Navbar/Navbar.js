// import Image from "next/image";
import Link from "next/link";

import React, {Fragment, useState, useEffect} from "react";
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

function Navbar(props){
  const bigButton = "Join";
  const navigation = props.navigation.map(elem=>{
    return{
      id: elem.id,
      name: elem.attributes.title,
      href: elem.attributes.slug.startsWith("/") ? elem.attributes.slug : `/${elem.attributes.slug}`
    }
  }).sort((a,b)=>{
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
  })
    return(
        
        <header className="">
            <Popover>
              <div className="relative pt-2 px-4 sm:px-6 lg:px-8">
                <nav className="relative flex items-center justify-between sm:h-10" aria-label="Global">
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a href="/">
                        <span className="sr-only">Logo</span>
                        <div className="w-16 h-10">
                          <img src="/test2.jpg" alt="Logo" className=''/>
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
                    {navigation && navigation.map((item) => {
                      const style = item.name != bigButton? 
                        "font-medium text-gray-500 hover:text-gray-900" 
                        :
                        "inline-flex retro-btn border-2 border-gray-primary text-base tracking-wide font-medium box-border px-8 py-2 md:py-2 md:px-8 text-white bg-green-600 hover:bg-green-700"
                        
                        return (
                          <Link key={item.name} href={item.href ||"#"} passHref>
                            <a className={style}>
                              {item.name}
                            </a>
                          </Link>
                        )
                    })}
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
                    <div className="w-10 h-10">
                          {/* <Image src="/logo.png" layout="responsive" objectFit="cover" width={45} height={45} /> */}
                          <img src="/logo.png" alt="Logo frogchain" className='w-12 h-12'/>
                        </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                          <span className="sr-only">Close main menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {navigation && navigation.map((item) => {
                        const style = "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                          if(item.name != bigButton)
                            return (
                              <Link key={item.name} href={item.href ||"#"} passHref>
                                <a className={style}>
                                  {item.name}
                                </a>
                              </Link>
                            );
                      })}
                    </div>
                      {navigation && navigation.map(item =>(
                        item.name == bigButton? 
                          <Link key={item.name} href={item.href ||"#"} passHref>
                            <a className="block w-full px-5 py-3 text-center font-medium text-green-600 bg-gray-50 hover:bg-gray-100">
                              {item.name}
                            </a>
                          </Link> : null
                      ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
        </header>

    );
}

export default Navbar