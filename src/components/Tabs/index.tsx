import React, { useState } from "react";
import { Tabs as CustomTabs, TabList, Tab, TabPanel } from "react-tabs";
import styles from "./tabs.module.css";
import { Separator } from "../ui/separator";
import TabContent from "./TabContent";
import { ChevronLeft, ChevronRight, ChevronLeftCircle, ChevronRightCircle } from 'lucide-react'

import * as Models from '@/interfaces/news-response'
import { animateScroll as scroll } from 'react-scroll';
import { useAppSelector } from "@/app/hooks";
import { cn } from "@/lib/utils";

const filterPostByCategory = (postList: Models.NewsResponse.PostListEntity[], categoryIdToFilter: string) => {
  return postList.filter(post => post.postCategoryIds?.includes(categoryIdToFilter));
}

const Tabs = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 2;
  const [offset, setOffset] = useState(0);
  const news = useAppSelector(state => state.announcement.news);
  const [data, setData] = useState<Models.NewsResponse.PostListEntity[]>(news.data.postList ? news.data.postList.slice(offset, offset + perPage) : []);
  let categoryList = news.data.categoryList;

  const onScroll = (direction: string) => {
    if (direction === 'left') {
      return scroll.scrollMore(-200, {
        horizontal: true,
        duration: 100,
        smooth: true,
        containerId: 'container-tab-list'
      });
    } else {
      return scroll.scrollMore(200, {
        horizontal: true,
        duration: 100,
        smooth: true,
        containerId: 'container-tab-list'
      });
    }
  };

  const handleNext = (currPage: number) => {
    const pageCount = Math.ceil(news.data.postList ? news.data.postList.length / perPage : 0);
    if (currPage !== (pageCount-1)) {
      const offset = (currPage += 1) * perPage;
      setCurrentPage(prevCurrPage => prevCurrPage += 1);
      setOffset(offset);

      const newData = news.data.postList ? news.data.postList?.slice(offset, offset + perPage) : [];

      return setData(newData);
    }

    return;
  }

  const handlePrev = (currPage: number) => {
    if (currPage !== 0) {
      const offset = (currPage -= 1) * perPage;
      setCurrentPage(prevCurrPage => prevCurrPage -= 1);
      setOffset(offset);

      const newData = news.data.postList ? news.data.postList?.slice(offset, offset + perPage) : [];

      return setData(newData);
    }

    return;
  }

  const handleSelectTab = (index: number) => {
    if (index !== 0) {
      const filteredPost = filterPostByCategory(news.data.postList ? news.data.postList : [], news.data.categoryList ? news.data.categoryList[index].categoryId : '');
      setData(filteredPost.slice(offset, offset + perPage));
      setTabIndex(index);
    } else {
      setTabIndex(index);
      setData(news.data?.postList ? news.data.postList.slice(offset, offset + perPage) : []);
    }
  }

  return (
    <CustomTabs selectedIndex={tabIndex} onSelect={index => handleSelectTab(index)} disableUpDownKeys disableLeftRightKeys focusTabOnClick={true} defaultIndex={0} className={"px-4 py-4 relative"}>
      <TabList
        className={
          "flex overflow-x-auto pr-14 md:pr-14 items-center justify-between gap-x-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
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
      <div className="absolute top-2 right-4 h-10 bg-white flex items-center">
        <ChevronLeft className="cursor-pointer" onClick={() => onScroll('left')} />
        <ChevronRight className="cursor-pointer" onClick={() => onScroll('right')} />
      </div>
      <Separator
        orientation="horizontal"
        className="flex w-full bg-separtaror mt-1 mb-4"
      />
      {categoryList?.map(({ categoryId }) => {
        return (
          <TabPanel key={categoryId} className={"grid grid-cols-1 gap-y-8"}>
            {data?.map((item, index) => {
              return (
                <TabContent key={index.toString()} item={item} />
              );
            })}
          </TabPanel>
        )
      })}
      <div className="flex items-center justify-center gap-x-6 my-9">
        <ChevronLeftCircle onClick={() => handlePrev(currentPage)} className={cn("h-11 w-11 text-darkBlueSecondary cursor-pointer", currentPage === 0 ? "text-gray" : "text-darkBlueSecondary")} />
        <ChevronRightCircle onClick={() => handleNext(currentPage)} className={cn("h-11 w-11 text-darkBlueSecondary cursor-pointer")} />
      </div>
    </CustomTabs>
  );
}

export default Tabs;
