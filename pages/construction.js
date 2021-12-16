import Head from 'next/head'
import Image from "next/image"

import Button from "../components/Button/PrimaryButton"
import Audit from "../components/Audit/Audit"
import Section from "../components/Section/General"

function Construction(props){
    return(
        <>
            <Head>
                <title>Under construction</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <div className='absolute top-0 left-0 bg-white z-50 w-screen h-screen overflow-hidden'>
                <div className='flex flex-col justify-center place-items-center mt-12'>
                    <div className='w-64 h-64 md:h-96 md:w-96'>
                        <Image src="/frog_construction.png" layout='responsive' width={400} height={400} priority={true}  />
                    </div>
                    <h1 className='font-sans text-xl text-center'>This website is currently under construction</h1>
                </div>
            </div>
        </>
    );
}

export default Construction;