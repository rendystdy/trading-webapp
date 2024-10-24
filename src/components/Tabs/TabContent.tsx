import React from "react";
import { ChevronRight } from "lucide-react";
import { Separator } from "../ui/separator";

import * as Models from '@/interfaces/news-response'
import { Link } from "react-router-dom";
import { useAppSelector } from "@/app/hooks";

interface ITabContentProps {
  item?: Models.NewsResponse.PostListEntity;
  categoryId?: string;
  status: 'idle' | 'loading' | 'failed';
}

const TabContent: React.FC<ITabContentProps> = ({ item, status, categoryId }) => {
  const news = useAppSelector(state => state.announcement.news);
  let categoryList = news?.data?.categoryList;
  const categoryById = categoryList?.filter(item => item.categoryId.includes(categoryId || ''));
  const categoryName = categoryById && categoryById?.length > 0 ? categoryById[0].categoryName : '-';
  if (status === 'loading') {
    return (
      <div className="w-full animate-pulse">
        <div className="w-full h-[295px] bg-gray rounded-sm" />
        <div className="flex w-full items-center justify-between py-2">
          <div className="w-36 h-5 bg-gray rounded-sm" />
          <div className="w-36 h-5 bg-gray rounded-sm" />
        </div>
        <div className="bg-gray w-full h-14 mb-4 rounded-sm" />
        <div className="bg-gray w-full h-12 mb-4 rounded-sm" />
        <div className="w-28 h-6 bg-gray rounded-sm" />
        <Separator orientation="horizontal" className="bg-black/10" />
      </div>
    );
  }
  return (
    <div className="flex border-b pb-6 gap-y-4 border-white/10 flex-col md:gap-x-4 md:flex-row md:items-start">
      <img src={'/assets/images/image-1.png'} alt="image-1" className="w-full object-cover md:w-1/2 md:h-auto" />
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <span className="font-poppins font-normal text-sm text-darkGrey dark:text-white">
            {item?.publishDate}
          </span>
          <span className="font-poppins font-normal text-sm text-yellow-400 text-right">
            {categoryName}
          </span>
        </div>
        <h1 className="font-poppins font-semibold text-xl text-veryDarkGreySecond line-clamp-2 dark:text-white">
          {item?.postTitle}
        </h1>
        <p className="font-poppins font-normal text-base text-veryDarkGreySecond line-clamp-2 dark:text-white">
          {item?.description}
        </p>
        <div className="flex items-center">
          <span className="font-poppins font-medium text-base text-darkBlue dark:text-mainBlue">
            <Link to={`/news/announcement/${item?.postId}`} state={{ categoryName }}>
              Read More
            </Link>
          </span>
          <ChevronRight className="text-darkBlue dark:text-mainBlue" />
        </div>
      </div>
    </div>
  );
};

export default TabContent;
