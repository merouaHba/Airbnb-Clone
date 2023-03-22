import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import CardInfo from '../components/CardInfo'
import { sanityClient } from '../sanity.config'
import { isMultiple } from '../utilities/utilis'
import { urlFor } from "../utilities/imageBuilder";
import CardList from '../components/CardList'


const Home: NextPage = ({ properties }: any) => {
  console.log(properties)
  return (
    <>
      {/* <div className="flex pb-10 pt-28 px-8 flex-wrap gap-y-12"> */}
      <CardList properties={properties} width=" md:w-1/4 sm:w-full" />

      {/* </div> */}
    </>
  );
}
export const getServerSideProps = async () => {
  const query = '*[_type=="property"]{ ..., host->}'
  const properties = await sanityClient.fetch(query)
  if (!properties.length) {
    return {
      props: {
        properties:[]
      },
    }
  }
   return {
     props: {
       properties,
     },
   };
}

export default Home
