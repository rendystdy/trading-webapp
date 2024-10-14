import Banner from "@/components/Banner";
import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import styles from "./tradingGuide.module.css";
import { Separator } from "@/components/ui/separator";
import DemoAccount from "./DemoAccount";
import Mt5 from "./Mt5";
import Trading from "./Trading";
import LoginLiveAccount from "./LoginLiveAccount";

const DUMMY_TUTORIAL = {
  categoryList: [
    "Demo Account",
    "MT5 Feature",
    "Trading",
    "Login Live Account",
  ],
  contentList: [
    {
      element: <DemoAccount />
    },
    {
      element: <Mt5 />
    },
    {
      element: <Trading />
    },
    {
      element: <LoginLiveAccount />
    },
  ],
};

const TabsTutorial = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const handleSelectTab = (index: number) => {
    setTabIndex(index);
  };
  return (
    <Tabs
      selectedIndex={tabIndex}
      onSelect={(index) => handleSelectTab(index)}
      disableUpDownKeys
      disableLeftRightKeys
      focusTabOnClick={true}
      defaultIndex={0}
      className={"px-2 py-4 relative"}
    >
      <TabList className={"flex w-full items-center justify-between"}>
        {DUMMY_TUTORIAL?.categoryList.map((item, index) => {
          return (
            <Tab
              selectedClassName={styles.active}
              className={
                "w-1/4 text-wrap h-12 cursor-default text-sm font-poppins text-center text-darkGreySecondary"
              }
              key={index}
              aria-selected="false"
            >
              {item}
            </Tab>
          );
        })}
      </TabList>
      <Separator
        orientation="horizontal"
        className="flex w-full bg-separtaror mt-1"
      />
      {DUMMY_TUTORIAL.contentList?.map(({element}, index) => {
        return (
          <TabPanel key={index} className={"grid grid-cols-1 gap-y-8"}>
            {element}
          </TabPanel>
        );
      })}
    </Tabs>
  );
};

function TradingGuide() {
  return (
    <div>
      <Banner
        title="Trading Guides and Tutorials"
        description="EsaFX cooperates with MetaTrader5, the world's most popular forex trading platform."
      />
      <div className="py-7 px-4">
        <h1 className="font-kumbh font-medium text-4xl text-center text-veryDarkBlue mb-6 md:mb-12">
          How to Use <span className="font-semibold">MT5</span>
        </h1>
        <TabsTutorial />
      </div>
    </div>
  );
}

export default TradingGuide;
