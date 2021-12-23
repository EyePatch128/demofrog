import Head from 'next/head'
// import Image from "next/image"
import Link from "next/link"


import Layout from "../components/Layout"
import Background from "../components/Background/Background"
import Section from '../components/Section/General'
import Button from "../components/Button/PrimaryButton"
import Audit from "../components/Audit/Audit"
import Container from '../components/Audit/Container'


// Queries
import { get_homepage } from '../lib/query/homepage'
import { get_navigation } from '../lib/query/navigation'


function Home(props) {
  const data = props.homepage
  const navigation = props.navigation.data
  const {introduction, recent_audits, dapps, description, community} = data.attributes
  return (
    <Layout navigation={navigation}>
      <Head>
        <title>Frogchain</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png"/>
      </Head>
        
      <div className="pb-8 sm:pb-16 md:pb-20 w-full lg:pb-28 xl:pb-32">  
          <Section
              title={introduction.title.split("|")[0]}
              title_green={introduction.title.split("|")[1]}
              subtitle={introduction.subtitle}
              buttons={introduction.buttons}
              illustration={introduction.illustration.data.attributes.url}
          />
          
          <section className="mt-6 md:mt-12 p-2 md:p-6 pb-12 overflow-hidden w-screen relative left-1/2 -translate-x-1/2">
              <Background />
            <div className="relative z-10 mx-auto lg:w-4/5 2xl:max-w-screen-xl flex flex-col gap-y-10">
              <div className="text-center w-full">
                <h1 className="section-title text-green-600 text-shadow-retro-gray-sm">{recent_audits.title}</h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  {recent_audits.subtitle}
                </p>
              </div>
              
              <div className='px-2'>
                <Container>
                  {recent_audits.audits.data.map((elem) => {
                    const imageSrc = elem.attributes.image.data.attributes.url
                    const imageAlt = elem.attributes.image.data.attributes.name
                    const title    = elem.attributes.title
                    const description = elem.attributes.description
                    return (
                      <Audit key={elem.id} href={elem.id} imageSrc={imageSrc} imageAlt={imageAlt} title={title} subTitle={description} />
                    )
                  })}
                </Container>
                <div className="mt-16 mb-24 flex justify-center">
                  {recent_audits.buttons.map(elem=>{
                    return(
                      <div key={elem.id} className='retro-btn w-full sm:w-48 text-2xl font-bold tracking-wider font-retro'>
                        <Button href={elem.href}>{elem.text}</Button>
                      </div>
                    )
                  })}
                </div>

              </div>
            </div>
          </section>

          
          <div className='w-screen relative left-1/2 -translate-x-1/2 bg-gray-primary'>
            <section className='lg:w-4/5 2xl:max-w-screen-xl mx-4 px-4 py-12 space-y-14 sm:mx-auto border-l sm:border-l-0 lg:border-x lg:border-gray-500 border-opacity-40 '>
              <div className="mt-12 md:w-4/5 lg:w-1/2 font-retro ">
                <h2 className='text-green-400 text-base md:text-xl'>{dapps.subtitle}</h2>
                <h1 className='font-bold tracking-wide text-white sm:text-shadow-retro-green-sm text-3xl md:text-5xl'>{dapps.title}</h1>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-6 gap-10'>
                  {dapps.dapps.data.map((elem, idx)=>{
                    return(
                      <div key={elem.id} className='flex flex-col place-items-center border bg-white rounded-lg pt-8 pb-6 gap-6 shadow-xl shadow-zinc-900'>
                        {elem.attributes.image.data? <img src={elem.image.data.attributes.url} className='max-h-32' alt={elem.image.data.attributes.name}/> : null}
                        <div className='text-center space-y-6 px-4'>
                          <div>
                            <h1 className='text-lg sm:text-2xl font-medium text-shadow-sm'>{elem.attributes.title}</h1>
                            <h2 className='text-base sm:text-lg text-gray-500'>{elem.attributes.subtitle}</h2>
                          </div>
                          <p className='text-sm sm:text-base'>{elem.attributes.description}</p>
                        </div>
                        <a href={elem.attributes.cta_link || "#"} className='text-sm text-white bg-green-600 hover:bg-green-700 transition duration-75 px-7 py-3 font-medium rounded-md mt-6 shadow-md shadow-slate-400'>
                          {elem.attributes.cta_text}
                        </a>
                      </div>
                    );
                  })}
              </div>
              {dapps.cta_text && dapps.cta_link?
                <div className='retro-btn w-4/5 sm:w-48 text-2xl font-bold tracking-wider font-retro mx-auto mt-12'>
                  <Button href={dapps.cta_link}>{dapps.cta_text}</Button>
                </div>
              : null
              }
            </section>

            <section className='lg:w-4/5 2xl:max-w-screen-xl mx-4 sm:mx-auto'>
              <div className='py-6 border-l sm:border-l-0 lg:border-x lg:border-gray-500 border-opacity-40 px-4'>
                <div className="mt-12 md:w-4/5 lg:w-1/2 font-retro ">
                  <h2 className='text-green-400 text-base md:text-xl'>{description.subtitle}</h2>
                  <h1 className='font-bold tracking-wide text-white sm:text-shadow-retro-green-sm text-3xl md:text-5xl'>{description.title}</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-12 gap-6 lg:divide-x lg:divide-gray-400 lg:divide-dashed divide-opacity-60">
                  {description.caracteristic.map((elem, i)=>(
                    <div key={elem.id} className="flex flex-col justify-items-start align-middle flex-shrink basis-1/4">
                      {/* <div className="w-12 h-12 mx-2">
                        <img href={elem.image.data? elem.image.data.attributes.url : null} alt={elem.image.data? elem.image.data.attributes.name : null} />
                      </div> */}
                      <div className={`break-words mt-2 w-full ${i==0? "px-0" : "lg:px-2"}`}>
                        <h1 className="text-gray-100 font-bold font-retro tracking-wide text-lg">{elem.title}</h1>
                        <p className='mt-3 text-sm text-gray-300'>
                          {elem.description}
                        </p>
                      </div>  
                    </div>
                  ))}
                </div>
              </div>

            </section>
          </div>

          <section className="mt-24">
            <div className='flex flex-col gap-y-16'>
              <div className='sm:text-center flex flex-col gap-y-6 sm:place-items-center'>
                  <h1 className='section-title text-gray-primary text-shadow-retro-green'>{community.title}</h1>
                  <h3 className='text-base sm:w-2/3 md:w-1/2'>{community.subtitle}</h3>
              </div>
              <div className='flex gap-8 sm:gap-12 justify-center'>
                  {community.social.map((elem, i)=>{
                    return(
                      <div key={elem.id} className='transform duration-75 hover:scale-105 shadow-lg w-12 h-12'>
                        <Link href={elem.url} passHref>
                          <a onClick={(e)=>{e.preventDefault(); window.open(e.currentTarget.href, '_blank')}}>
                            {/* <Image src={elem.logo.data.attributes.url} alt={elem.name} width={45} height={45} layout="responsive" objectFit='contain' /> */}
                            <img src={elem.logo.data.attributes.url} alt={elem.name} className='w-12 h-12'/>
                          </a>
                        </Link>
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
      </div>

    </Layout>
  )
}

export default Home;


export async function getStaticProps(context) {
  const homepage = await get_homepage()
  const navigation = await get_navigation();

  if (!homepage) {
    return {
      notFound: true,
    }
  }
  return {
    props: {homepage, navigation},
  }
}

