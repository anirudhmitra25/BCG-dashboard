import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";
import "./styles/stylesheet.css";
import Percentage from "./Percentage";

let DefaultIcon = L.icon({
  iconUrl: icon,
});

L.Marker.prototype.options.icon = DefaultIcon;

const mockData = [
  {
    name: "Tokyo",
    location: [35.6764, 139.65],
    historical: "80",
    aIForecast: "82",
  },
  {
    name: "London",
    location: [51.5072, 0.1276],
    historical: "80",
    aIForecast: "82",
  },
  {
    name: "New York",
    location: [43.0, -75.0],
    historical: "80",
    aIForecast: "50",
  },
];

export default function MapComponent() {
  let mapRef = useRef();

  return (
    <MapContainer
      className="absolute inset-0 z-0 "
      ref={mapRef}
      center={[51.505, -0.09]}
      zoom={4}
      scrollWheelZoom={true}
      maxBounds={[
        [85, -180],
        [-85, 180],
      ]}
      maxBoundsViscosity={2}
      minZoom={3}
      maxZoom={6}
      zoomControl={false}
      whenReady={(mapInstance) => {
        const leafletMap = mapInstance.target;
        leafletMap.flyTo([51.505, -0.09], 5, {
          duration: 2,
          easeLinearity: 1,
        });
      }}
    >
      <div className="w-screen h-screen bg-cyan-900"></div>
      <TileLayer
        opacity={0.6}
        url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
      />
      {mockData.map((item, key) => (
        <Marker key={key} position={item.location}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Tooltip>
              <div className="p-3">
                <h1 className="text-lg pb-2">{item.name}</h1>
                <div className=" border-b-2 border-blue-gray-200 mb-3" />
                <div className="flex pb-2 items-center justify-between">
                  <span className="mr-2 font-semibold text-lg">
                    AI Forecast:{" "}
                  </span>
                  <Percentage percentage={parseInt(item.aIForecast)} />
                </div>

                <div className="flex items-center justify-between">
                  <span className="mr-2 font-semibold text-lg">
                    Historical Forecast:
                  </span>{" "}
                  <Percentage percentage={parseInt(item.historical)} />
                </div>
              </div>
            </Tooltip>
          </motion.div>
        </Marker>
      ))}
    </MapContainer>
  );
}
