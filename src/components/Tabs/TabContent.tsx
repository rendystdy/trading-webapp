import React from "react";
import { ChevronRight } from "lucide-react";
import { Separator } from "../ui/separator";

import * as Models from '@/interfaces/news-response'
import { Link } from "react-router-dom";

interface ITabContentProps {
  item: Models.NewsResponse.PostListEntity
}

const TabContent: React.FC<ITabContentProps> = ({ item }) => {
  return (
    <div>
      <img src={'/assets/images/image-1.png'} alt="image-1" className="w-full object-cover" />
      <div className="flex w-full items-center justify-between py-2">
        <span className="font-poppins font-normal text-sm text-darkGrey">
          {item.publishDate}
        </span>
        <span className="font-poppins font-normal text-sm text-yellow-400 text-right">
          'Category Name'
        </span>
      </div>
      <h1 className="font-poppins font-semibold text-xl text-veryDarkGreySecond mb-2">
        {item.postTitle}
      </h1>
      <p className="font-poppins font-normal text-base text-veryDarkGreySecond mb-2 line-clamp-2">
        {item.description}
      </p>
      <div className="flex items-center mb-8">
        <span className="font-poppins font-medium text-base text-darkBlue">
          <Link to={`/news/announcement/${item.postId}`}>
          Read More 
          </Link>
        </span>
        <ChevronRight className="text-darkBlue" />
      </div>
      <Separator orientation="horizontal" className="bg-black/10" />
    </div>
  );
};

export default TabContent;
