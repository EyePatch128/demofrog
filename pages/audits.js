import Head from 'next/head'
import Image from "next/image"

import Layout from '../components/Layout'
import Button from "../components/Button/PrimaryButton"
import Audit from "../components/Audit/Audit"
import Section from "../components/Section/General"
import AuditTab from '../components/Audit/AuditTab'

//Queries
import { get_audits } from '../lib/query/audits'
import { get_navigation } from '../lib/query/navigation'


function Audits(props){
    const audits = props.audits.data;
    const navigation = props.navigation.data
    return(
        <Layout navigation={navigation}>
            <Head>
                <title>Audits</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <div className='pb-8 sm:pb-16 md:pb-20 w-full lg:pb-28 xl:pb-32'>
                <Section
                    title="Proffessional audits"
                    subtitle="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo."
                />
                <AuditTab data={audits}/>
            </div>
        </Layout>
    );
}

export default Audits;


export async function getStaticProps(context) {
    const audits = await get_audits()
    const navigation = await get_navigation();
    
    if (!audits) {
      return {
        notFound: true,
      }
    }
    return {
      props: {audits, navigation},
    }
  }