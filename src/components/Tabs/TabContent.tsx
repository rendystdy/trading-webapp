import React from "react";
import { ChevronRight } from "lucide-react";
import { Separator } from "../ui/separator";

interface TabContentProps {
  item: {
    img: string;
    date: string;
    type: string;
    title: string;
    desc: string;
  };
}

const TabContent: React.FC<TabContentProps> = ({ item }) => {
  return (
    <div>
      <img src={item.img} alt="image-1" className="w-full object-cover" />
      <div className="flex w-full items-center justify-between py-2">
        <span className="font-poppins font-normal text-sm text-darkGrey">
          {item.date}
        </span>
        <span className="font-poppins font-normal text-sm text-yellow-400 text-right">
          {item.type}
        </span>
      </div>
      <h1 className="font-poppins font-semibold text-xl text-veryDarkGreySecond mb-2">
        {item.title}
      </h1>
      <p className="font-poppins font-normal text-base text-veryDarkGreySecond mb-2 line-clamp-2">
        {item.desc}
      </p>
      <div className="flex items-center mb-8">
        <span className="font-poppins font-medium text-base text-darkBlue">
          Read More
        </span>
        <ChevronRight className="text-darkBlue" />
      </div>
      <Separator orientation="horizontal" className="bg-separtaror" />
    </div>
  );
};

export default TabContent;
