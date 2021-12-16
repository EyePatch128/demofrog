import Head from 'next/head'
import Image from "next/image"

import Button from "../components/Button/PrimaryButton"
import Audit from "../components/Audit/Audit"
import Section from "../components/Section/General"

function Audits(props){
    return(
        <>
            <Head>
                <title>Audits</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <div className='pb-8 sm:pb-16 md:pb-20 w-full lg:pb-28 xl:pb-32'>
                <Section
                    title="Proffessional audits"
                    subtitle="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo."
                />
            </div>
        </>
    );
}

export default Audits;