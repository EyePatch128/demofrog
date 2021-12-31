import Head from 'next/head'
import Image from "next/image"

import Layout from '../components/Layout'
import Button from "../components/Button/PrimaryButton"
import Section from "../components/Section/General"

//Queries
import { get_navigation } from '../lib/query/navigation'


function Roadmap(props){
    const navigation = props.navigation.data
    return(
        <Layout navigation={navigation}>
            <Head>
                <title>Roadmap</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <div className='pb-8 sm:pb-16 md:pb-20 w-full lg:pb-28 xl:pb-32'>
                <Section
                    title="Proffessional Roadmap"
                    subtitle="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo."
                />

                <div className='relative min-h-screen px-0 sm:px-6 md:px-12 py-2 my-8'>
                    <div className='hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full min-h-screen w-2 bg-zinc-700'>
                    </div>

                    <div className='space-y-48 py-8'>
                        <div className='flex flex-row-reverse flex-wrap-reverse gap-2 sm:gap-8 sm:flex-row sm:flex-nowrap place-items-center justify-center sm:justify-start relative'>
                            <div className='w-1/2 md:text-center p-4 space-y-4 bg-white shadow-lg shadow-gray-300 rounded-md sm:w-1/3 sm:relative sm:transform sm:left-1/4 sm:-translate-x-3/4'>
                                <h1 className='font-retro tracking-wider sm:text-2xl md:text-3xl text-shadow-retro-green-sm'>Coaching</h1>
                                <h3 className='font-medium text-sm md:text-base'>We provide exceptionnal high quality traning to raise your crypto to the next level</h3>
                            </div>
                            <div className='flex-shrink-0 sm:flex-shrink sm:absolute sm:transform sm:left-1/2 sm:-translate-x-1/2 border-2 border-dashed border-zinc-900 shadow-inner shadow-zinc-400 rounded-full p-1'>
                                <div className='bg-green-900 rounded-full p-6'>
                                    <img src='/frog_construction.png' className='max-h-16 sm:max-h-24 lg:max-h-32' />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-row-reverse flex-wrap-reverse gap-2 sm:gap-8 sm:flex-row sm:flex-nowrap place-items-center justify-center sm:justify-start relative'>
                            <div className='w-1/2 md:text-center p-4 space-y-4 bg-white shadow-lg shadow-gray-300 rounded-md sm:w-1/3 sm:relative sm:transform sm:left-3/4 sm:-translate-x-1/4'>
                                <h1 className='font-retro tracking-wider sm:text-2xl md:text-3xl text-shadow-retro-green-sm'>Coaching</h1>
                                <h3 className='font-medium text-sm md:text-base'>We provide exceptionnal high quality traning to raise your crypto to the next level</h3>
                            </div>
                            <div className='flex-shrink-0 sm:flex-shrink sm:absolute sm:transform sm:left-1/2 sm:-translate-x-1/2 border-2 border-dashed border-zinc-900 shadow-inner shadow-zinc-400 rounded-full p-1'>
                                <div className='bg-green-900 rounded-full p-6'>
                                    <img src='/frog_construction.png' className='max-h-16 sm:max-h-24 lg:max-h-32' />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row-reverse flex-wrap-reverse gap-2 sm:gap-8 sm:flex-row sm:flex-nowrap place-items-center justify-center sm:justify-start relative'>
                            <div className='w-1/2 md:text-center p-4 space-y-4 bg-white shadow-lg shadow-gray-300 rounded-md sm:w-1/3 sm:relative sm:transform sm:left-1/4 sm:-translate-x-3/4'>
                                <h1 className='font-retro tracking-wider sm:text-2xl md:text-3xl text-shadow-retro-green-sm'>Coaching</h1>
                                <h3 className='font-medium text-sm md:text-base'>We provide exceptionnal high quality traning to raise your crypto to the next level</h3>
                            </div>
                            <div className='flex-shrink-0 sm:flex-shrink sm:absolute sm:transform sm:left-1/2 sm:-translate-x-1/2 border-2 border-dashed border-zinc-900 shadow-inner shadow-zinc-400 rounded-full p-1'>
                                <div className='bg-green-900 rounded-full p-6'>
                                    <img src='/frog_construction.png' className='max-h-16 sm:max-h-24 lg:max-h-32' />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-row-reverse flex-wrap-reverse gap-2 sm:gap-8 sm:flex-row sm:flex-nowrap place-items-center justify-center sm:justify-start relative'>
                            <div className='w-1/2 md:text-center p-4 space-y-4 bg-white shadow-lg shadow-gray-300 rounded-md sm:w-1/3 sm:relative sm:transform sm:left-3/4 sm:-translate-x-1/4'>
                                <h1 className='font-retro tracking-wider sm:text-2xl md:text-3xl text-shadow-retro-green-sm'>Coaching</h1>
                                <h3 className='font-medium text-sm md:text-base'>We provide exceptionnal high quality traning to raise your crypto to the next level</h3>
                            </div>
                            <div className='flex-shrink-0 sm:flex-shrink sm:absolute sm:transform sm:left-1/2 sm:-translate-x-1/2 border-2 border-dashed border-zinc-900 shadow-inner shadow-zinc-400 rounded-full p-1'>
                                <div className='bg-green-900 rounded-full p-6'>
                                    <img src='/frog_construction.png' className='max-h-16 sm:max-h-24 lg:max-h-32' />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

            </div>
        </Layout>
    );
}

export default Roadmap;


export async function getStaticProps(context) {
    // const audits = await get_audits()
    const navigation = await get_navigation();
    
    // if (!audits) {
    //   return {
    //     notFound: true,
    //   }
    // }
    return {
      props: {navigation},
    }
}