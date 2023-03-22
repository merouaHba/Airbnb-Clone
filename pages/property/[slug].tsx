import Image from 'next/image';
import React, { useState } from 'react'
import { sanityClient } from '../../sanity.config';
import { Property } from '../../typing';
import {urlFor} from '../../utilities/imageBuilder'

const property = ({title,
            location,
            propertyType,
            mainImage,
            images,
            pricePerNight,
            beds,
            bedRooms,
            description,
            host,
    reviews }: Property) => {
  const src = urlFor(mainImage).url()
  const srcHost = urlFor(host.image).url()
  // console.log(src)
  const [readMore,setReadMore] = useState(false)
  return (
    <>
      <div className="">
        <main className="mx-auto max-w-4xl px-2 py-3 xs:px-5">
          <section className="font-semibold mt-20">
            {/* Header Section */}
            <h1 className="text-lg">{description}</h1>
            <div className="flex space-x-5">
              <p className="flex-1 cursor-pointer text-xs underline md:text-sm">
                {/* {location} */}
              </p>
              <p className="flex cursor-pointer items-center text-xs text-gray-700 hover:underline">
                Share
              </p>
              <p className="flex cursor-pointer items-center text-xs text-gray-700 hover:underline">
                Save
              </p>
            </div>
            <div className="relative my-4 h-72 w-5/6 rounded-xl bg-black sm:h-80 lg:h-96 ">
              <Image
                alt="place"
                src={src}
                layout="fill"
                objectFit="cover"
                className="cursor-pointer rounded-xl transition duration-200 ease-in-out hover:opacity-80"
                unoptimized={true}
              />
            </div>
            {/* Middle Section */}
            <div className="relative flex space-x-2 xs:space-x-5">
              <div className=" space-y-4 divide-y">
                <div className="flex space-x-3 ">
                  <div className="flex-1">
                    <p className="text-base md:text-lg">{host.name}</p>
                    <p className="text-xs font-normal text-gray-500 md:text-sm">
                      {description}
                    </p>
                  </div>
                  <div className="relative h-10 w-10 cursor-pointer md:h-12 md:w-12">
                    <Image
                      alt="hostPicture"
                      src={srcHost}
                      layout="fill"
                      className="rounded-full"
                      objectFit="cover"
                      unoptimized={true}
                    />
                  </div>
                </div>
                <div className="space-y-3 pt-3">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <p className="flex flex-col pl-[4px] xs:pl-0 text-xs xs:text-sm">
                      Book Right Now
                      <a className="text-[10px] font-normal leading-4 text-gray-400">
                        This is one of the few places in {}.
                      </a>
                    </p>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <p className="flex flex-col text-sm">
                      Rating
                      <a className="text-[10px] font-normal leading-4 text-gray-400">
                        {5 * 20}% visitors have rated this place.
                      </a>
                    </p>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <p className="flex flex-col text-sm">
                      Experienced host
                      <a className="text-[10px] font-normal leading-4 text-gray-400">
                        {host.name} has {parseInt("5", 10) + 100} reviews for
                        other places.
                      </a>
                    </p>
                  </div>
                </div>
                <div className="space-y-3 pt-4 pb-1">
                  <div className="relative h-5 w-24">

                  </div>
                  <p className="text-xs font-normal">
                    Every booking includes free protection from Host
                    cancellations, listing inaccuracies, and other issues like
                    trouble checking in.
                  </p>
                </div>
                <div>
                  <p
                    className={`pt-4 text-xs font-normal ${
                      !readMore && "line-clamp-6"
                    } `}
                  >
                    {description}.
                  </p>
                  <span
                    className="mt-2 flex cursor-pointer items-center text-xs font-normal underline"
                    onClick={() => setReadMore(!readMore)}
                  >
                    {readMore ? <>View Less</> : <>Read More</>}
                  </span>
                </div>
                <div className="space-y-4 pt-5 pb-2">
                  <p className="text-lg">Where you&#39;ll sleep?</p>
                  <div className="w-40 space-y-1 rounded-xl border border-gray-400 border-opacity-80 p-5 text-xs">
                    Bedroom
                    <p className="font-normal">
                      {beds} king {beds > 1 ? "beds" : "bed"}
                    </p>
                  </div>
                </div>
                <div className="space-y-5 pt-5 pb-3">
                  <div className="flex space-x-2 xs:space-x-4">
                    <div className="relative h-8 w-11 cursor-pointer md:h-12 md:w-12 xs:h-11">
                      <Image
                        alt="hostPicture"
                        src={srcHost}
                        layout="fill"
                        className="rounded-full"
                        objectFit="cover"
                        unoptimized={true}
                      />
                    </div>
                    <a>
                      Hosted by {host.name}
                      <p className="text-xs font-normal">{host.name}</p>
                    </a>
                  </div>
                  <div className="space-y-2">
                    <p className="flex items-center text-xs font-normal">
                      {parseInt("5", 10) + 100} Reviews
                    </p>
                    <p className="flex items-center text-xs font-normal">
                      Identity Verified
                    </p>
                    <p className="flex items-center text-xs font-normal">
                      {5}% Response Rate
                    </p>
                  </div>
                  <p className="text-xs font-normal">
                    During your stay,
                    <br />I won&#39;t be available in person but can be
                    contacted through Airbnb messages and calls.
                  </p>
                </div>
              </div>
              {/* Side Price Table */}
              <div className="sticky top-24 mb-3 h-max space-y-5 rounded-xl border px-4 py-5 shadow-md bg-white">
                <a className="flex items-center text-2xl">
                  ${pricePerNight}{" "}
                  <p className="mt-1 pl-1 text-xs text-gray-500">night</p>
                </a>
                <div className="w-36 space-y-2 divide-y divide-gray-500 rounded-xl border border-gray-500 py-2 text-[8px] sm:w-52">
                  <div className="flex justify-between space-x-2 divide-x divide-gray-500 px-2 text-left child:w-full child:cursor-pointer"></div>
                  <div className="flex px-2 pt-2 child:cursor-pointer">
                    <a className="flex-1">GUESTS </a>
                  </div>
                </div>
                <button
                  className={`w-full rounded-md bg-airbnb py-2 text-xs text-white transition ease-in-out hover:scale-105 active:scale-95
                `}
                  disabled={true}
                >
                  Book Now
                </button>
                <div className="space-y-2">
                  <a className="flex justify-between text-xs font-normal">
                    <p className="text-gray-600 underline">
                      ${pricePerNight} x {8}
                    </p>
                    <p> ${pricePerNight * 8}</p>
                  </a>
                  <a className="flex justify-between text-xs font-normal">
                    <p className="text-gray-600 underline">Service Fee</p>
                  </a>
                </div>
                <div className="flex justify-between border-t pt-4 text-xs font-normal">
                  <p className="text-gray-600 underline">Total Amount</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}
export default property
export const getServerSideProps = async (context: any) => {
    const pageSlug = context.query.slug;
    const querry = `*[_type=="property" && slug.current ==$pageSlug][0]{
        title,
        location,
        propertyType,
        mainImage,
        images,
        pricePerNight,
        beds,
        bedRooms,
        description,
        host->{
            _id,
            name,
            slug,
            image
        },
        reviews[]{
           ...,
           travaller->{
            _id,
            name,
            slug,
            image
           } 
        }

    }`;
    const property = await sanityClient.fetch(querry, { pageSlug });
    console.log(property); 
    if (!property) {
        return {
            props: {
                property: null,
                notFound: true,
            },
        }
    }
    return {
        props: {
            title: property.title,
            location: property.location,
            propertyType: property.propertyType,
            mainImage: property.mainImage,
            images: property.images,
            pricePerNight: property.pricePerNight,
            beds: property.beds,
            bedRooms: property.bedRooms,
            description: property.description,
            host: property.host,
            reviews: property.reviews,
        }
    }
}
