import React, { useState } from 'react'
import dynamic from "next/dynamic";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range"
import DatePicker from '../components/DatePicker';
import { sanityClient } from '../sanity.config';
import CardList from '../components/CardList';
import { useRouter } from 'next/router';
import { differenceInDays, format } from "date-fns";
import { Property } from '../typing';
import Link from 'next/link';



const Search = ({ properties }: any) => {
  const Map = dynamic(
    () => import("../components/Map"), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  );
  // const [searchInput, setSearchInput] = useState("");
  // const [active, setActive] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const router = useRouter();
  const router = useRouter();
  let { location, startDate = "", endDate = "", numberOfGuests = "" } = router.query;
  // if (!router.query) {
  //   return (
      
  //     router.push({
  //       pathname:"/"
  //     })
  //   )
  // }
  console.log(router.query);
  startDate = format(new Date(startDate.toString()), "dd MM yyyy");
  endDate = format(new Date(endDate.toString()), "dd MM yyyy");
  console.log(startDate)
  const range = `${startDate} - ${endDate}`;
  const numberOfNights = differenceInDays(
    new Date(
      parseInt(endDate.split(" ")[2]),
      parseInt(endDate.split(" ")[1]),
      parseInt(endDate.split(" ")[0])
    ),
    new Date(
      parseInt(startDate.split(" ")[2]),
      parseInt(startDate.split(" ")[1]),
      parseInt(startDate.split(" ")[0])
    )
  );
console.log('nights:',numberOfNights);
  const filteredResults = properties.filter((item: Property) => {
    console.log(
      item.numberOfGuests >= parseInt(numberOfGuests.toString()),
      item.numberOfGuests,
      parseInt(numberOfGuests.toString()),
      item.country.toLowerCase() === location ||
        item.city.toLowerCase() === location
    );
    return (
      item.maxNights >= numberOfNights &&
      (item.country.toLowerCase() === location ||
        item.city.toLowerCase() === location) &&
      item.numberOfGuests >= parseInt(numberOfGuests.toString())
    );
  });
  console.log(filteredResults)
  console.log(properties)
  return (
    <>
      {filteredResults.length && (
        <div className="flex">
          <div className="list" style={{ width: "60%" }}>
            <CardList
              properties={filteredResults}
              width=" md:w-1/2 sm:w-full"
            />
            {/* <Link href="/test">test</Link> */}
          </div>
          <div className="w-[40%]  pt-20 z-0">
            <Map properties={filteredResults} />
          </div>
        </div>
      )}
    </>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type=="property"]{ ..., host->}';
  const properties = await sanityClient.fetch(query);
  if (!properties.length) {
    return {
      props: {
        properties: [],
      },
    };
  }
  return {
    props: {
      properties,
    },
  };
};
export default Search