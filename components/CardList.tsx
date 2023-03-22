import Link from 'next/link';
import React from 'react'
import CardInfo from './CardInfo';

const CardList = ({properties,width}:any) => {
  return (
    <div className="flex pb-10 pt-28 px-8 flex-wrap gap-y-12">
      {properties.map((property: any) => {
        return (
          <>
            <div
              
              className={`md:max-w-3xl  sm:max-w-sm ${width}`}
            >
              <CardInfo property={property} key={property._id} />
            </div>
          </>
        );
      })}{" "}
    </div>
  );
}

export default CardList