import React from "react";
import Chart from "react-apexcharts";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";

const Widget = ({ name, forecasts }) => {
  const [widgetDimensions, setWidgetDimensions] = useState({
    width: 0,
    height: 0,
  });
  let state = {
    options: {
      legend: {
        show: false,
      },
      chart: {
        id: "chart",
        toolbar: {
          show: false,
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  let widgetRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (widgetRef.current) {
        const { width, height } = widgetRef.current.getBoundingClientRect();
        setWidgetDimensions({ width, height });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      ref={widgetRef}
      className="rounded-lg p-4 mb-4 shadow-lg mx-4 w-1/6 min-w-52 max-h-60"
      style={{
        zIndex: 1000,
        backgroundColor: "rgba(31, 41, 55, 0.3)",
      }}
      drag
      dragConstraints={{
        left: 0,
        right: window.innerWidth - widgetDimensions.width,
        top: 0,
        bottom: window.innerHeight - widgetDimensions.height,
      }}
    >
      <Link to={`/details/${name}`} className="no-underline">
        <h2 className="text-lg text-white font-semibold mb-2">{name}</h2>
        <p className="text-sm font-semibold text-white">forecast:</p>
        <div className="placeholder-div w-full h-20 flex items-center justify-between min-h-20">
          <span className="rounded text-white text-lg font-semibold">
            {"45.7"}
          </span>
          <Chart
            className="w-3/4 h-full"
            options={state.options}
            series={state.series}
            type="line"
          />
          <FaLongArrowAltUp className="min-h-6 text-green-700" />
        </div>
        <p className="text-sm font-semibold text-white">forecast:</p>
        <div className="placeholder-div w-full h-20 flex items-center justify-between min-h-20">
          <span className="rounded text-white text-lg font-semibold">
            {"45.7"}
          </span>
          <Chart
            className="w-3/4 h-full"
            options={state.options}
            series={state.series}
            type="line"
          />
          <FaLongArrowAltDown className="min-h-6 text-red-700" />
        </div>
      </Link>
    </motion.div>
  );
};

export default Widget;
