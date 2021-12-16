import Head from 'next/head'
// import Image from "next/image"
import Link from "next/link"

// // eslint-disable-next-line
// import "swiper/css/bundle";

import { fetchAPI } from '../lib/api'

import Background from "../components/Background/Background"
import Section from '../components/Section/General'
import Button from "../components/Button/PrimaryButton"
import Audit from "../components/Audit/Audit"
import Container from '../components/Audit/Container'

import ConstructionModal from '../components/Construction'





const DAPP = [
  {
    id: 1,
    title: 'NFT Marketplace',
    href: '#',
    imageSrc: '/audit.png',
    imageAlt: "NFT Marketplace",
    subTitle: '[Q4 2021]',
    cta: "Launch DAPP"
  },
  {
    id: 2,
    title: 'NFT Marketplace',
    href: '#',
    imageSrc: '/audit.png',
    imageAlt: "NFT Marketplace",
    subTitle: '[Q4 2021]',
    cta: "Launch DAPP"
  },
  {
    id: 3,
    title: 'NFT Marketplace',
    href: '#',
    imageSrc: '/audit.png',
    imageAlt: "NFT Marketplace",
    subTitle: '[Q4 2021]',
    cta: "Launch DAPP"
  },
  {
    id: 4,
    title: 'NFT Marketplace',
    href: '#',
    imageSrc: '/audit.png',
    imageAlt: "NFT Marketplace",
    subTitle: '[Q4 2021]',
    cta: "Launch DAPP"
  },
  {
    id: 5,
    title: 'NFT Marketplace',
    href: '#',
    imageSrc: '/audit.png',
    imageAlt: "NFT Marketplace",
    subTitle: '[Q4 2021]',
    cta: "Launch DAPP"
  },
  {
    id: 6,
    title: 'NFT Marketplace',
    href: '#',
    imageSrc: '/audit.png',
    imageAlt: "NFT Marketplace",
    subTitle: '[Q4 2021]',
    cta: "Launch DAPP"
  },
  {
    id: 7,
    title: 'NFT Marketplace',
    href: '#',
    imageSrc: '/audit.png',
    imageAlt: "NFT Marketplace",
    subTitle: '[Q4 2021]',
    cta: "Launch DAPP"
  },
  {
    id:8,
    title: 'NFT Marketplace',
    href: '#',
    imageSrc: '/audit.png',
    imageAlt: "NFT Marketplace",
    subTitle: '[Q4 2021]',
    cta: "Launch DAPP"
  },
]

const SocialMedia = [
  {
    name: "Discord",
    logo: "/discord.png",
    href: "https://discord.com",
  },
  {
    name: "Twitter",
    logo: "/twitter.png",
    href: "https://twitter.com",
  },
  {
    name: "Reddit",
    logo: "/reddit.png",
    href: "https://reddit.com",
  },
  {
    name: "Github",
    logo: "/github.png",
    href: "https://github.com",
  }
]


function Home({data}) {
  return (
    <>
      <Head>
        <title>Frogchain</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png"/>
      </Head>

      <ConstructionModal />
        
      <div className="pb-8 sm:pb-16 md:pb-20 w-full lg:pb-28 xl:pb-32">  
          <Section
              title={data.attributes.introduction.title}
              subtitle={data.attributes.introduction.subtitle}
              buttons={[{type: "primary", text: "Get started"}, {type: "secondary", text: "Live demo"}]}
              illustration="/crypto.svg"
          />
          
          <section className="mt-6 md:mt-12 p-2 md:p-6 pb-12 overflow-hidden w-screen relative left-1/2 -translate-x-1/2">
              <Background />
            <div className="relative z-10 mx-auto lg:w-4/5 2xl:max-w-screen-xl flex flex-col gap-y-10">
              <div className="text-center w-full">
                <h1 className="section-title text-green-600 text-shadow-retro-gray-sm">{data.attributes.recent_audits.title}</h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  {data.attributes.recent_audits.subtitle}
                </p>
              </div>
              
              <div className='px-2'>
                <Container>
                  {DAPP.map((elem) => (
                      <Audit key={elem.id} imageSrc={elem.imageSrc} imageAlt={elem.imageAlt} title={elem.title} subTitle={elem.subTitle} cta={elem.cta} />
                    ))}
                </Container>
                <div className="mt-16 mb-24 flex justify-center">
                  <div className='retro-btn w-full sm:w-48 text-2xl font-bold tracking-wider font-retro'>
                    <Button href="/audits">More</Button>
                  </div>
                </div>

              </div>
            </div>
          </section>

          
          <section className='w-screen relative left-1/2 -translate-x-1/2 bg-gray-primary'>
                
            <div className='lg:w-4/5 2xl:max-w-screen-xl py-6 mx-4 sm:mx-auto border-l sm:border-l-0 lg:border-x lg:border-gray-500 border-opacity-40 px-4'>
              
              <div className="mt-12 md:w-4/5 lg:w-1/2 font-retro ">
                <h2 className='text-green-400 text-base md:text-xl'>{data.attributes.description.subtitle}</h2>
                <h1 className='font-bold tracking-wide text-white sm:text-shadow-retro-green-sm text-3xl md:text-5xl'>{data.attributes.description.title}</h1>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-12 gap-6 lg:divide-x lg:divide-gray-400 lg:divide-dashed divide-opacity-60">
                {[...Array(4)].map((e,i)=>(
                  <div key={i} className="flex flex-col justify-items-start align-middle flex-shrink basis-1/4">
                    <div className="w-12 h-12 mx-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                    <div className={`break-words mt-2 w-full ${i==0? "px-0" : "lg:px-4"}`}>
                      <h1 className="text-gray-100 font-bold font-retro tracking-wide text-lg">Something cool</h1>
                      <p className='mt-3 text-sm text-gray-300'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                      </p>
                    </div>  
                  </div>
                ))}
              </div>


            </div>
          </section>

          <section className="mt-24">
            <div className='flex flex-col gap-y-16'>
              <div className='sm:text-center flex flex-col gap-y-6 sm:place-items-center'>
                  <h1 className='section-title text-gray-primary text-shadow-retro-green'>{data.attributes.community.title}</h1>
                  <h3 className='text-base sm:w-2/3 md:w-1/2'>{data.attributes.community.subtitle}</h3>
              </div>
              <div className='flex gap-8 sm:gap-12 justify-center'>
                  {SocialMedia.map((elem, i)=>{
                    return(
                      <div key={i} className='transform duration-75 hover:scale-105'>
                        <a href={elem.href}>
                          {/* <Image src={elem.logo} alt={elem.name} width={45} height={45} /> */}
                          <img src={elem.logo} alt={elem.name} className='w-12 h-12'/>
                        </a>
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
      </div>

    </>
  )
}

export default Home;


export async function getStaticProps(context) {
  const data = await fetchAPI("/api/homepage?populate=*")
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: {data: data.data},
  }
}

