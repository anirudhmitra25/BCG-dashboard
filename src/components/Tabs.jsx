import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function TabsComponent() {
  const [activeTab, setActiveTab] = React.useState("backlog");
  const data = [
    {
      label: "Backlog",
      value: "backlog",
      numVal: "10",
      desc: <></>,
    },
    {
      label: "Pending",
      value: "pending",
      numVal: "34",
      desc: <></>,
    },
    {
      label: "Final Sign Off",
      value: "finalSignOff",
      numVal: "0",
      desc: <></>,
    },
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none bg-transparent px-2"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-teal-300 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value, numVal }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={
              activeTab === value
                ? "text-teal-300 font-semibold text-sm"
                : "text-white font-semibold text-sm"
            }
          >
            {label}
            <span className="text-gray-700 text-xs font-semibold pl-2">
              {numVal}
            </span>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
