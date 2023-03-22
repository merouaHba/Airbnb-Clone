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
import L from "leaflet";
import { Property } from "../typing";
// import CardInfo from "./CardInfo";
// import useGeoLocation from "hooks/useGeoLocation";

function test({
  width,
  properties,
}: {
  width: string;
  properties: { property: Property };
}) {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={6}
      scrollWheelZoom={false}
      style={{ height: "80vh"}}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      {/* 
      {Object.values(properties).map((item) => {
        console.log(item.location.lat, item.location.lng);
        return (
          <Marker
            position={[item.location.lat, item.location.lng]}
            icon={greenIcon}
            key={item._id}
          >
            <Popup>
              <CardInfo />
            </Popup>
          </Marker>
        );
      })} */}
    </MapContainer>
  );
}
var greenIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon.png",
  iconSize: [20, 30],
});
export default test;
