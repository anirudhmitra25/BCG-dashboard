import React from "react";
import { motion } from "framer-motion";

const Percentage = ({ percentage }) => {
  return (
    <motion.svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx="50"
        cy="50"
        r="25"
        stroke="#6CB4EE"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="157"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: (i) => {
            const delay = 0;
            return {
              pathLength: percentage / 100,
              opacity: 1,
              transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 },
              },
            };
          },
        }}
        custom={1}
      />
      <text className=" font-semibold" x="50%" y="55%" textAnchor="middle" fill="white" fontSize="12">
        {percentage}%
      </text>
    </motion.svg>
  );
};

export default Percentage;
