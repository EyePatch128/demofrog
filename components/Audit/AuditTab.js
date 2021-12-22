import { useEffect, useRef, useState } from 'react'
import { Tab } from '@headlessui/react'

import Link from 'next/link'
import Button from '../Button/PrimaryButton'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



function AuditTab({data}) {

  const audit_map = elem=>{
    return({
      id: elem.id,
      title: elem.attributes.title,
      description: elem.attributes.description,
      score: elem.attributes.score,
      imageUrl: elem.attributes.image.data.attributes.url,
      imageName: elem.attributes.image.data.attributes.name,
      href: elem.attributes.url || `/audits/${elem.id}`,
      publishedAt: elem.attributes.publishedAt
    })
  }

  let [categories] = useState({
    Recent: data.map(elem=>{
        return audit_map(elem)
      }).sort(function(a, b) {
        return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
    }),
    Popular:
      data.map(elem=>{
        return audit_map(elem)
      }).sort(function(a, b) {
        return b.score - a.score;
      })
    ,
    "A-Z": data.map(elem=>{
      return audit_map(elem)
    }).sort(function(a, b) {
      if(a.title < b.title) { return -1; }
      if(a.title > b.title) { return 1; }
      return 0;
    }),
  })

  const overflowRef = useRef()
  useEffect(()=>{
    function isOverflown(element) {
      return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
    }
    const elements = overflowRef.current.getElementsByClassName("check_overflow")
    Array.from(elements).forEach(elem=>{
      if(elem && isOverflown(elem)){
        elem.classList.add("shadow-bottom")
      }
    })
  }, [])

  return (
    <div ref={overflowRef} className="w-full px-2 py-8 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-green-800 rounded-sm">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm leading-5 font-medium text-green-700 transition duration-75',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-yellow-500 ring-white ring-opacity-60',
                  selected
                    ? 'bg-white shadow'
                    : 'text-green-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels  className="mt-2 border-2">
          {Object.values(categories).map((audits, idx) => (
            <Tab.Panel
              key={idx}
              className="bg-white rounded-xl p-3"
            >
              <div className='grid grid-cols sm:grid-cols-2 2xl:grid-cols-3 gap-10'>
                {audits.map(elem=>{
                  return(
                    <div key={elem.id} className='shadow-retro-gray bg-green-50/60'>
                      <div className='flex max-h-48 md:max-h-64 lg:max-h-80'>
                        <img className="max-h-48 md:max-h-64 lg:max-h-80 sm:shadow-2xl flex-shrink" src={elem.imageUrl} alt={elem.imageName} />
                        <div className='check_overflow flex flex-col justify-between bg-green-50/60 flex-grow p-2 overflow-x-hidden overflow-y-auto'>
                          <div className='space-y-3 mb-4'>
                            <h1 className='font-retro font-extrabold text-xl sm:text-2xl'>{elem.title}</h1>
                            <p className='text-xs sm:text-sm break-words'>{elem.description}</p>
                          </div>
                          <div className='hidden sm:block'>
                            <Link href={elem.href} passHref>
                              <a  className="float-right text-white bg-green-700 hover:bg-green-800 transition duration-75 focus:ring-4 focus:ring-green-300 rounded-sm text-xs lg:text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-pointer">
                                Learn more
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className='flex sm:hidden drop-shadow-2xl border-2 mt-0.5 border-black'>
                        <Link href={elem.href} passHref>
                          <a className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 text-xs px-5 py-2.5 text-center cursor-pointer">
                            Learn more
                          </a>
                        </Link>
                      </div>
                  </div>
                  );
                })}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )

}

export default AuditTab