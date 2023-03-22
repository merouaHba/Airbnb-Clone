import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Polygon,
  FeatureGroup,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"
import { Property } from "../typing";
import CardInfo from "./CardInfo";
import Link from "next/link";
import PopupCard from "./PopupCard";
// import useGeoLocation from "hooks/useGeoLocation";

function Map({properties}:{properties:{property:Property}}) {


  return (
    <MapContainer
      center={[Object.values(properties)[0].location.lat,Object.values(properties)[1].location.lng]}
      zoom={6}
      scrollWheelZoom={false}
      style={{ height: "80vh"}}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
           
      {Object.values(properties).map((item) => {
        console.log(item.location.lat, item.location.lng);
          return (
            <Marker
              position={[item.location.lat, item.location.lng]}
              icon={greenIcon}
              key={item._id}
            >
              <Popup>
                      <PopupCard property={item} />
              </Popup>
            </Marker>
          );
      })}
    </MapContainer>
  );
}
var greenIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon.png",
  iconSize: [20, 30],
});
export default Map;

// // import { Map, TileLayer, Polygon } from "react-leaflet";
// // import L from "leaflet";
// // import "leaflet/dist/leaflet.css";
// import React from "react";
// import { Map, TileLayer, Polygon } from "react-leaflet";

// const MapComponent = () => {
//   const positions = [
//     [51.505, -0.09],
//     [51.5, -0.1],
//     [51.51, -0.06],
//   ];

//   return (
//     <Map center={[51.505, -0.09]} zoom={13}>
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       <Polygon positions={positions} />
//     </Map>
//   );
// };

// export default MapComponent;

// // import React, { useState, useEffect } from "react";
// // import mapboxgl from "mapbox-gl";
// // import mapboxGlDraw from "@mapbox/mapbox-gl-draw";

// // mapboxgl.accessToken = "<YOUR MAPBOX ACCESS TOKEN>";

// // const Map = () => {
// //   const [map, setMap] = useState(null);

// //   useEffect(() => {
// //     const initializeMap = () => {
// //       const map = new mapboxgl.Map({
// //         container: "map",
// //         style: "mapbox://styles/mapbox/streets-v11",
// //         center: [-74.5, 40],
// //         zoom: 9,
// //       });

// //       setMap(map);
// //     };

// //       if (!map) initializeMap();
// //         if (map) {
// //           const draw = new mapboxGlDraw({
// //             displayControlsDefault: false,
// //             controls: {
// //               polygon: true,
// //               trash: true,
// //             },
// //           });

// //           map.addControl(draw);

// //           return () => {
// //             map.removeControl(draw);
// //           };
// //         }
// //   }, [map]);

// //   return <div id="map" style={{ width: "100%", height: "400px" }} />;
// // };

// // export default Map;

// // // import React, { useEffect, useState } from 'react'

// // // const Map = () => {
// // //     const {name} = useParams()
// // //     const [location, setLocation] = useState("chlef");
// // //     const [mapInfo, setMapInfo] = useState({})
// // //     useEffect(async( )=> {
// // //         await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${Location} & key=${process.env.REACT_GOOGLE_API_KEY}`).then(res=>res.json()).then(data=>setLocation(data.results[0].geometry.location))
// // //         await axios.post("http://localhost:8000/api/getMapinfo", name).then(res => {
// // //         setMapInfo(response.data.results)
// // //     })
// // //     },[])
// // //   return (
// // //     <div>Map</div>
// // //   )
// // // }

// // // export default Map
