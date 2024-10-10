import React from "react";
import { Tabs as CustomTabs, TabList, Tab, TabPanel } from "react-tabs";
import styles from "./tabs.module.css";
import { Separator } from "../ui/separator";
import TabContent from "./TabContent";
import { ChevronLeft, ChevronRight } from 'lucide-react'

import * as Models from '@/interfaces/news-response'
import { animateScroll as scroll } from 'react-scroll';

interface ITabsProps extends Models.NewsResponse.INewsResponse {

}

const Tabs: React.FC<ITabsProps> = ({ data }) => {
  let categoryList = data.categoryList;

  const onScroll = (direction: string) => {
    if (direction === 'left') {
        return scroll.scrollMore(-100, {
          horizontal: true,
          duration: 100,
          smooth: true,
          containerId: 'container-tab-list'
        });
    } else {
        return scroll.scrollMore(100, {
          horizontal: true,
          duration: 100,
          smooth: true,
          containerId: 'container-tab-list'
        });
    }
  };

  return (
    <CustomTabs focusTabOnClick={false} disableUpDownKeys disableLeftRightKeys defaultIndex={0} className={"px-4 py-4 relative"}>
      <TabList
        className={
          "flex overflow-x-auto pr-14 md:pr-0 items-center justify-between gap-x-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        }
        id="container-tab-list"
      >
        {categoryList?.map(({ categoryName, categoryId }) => {
          return (
            <Tab
              selectedClassName={styles.active}
              className={"text-nowrap h-10 flex cursor-default"}
              key={categoryId}
              aria-selected="false"
            >
              {categoryName}
              
            </Tab>
          );
        })}
      </TabList>
      <div className="absolute top-2 right-4 h-10 bg-white flex items-center md:hidden">
        <ChevronLeft className="cursor-pointer" onClick={() => onScroll('left')} />
        <ChevronRight className="cursor-pointer" onClick={() => onScroll('right')} />
      </div>
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
