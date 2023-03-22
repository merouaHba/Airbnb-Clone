import React from "react";
import { Property } from "../typing";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { urlFor } from "../utilities/imageBuilder";
import { day, month, year, getLocation } from "../utilities/utilis";


function PopupCard({ property }: any) {
       const options = {
         type: "fade",
         gap: "0rem",
         autoplay: false,
         pauseOnHover: false,
         resetProgress: false,
         height: "15rem",
         padding: "0",
    };
        const src = urlFor(property.mainImage).url();

  return (
    <div className="flex justify-center h-80">
      <div className="popup oblock max-w-sm rounded-lg bg-white shadow-lg ">
        <a href="#!">
          <Splide
            options={options}
            aria-labelledby="autoplay-example-heading"
            hasTrack={false}
          >
            <div style={{ position: "relative" }}>
              <svg
                aria-hidden="true"
                role="presentation"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  display: "block",
                  fill: "transparent",
                  height: "24px",
                  width: "24px",
                  stroke: "#fff",
                  strokeWidth: "2",
                  overflow: "visible",
                  position: "absolute",
                  zIndex: "2",
                  top: "4%",
                  right: "5%",
                }}
              >
                <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
              </svg>
              <SplideTrack>
                <SplideSlide>
                  <img src={src} alt={""} className="rounded-t-lg" />
                </SplideSlide>
                {property.images.map((image: any) => (
                  <SplideSlide key={image._key}>
                    <img
                      src={urlFor(image).url()}
                      alt={""}
                      className="rounded-t-lg"
                    />
                  </SplideSlide>
                ))}
              </SplideTrack>
            </div>
          </Splide>
        </a>

        <div className="flex flex-col justify-center m-3">
          <div className="md:flex">
            <div className="md:flex-1">
              <p className="font-semibold text-md">
                {property.city},{property.country}
              </p>
            </div>
            <div className="mr-2 ratings text-sm flex items-center">
              <span className="mr-1">
                <svg
                  viewBox="0 0 1000 1000"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  style={{
                    height: "14px",
                    width: "14px",
                    fill: "currentcolor",
                  }}
                >
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"></path>
                </svg>
              </span>
              <span className="font-bold">4.76</span>
            </div>
          </div>
          <div className="text-sm font-light text-gray-700">
            {month(property.datedepart) == month(property.dateArrive)
              ? `${day(property.dateArrive)}- ${day(
                  property.datedepart
                )} ${month(property.dateArrive)}`
              : `${day(property.dateArrive)} ${month(
                  property.dateArrive
                )}-${day(property.datedepart)} ${month(property.datedepart)}`}
          </div>
          {/* <div className="md:flex flex-grow justify-between items-end"> */}
          <div className="md:flex">
            <div>
              <span className="font-bold text-sm">
                ${property.pricePerNight}
              </span>
              <span className=" font-light"> par nuit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupCard;
