import React, { useState } from "react";
import Chart from "react-apexcharts";
import "react-resizable/css/styles.css";
import { Resizable } from "react-resizable";
import { TabsComponent } from "../components";
import { IoMdMailUnread } from "react-icons/io";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import { IoFilterSharp, IoArrowBackSharp } from "react-icons/io5";
import { Switch } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import mockData from "../helper/generateMockData";

export default function DetailsPage() {
  const initialSidebarWidth = window.innerWidth * 0.28;
  const [width, setWidth] = React.useState(initialSidebarWidth);
  const [selectedCard, setSelectedCard] = useState(0);
  const [isOpen, setIsOpen] = React.useState(true);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const selectedData = mockData[selectedCard];

  const handleResize = (event, { element, size, handle }) => {
    setWidth(size.width);
  };

  const tableData = extractTableData(selectedData);

  return (
    <div className="flex h-screen bg-blue-gray-800 overflow-auto">
      <Resizable
        width={width}
        onResize={handleResize}
        className="bg-gray-200"
        handle={
          <div className="absolute right-0 top-0 bottom-0 bg-blue-gray-800 w-1 cursor-col-resize"></div>
        }
        axis="x"
      >
        <div className="flex flex-col h-full">
          <Sidebar
            width={width}
            height="100%"
            selectedCard={selectedCard}
            handleCardClick={handleCardClick}
            isOpen={isOpen}
          />
        </div>
      </Resizable>
      <div className="flex-grow">
        <MainSection
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedData={selectedData}
        />
        <div className="">{renderTable(tableData)}</div>
      </div>
    </div>
  );
}

const MainSection = ({ selectedData, setIsOpen, isOpen }) => {
  const height = window.innerHeight * 0.5;

  const [toggleState, setToggleState] = React.useState({
    aiForecast: true,
    finalForecast: true,
  });

  const handleToggle = (toggleName) => {
    setToggleState({
      ...toggleState,
      [toggleName]: !toggleState[toggleName],
    });
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const chartOptions = {
    chart: {
      type: "line",
      height: height,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      // width: [5, 7, 5], // Adjust the stroke width as needed
      curve: "straight",
      // dashArray: [
      //   [0, 8, 5],
      //   [0, 8, 5],
      //   [0, 8, 5],
      // ],
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: "#7CB9E8",
      xaxis: {
        lines: {
          show: true,
        },
        axisBorder: {
          color: "#7CB9E8",
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
        axisBorder: {
          color: "#7CB9E8",
        },
      },
    },
    yaxis: {
      title: {
        text: "CONSUMPTION (FT, THOUSANDS)",
        style: {
          color: "white",
        },
      },
      axisBorder: {
        show: true,
      },
      labels: {
        show: true,
        style: {
          colors: ["#818589"],
        },
      },
      min: 0,
      max: 900,
    },
    xaxis: {
      categories: [
        "Q2 2022",
        "Q3 2022",
        "Q4 2022",
        "Q1 2023",
        "Q2 2023",
        "Q3 2023",
        "Q4 2023",
        "Q1 2024",
        "Q2 2024",
        "Q3 2024",
        "Q4 2024",
        "Q1 2025",
        "Q2 2025",
        "Q3 2025",
        "Q4 2025",
        "Q1 2026",
        "Q2 2026",
        "Q3 2026",
      ],
      labels: {
        show: true,
        style: {
          colors: "#818589",
        },
      },
    },
    colors: ["#008000", "#7CB9E8", "#FFFF00"],
  };

  const filteredSeries = selectedData.series
    .map((s) => {
      if (s.name === "Series 1" && !toggleState.aiForecast) return null;
      if (s.name === "Series 2" && !toggleState.finalForecast) return null;
      return s;
    })
    .filter(Boolean);

  const adjustedColors = filteredSeries.map((s) => {
    if (s.name === "Series 2") return "#FFFF00";
    if (s.name === "Series 3") return "#7CB9E8";
    return "#008000";
  });

  chartOptions.colors = adjustedColors;

  const splitIndex = Math.floor(filteredSeries.length / 2);
  const firstHalfSeries = filteredSeries.slice(0, splitIndex);
  const secondHalfSeries = filteredSeries.slice(splitIndex);

  return (
    <div className="flex flex-col bg-black">
      <div className="flex bg-blue-gray-900 px-2 py-4 items-center">
        <div className="">
          {isOpen ? (
            <MdKeyboardArrowLeft
              onClick={toggleSidebar}
              className="h-10 w-10 bg-cyan-300 cursor-pointer transition-transform transform text-black rounded-md"
            />
          ) : (
            <MdKeyboardArrowRight
              onClick={toggleSidebar}
              className="h-10 w-10 bg-cyan-300 cursor-pointer transition-transform transform text-black rounded-md"
            />
          )}
        </div>
        <div className="ml-12 w-1/5 my-3">
          <span className="text-white font-semibold">{selectedData.name}</span>
        </div>
        <div className="flex items-center">
          <div className="border-l-2 border-dashed border-gray-400 h-5 mx-4"></div>
          <div>
            <span className="text-white mr-4 text-xs">
              Stack ID: {selectedData.stackId}
            </span>
          </div>
          <div className=" bg-blue-gray-600 flex rounded-xl opacity-90 mx-8">
            <div className="mx-8 p-2">
              <h1 className=" text-gray-900 font-bold opacity-70">FORECAST</h1>
              <span className="text-white font-semibold">
                {selectedData.forecast_1}
              </span>
            </div>
            <div className="mx-8 p-2">
              <h1 className=" text-gray-900 font-bold opacity-70">FORECAST</h1>
              <span className="text-white font-semibold">
                {selectedData.forecast_2}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-gray-900 my-3 py-3 h-full flex items-center">
        <span className="text-white mr-4 text-xs ml-3 ">
          SPECIAL REQUIREMENTS
        </span>
        <Switch
          id="include"
          className="border-gray-400 border-2 bg-transparent"
        />
        <label htmlFor="include" className="text-white text-xs ml-2">
          INCLUDE
        </label>
      </div>
      <section className="px-5">
        <div>
          <div className="flex font-semibold text-white my-2">
            <div className="w-1/2 text-right mr-2">HISTORICAL</div>
            <div className="w-1/2 ml-2 text-cyan-600">FORECAST</div>
            <div></div>
          </div>
          <div className="flex items-center">
            <div className="px-3 flex">
              <Switch
                checked={toggleState.aiForecast}
                onChange={() => handleToggle("aiForecast")}
                className="border-gray-400 border-2 bg-transparent"
              />
              <div
                style={{
                  backgroundColor: "#008000",
                }}
                className="w-3 ml-3 rounded-sm"
              ></div>
              <label htmlFor="ai" className="text-white text-xs ml-2">
                AI FORECAST
              </label>
            </div>
            <div className="px-3 flex">
              <Switch
                checked={toggleState.finalForecast}
                onChange={() => handleToggle("finalForecast")}
                className="border-gray-400 border-2 bg-transparent"
              />
              <div
                style={{
                  backgroundColor: "#FFFF00",
                }}
                className="w-3 ml-3 rounded-sm"
              ></div>
              <label htmlFor="ai" className="text-white text-xs ml-2">
                FINAL FORECAST
              </label>
            </div>
            <div className="px-3 flex items-center">
              <div
                style={{
                  backgroundColor: "#7CB9E8",
                }}
                className="h-1 w-5 ml-3 rounded-sm"
              ></div>
              <span className="text-white text-xs ml-2">CONSUMPTION</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-full">
          <div className="w-full">
            <Chart
              options={chartOptions}
              series={[...firstHalfSeries, ...secondHalfSeries]}
              type="line"
              height={height}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
const sidebarVariants = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 600,
      damping: 30,
    },
  },
  closed: {
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 600,
      damping: 30,
    },
  },
};

