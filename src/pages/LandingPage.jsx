import React, { useRef } from "react";
import { MapComponent, Widget } from "../components";
export default function LandingPage() {
  let dummyData = {
    cities: [
      {
        name: "New York",
        sales: {
          historical: [
            { month: "Jan", year: 2021, value: 10000 },
            { month: "Feb", year: 2021, value: 12000 },
            { month: "Mar", year: 2021, value: 15000 },
            { month: "Apr", year: 2021, value: 11000 },
            { month: "May", year: 2021, value: 13000 },
            { month: "Jun", year: 2021, value: 14000 },
            { month: "Jul", year: 2021, value: 16000 },
            { month: "Aug", year: 2021, value: 18000 },
            { month: "Sep", year: 2021, value: 17000 },
            { month: "Oct", year: 2021, value: 19000 },
            { month: "Nov", year: 2021, value: 20000 },
            { month: "Dec", year: 2021, value: 22000 },
          ],
          forecast: [
            { month: "Jan", year: 2022, value: 23000 },
            { month: "Feb", year: 2022, value: 24000 },
            { month: "Mar", year: 2022, value: 25000 },
            { month: "Apr", year: 2022, value: 26000 },
            { month: "May", year: 2022, value: 27000 },
            { month: "Jun", year: 2022, value: 28000 },
            { month: "Jul", year: 2022, value: 29000 },
            { month: "Aug", year: 2022, value: 30000 },
            { month: "Sep", year: 2022, value: 31000 },
            { month: "Oct", year: 2022, value: 32000 },
            { month: "Nov", year: 2022, value: 33000 },
            { month: "Dec", year: 2022, value: 34000 },
          ],
        },
      },
      {
        name: "London",
        sales: {
          historical: [
            { month: "Jan", year: 2021, value: 8000 },
            { month: "Feb", year: 2021, value: 9000 },
            { month: "Mar", year: 2021, value: 10000 },
            { month: "Apr", year: 2021, value: 8500 },
            { month: "May", year: 2021, value: 9500 },
            { month: "Jun", year: 2021, value: 10500 },
            { month: "Jul", year: 2021, value: 11000 },
            { month: "Aug", year: 2021, value: 11500 },
            { month: "Sep", year: 2021, value: 12000 },
            { month: "Oct", year: 2021, value: 12500 },
            { month: "Nov", year: 2021, value: 13000 },
            { month: "Dec", year: 2021, value: 13500 },
          ],
          forecast: [
            { month: "Jan", year: 2022, value: 14000 },
            { month: "Feb", year: 2022, value: 14500 },
            { month: "Mar", year: 2022, value: 15000 },
            { month: "Apr", year: 2022, value: 15500 },
            { month: "May", year: 2022, value: 16000 },
            { month: "Jun", year: 2022, value: 16500 },
            { month: "Jul", year: 2022, value: 17000 },
            { month: "Aug", year: 2022, value: 17500 },
            { month: "Sep", year: 2022, value: 18000 },
            { month: "Oct", year: 2022, value: 18500 },
            { month: "Nov", year: 2022, value: 19000 },
            { month: "Dec", year: 2022, value: 19500 },
          ],
        },
      },
      {
        name: "Tokyo",
        sales: {
          historical: [
            { month: "Jan", year: 2021, value: 12000 },
            { month: "Feb", year: 2021, value: 13000 },
            { month: "Mar", year: 2021, value: 14000 },
            { month: "Apr", year: 2021, value: 12500 },
            { month: "May", year: 2021, value: 13500 },
            { month: "Jun", year: 2021, value: 14500 },
            { month: "Jul", year: 2021, value: 15000 },
            { month: "Aug", year: 2021, value: 15500 },
            { month: "Sep", year: 2021, value: 16000 },
            { month: "Oct", year: 2021, value: 16500 },
            { month: "Nov", year: 2021, value: 17000 },
            { month: "Dec", year: 2021, value: 17500 },
          ],
          forecast: [
            { month: "Jan", year: 2022, value: 18000 },
            { month: "Feb", year: 2022, value: 18500 },
            { month: "Mar", year: 2022, value: 19000 },
            { month: "Apr", year: 2022, value: 19500 },
            { month: "May", year: 2022, value: 20000 },
            { month: "Jun", year: 2022, value: 20500 },
            { month: "Jul", year: 2022, value: 21000 },
            { month: "Aug", year: 2022, value: 21500 },
            { month: "Sep", year: 2022, value: 22000 },
            { month: "Oct", year: 2022, value: 22500 },
            { month: "Nov", year: 2022, value: 23000 },
            { month: "Dec", year: 2022, value: 23500 },
          ],
        },
      },
      {
        name: "New York",
        sales: {
          historical: [
            { month: "Jan", year: 2021, value: 10000 },
            { month: "Feb", year: 2021, value: 12000 },
            { month: "Mar", year: 2021, value: 15000 },
            { month: "Apr", year: 2021, value: 11000 },
            { month: "May", year: 2021, value: 13000 },
            { month: "Jun", year: 2021, value: 14000 },
            { month: "Jul", year: 2021, value: 16000 },
            { month: "Aug", year: 2021, value: 18000 },
            { month: "Sep", year: 2021, value: 17000 },
            { month: "Oct", year: 2021, value: 19000 },
            { month: "Nov", year: 2021, value: 20000 },
            { month: "Dec", year: 2021, value: 22000 },
          ],
          forecast: [
            { month: "Jan", year: 2022, value: 23000 },
            { month: "Feb", year: 2022, value: 24000 },
            { month: "Mar", year: 2022, value: 25000 },
            { month: "Apr", year: 2022, value: 26000 },
            { month: "May", year: 2022, value: 27000 },
            { month: "Jun", year: 2022, value: 28000 },
            { month: "Jul", year: 2022, value: 29000 },
            { month: "Aug", year: 2022, value: 30000 },
            { month: "Sep", year: 2022, value: 31000 },
            { month: "Oct", year: 2022, value: 32000 },
            { month: "Nov", year: 2022, value: 33000 },
            { month: "Dec", year: 2022, value: 34000 },
          ],
        },
      },
      {
        name: "London",
        sales: {
          historical: [
            { month: "Jan", year: 2021, value: 8000 },
            { month: "Feb", year: 2021, value: 9000 },
            { month: "Mar", year: 2021, value: 10000 },
            { month: "Apr", year: 2021, value: 8500 },
            { month: "May", year: 2021, value: 9500 },
            { month: "Jun", year: 2021, value: 10500 },
            { month: "Jul", year: 2021, value: 11000 },
            { month: "Aug", year: 2021, value: 11500 },
            { month: "Sep", year: 2021, value: 12000 },
            { month: "Oct", year: 2021, value: 12500 },
            { month: "Nov", year: 2021, value: 13000 },
            { month: "Dec", year: 2021, value: 13500 },
          ],
          forecast: [
            { month: "Jan", year: 2022, value: 14000 },
            { month: "Feb", year: 2022, value: 14500 },
            { month: "Mar", year: 2022, value: 15000 },
            { month: "Apr", year: 2022, value: 15500 },
            { month: "May", year: 2022, value: 16000 },
            { month: "Jun", year: 2022, value: 16500 },
            { month: "Jul", year: 2022, value: 17000 },
            { month: "Aug", year: 2022, value: 17500 },
            { month: "Sep", year: 2022, value: 18000 },
            { month: "Oct", year: 2022, value: 18500 },
            { month: "Nov", year: 2022, value: 19000 },
            { month: "Dec", year: 2022, value: 19500 },
          ],
        },
      },
      {
        name: "Tokyo",
        sales: {
          historical: [
            { month: "Jan", year: 2021, value: 12000 },
            { month: "Feb", year: 2021, value: 13000 },
            { month: "Mar", year: 2021, value: 14000 },
            { month: "Apr", year: 2021, value: 12500 },
            { month: "May", year: 2021, value: 13500 },
            { month: "Jun", year: 2021, value: 14500 },
            { month: "Jul", year: 2021, value: 15000 },
            { month: "Aug", year: 2021, value: 15500 },
            { month: "Sep", year: 2021, value: 16000 },
            { month: "Oct", year: 2021, value: 16500 },
            { month: "Nov", year: 2021, value: 17000 },
            { month: "Dec", year: 2021, value: 17500 },
          ],
          forecast: [
            { month: "Jan", year: 2022, value: 18000 },
            { month: "Feb", year: 2022, value: 18500 },
            { month: "Mar", year: 2022, value: 19000 },
            { month: "Apr", year: 2022, value: 19500 },
            { month: "May", year: 2022, value: 20000 },
            { month: "Jun", year: 2022, value: 20500 },
            { month: "Jul", year: 2022, value: 21000 },
            { month: "Aug", year: 2022, value: 21500 },
            { month: "Sep", year: 2022, value: 22000 },
            { month: "Oct", year: 2022, value: 22500 },
            { month: "Nov", year: 2022, value: 23000 },
            { month: "Dec", year: 2022, value: 23500 },
          ],
        },
      },
    ],
  };

  let containerRef = useRef();

  return (
    <div className="pt-5 px-5 h-screen w-screen" ref={containerRef}>
      <h1
        style={{
          zIndex: 1000,
        }}
        className="absolute top-0 left-3 font-semibold text-3xl p-5 text-white"
      >
        Hello User,
      </h1>

      <div className="flex overflow-auto h-full w-full mt-20">
        {dummyData.cities.map((item, key) => (
          <Widget key={key} name={item.name} />
        ))}
      </div>
      <MapComponent />
    </div>
  );
}
