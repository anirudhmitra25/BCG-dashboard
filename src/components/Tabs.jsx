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
      desc: <></>,
    },
    {
      label: "Pending",
      value: "pending",
      desc: <></>,
    },
    {
      label: "Final Sign Off",
      value: "finalSignOff",
      desc: <></>,
    },
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none bg-transparent px-3"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-teal-300 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
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