const Sidebar = ({ width, height, selectedCard, handleCardClick, isOpen }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  return (
    <>
      <div
        style={{ width }}
        className="relative bg-blue-gray-900 overflow-auto"
      >
        <div className="py-2 px-3">
          <div className="flex justify-between">
            <IoArrowBackSharp
              onClick={() => navigate("/")}
              className="w-5 h-10 text-white cursor-pointer transition-transform transform hover:scale-125"
            />
          </div>
          <h1 className=" text-white font-semibold">Sample Stack</h1>
        </div>

        <TabsComponent />

        <div className="flex items-center text-white">
          <span className="mx-3">Filter</span>
          <IoFilterSharp className="text-teal-300" />
        </div>
        <div className="overflow-auto">
          {mockData.map((ele, key) => (
            <motion.div
              key={key}
              initial="closed"
              animate={"open"}
              variants={sidebarVariants}
              style={{ width, height: "100%" }}
              className="relative bg-blue-gray-900 overflow-auto"
            >
              <div
                className={`cursor-pointer flex-col px-3 pb-5 items-center justify-center mt-3 my-3 text-white rounded mx-2 border-2 ${
                  selectedCard === key
                    ? "border-blue-500 border-4 bg-blue-gray-700"
                    : "border-blue-gray-800"
                }`}
                key={key}
                onClick={() => handleCardClick(key)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex mt-3">
                    <input type="checkbox" className="mr-2" />
                    <button className="mx-5 shadow-md shadow-black flex items-center bg-gray-300 text-gray-800 text-sm px-4 mr-2 rounded-md">
                      <FaLongArrowAltUp />
                      <span className=" font-extrabold text-gray-800">
                        FCAST STAB
                      </span>
                    </button>
                    <button className="mx-5 shadow-md shadow-black flex items-center bg-gray-300 text-gray-800 text-sm px-4 mr-2 rounded-md">
                      <FaLongArrowAltDown />
                      <span className="font-extrabold text-gray-800">
                        FCAST ACC
                      </span>
                    </button>
                  </div>
                  <IoMdMailUnread className=" text-teal-300" />
                </div>
                <div className="mt-2 mx-5">Sample Stack</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

const extractTableData = (selectedData) => {
  const labels = [selectedData.name];
  const seriesData = selectedData.series.map((series) => series.data);
  return { labels, data: seriesData };
};

const renderTable = (tableData) => {
  return (
    <table className="table-auto text-white font-semibold w-full border-0 overflow-auto">
      <tbody>
        {tableData.data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={
              rowIndex < tableData.data.length - 1
                ? "border-b border-blue-gray-600"
                : ""
            }
          >
            <td className="px-4 py-2">Data {rowIndex + 1}</td>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className="border-0 px-4 py-2 font-light text-sm text-gray-300"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
