import React from "react";
import { Tabs as CustomTabs, TabList, Tab, TabPanel } from "react-tabs";
import styles from "./tabs.module.css";
import { Separator } from "../ui/separator";
import TabContent from "./TabContent";

import * as Models from '@/interfaces/news-response'

interface ITabsProps extends Models.NewsResponse.INewsResponse {

}

const Tabs: React.FC<ITabsProps> = ({ data }) => {
  let categoryList = data.categoryList;

  return (
    <CustomTabs disableUpDownKeys disableLeftRightKeys defaultIndex={0} className={"px-4 py-4 relative"}>
      <TabList
        className={
          "flex overflow-x-auto items-center justify-between gap-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        }
      >
        {categoryList?.map(({ categoryName, categoryId }) => {
          return (
            <Tab
              selectedClassName={styles.active}
              className={"text-nowrap h-10 flex"}
              key={categoryId}
            >
              {categoryName}
            </Tab>
          );
        })}
      </TabList>
      <Separator
        orientation="horizontal"
        className="flex w-full bg-separtaror mt-1 mb-4"
      />
      {categoryList?.map(({categoryId}) => {
        return (
          <TabPanel key={categoryId} className={"grid grid-cols-1 gap-y-8"}>
            {data.postList?.map((item, index) => {
              return (
                <TabContent key={index.toString()} item={item} />
              );
            })}
          </TabPanel>
        )
      })}
    </CustomTabs>
  );
}

export default Tabs;
