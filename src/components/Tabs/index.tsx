import React from "react";
import { Tabs as CustomTabs, TabList, Tab, TabPanel } from "react-tabs";
import styles from "./tabs.module.css";
import { Separator } from "../ui/separator";
import TabContent from "./TabContent";

const DUMMY_TAB_LIST = [
  {
    title: "ALL",
    subContent: [
      {
        img: "image-1.png",
        date: "APR 10, 2023",
        type: "Company News",
        title: "Qui quia ducimus ut voluptas maxime in libero officiis",
        desc: "Lorem ipsum dolor sit amet. Et unde odit At voluptates soluta sit impedit ullam aut cupiditat.",
      },
      {
        img: "image-1.png",
        date: "APR 10, 2023",
        type: "Trading Schedule",
        title: "Trading Hour Schedule 2023 -",
        desc: "Non exercitationem omnis et nihil quidem ut dolorem officia rem quis sunt aut voluptates vol.",
      },
      {
        img: "image-1.png",
        date: "APR 10, 2023",
        type: "Trading Schedule",
        title: "Aut dolor fugit eos similique molestias aut galisum iusto",
        desc: "Lorem ipsum dolor sit amet. Et unde odit At voluptates soluta sit impedit ullam aut cupiditat.",
      },
      {
        img: "image-1.png",
        date: "APR 10, 2023",
        type: "Trading Schedule",
        title: "Market holidays list for 2023 -",
        desc: "Lorem ipsum dolor sit amet. Et unde odit At voluptates soluta sit impedit ullam aut cupiditat.",
      },
      {
        img: "image-1.png",
        date: "APR 10, 2023",
        type: "Trading Schedule",
        title: "Aut dolor fugit eos similique molestias aut galisum iusto",
        desc: "Lorem ipsum dolor sit amet. Et unde odit At voluptates soluta sit impedit ullam aut cupiditat.",
      },
    ],
  },
  {
    title: "Company News",
    subContent: [
      {
        img: "image-1.png",
        date: "APR 10, 2023",
        type: "Company News",
        title: "Qui quia ducimus ut voluptas maxime in libero officiis",
        desc: "Lorem ipsum dolor sit amet. Et unde odit At voluptates soluta sit impedit ullam aut cupiditat.",
      },
      {
        img: "image-1.png",
        date: "APR 10, 2023",
        type: "Trading Schedule",
        title: "Trading Hour Schedule 2023 -",
        desc: "Non exercitationem omnis et nihil quidem ut dolorem officia rem quis sunt aut voluptates vol.",
      },
      {
        img: "image-1.png",
        date: "APR 10, 2023",
        type: "Trading Schedule",
        title: "Aut dolor fugit eos similique molestias aut galisum iusto",
        desc: "Lorem ipsum dolor sit amet. Et unde odit At voluptates soluta sit impedit ullam aut cupiditat.",
      },
      {
        img: "image-1.png",
        date: "APR 10, 2023",
        type: "Trading Schedule",
        title: "Market holidays list for 2023 -",
        desc: "Lorem ipsum dolor sit amet. Et unde odit At voluptates soluta sit impedit ullam aut cupiditat.",
      },
      {
        img: "image-1.png",
        date: "APR 10, 2023",
        type: "Trading Schedule",
        title: "Aut dolor fugit eos similique molestias aut galisum iusto",
        desc: "Lorem ipsum dolor sit amet. Et unde odit At voluptates soluta sit impedit ullam aut cupiditat.",
      },
    ],
  },
  {
    title: "Trading Schedule",
    subContent: [
      {
        img: "image-1.png",
        date: "APR 10, 2023",
        type: "Company News",
        title: "Qui quia ducimus ut voluptas maxime in libero officiis",
        desc: "Lorem ipsum dolor sit amet. Et unde odit At voluptates soluta sit impedit ullam aut cupiditat.",
      },
      {
        img: "image-1.png",
        date: "APR 10, 2023",
        type: "Trading Schedule",
        title: "Trading Hour Schedule 2023 -",
        desc: "Non exercitationem omnis et nihil quidem ut dolorem officia rem quis sunt aut voluptates vol.",
      },
      {
        img: "image-1.png",
        date: "APR 10, 2023",
        type: "Trading Schedule",
        title: "Aut dolor fugit eos similique molestias aut galisum iusto",
        desc: "Lorem ipsum dolor sit amet. Et unde odit At voluptates soluta sit impedit ullam aut cupiditat.",
      },
      {
        img: "image-1.png",
        date: "APR 10, 2023",
        type: "Trading Schedule",
        title: "Market holidays list for 2023 -",
        desc: "Lorem ipsum dolor sit amet. Et unde odit At voluptates soluta sit impedit ullam aut cupiditat.",
      },
      {
        img: "image-1.png",
        date: "APR 10, 2023",
        type: "Trading Schedule",
        title: "Aut dolor fugit eos similique molestias aut galisum iusto",
        desc: "Lorem ipsum dolor sit amet. Et unde odit At voluptates soluta sit impedit ullam aut cupiditat.",
      },
    ],
  },
  {
    title: "Holiday Schedule",
    subContent: [
      {
        img: "image-1.png",
        date: "APR 10, 2023",
        type: "Company News",
        title: "Qui quia ducimus ut voluptas maxime in libero officiis",
        desc: "Lorem ipsum dolor sit amet. Et unde odit At voluptates soluta sit impedit ullam aut cupiditat.",
      },
      {
        img: "image-1.png",
        date: "APR 10, 2023",
        type: "Trading Schedule",
        title: "Trading Hour Schedule 2023 -",
        desc: "Non exercitationem omnis et nihil quidem ut dolorem officia rem quis sunt aut voluptates vol.",
      },
      {
        img: "image-1.png",
        date: "APR 10, 2023",
        type: "Trading Schedule",
        title: "Aut dolor fugit eos similique molestias aut galisum iusto",
        desc: "Lorem ipsum dolor sit amet. Et unde odit At voluptates soluta sit impedit ullam aut cupiditat.",
      },
      {
        img: "image-1.png",
        date: "APR 10, 2023",
        type: "Trading Schedule",
        title: "Market holidays list for 2023 -",
        desc: "Lorem ipsum dolor sit amet. Et unde odit At voluptates soluta sit impedit ullam aut cupiditat.",
      },
      {
        img: "image-1.png",
        date: "APR 10, 2023",
        type: "Trading Schedule",
        title: "Aut dolor fugit eos similique molestias aut galisum iusto",
        desc: "Lorem ipsum dolor sit amet. Et unde odit At voluptates soluta sit impedit ullam aut cupiditat.",
      },
    ],
  },
];

function Tabs() {
  return (
    <CustomTabs disableUpDownKeys disableLeftRightKeys defaultIndex={0} className={"px-4 py-4 relative"}>
      <TabList
        className={
          "flex overflow-x-auto items-center justify-between gap-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        }
      >
        {DUMMY_TAB_LIST.map((item, index) => {
          return (
            <Tab
              selectedClassName={styles.active}
              className={"text-nowrap h-10 flex"}
              key={index.toString()}
            >
              {item.title}
            </Tab>
          );
        })}
      </TabList>
      <Separator
        orientation="horizontal"
        className="flex w-full bg-separtaror mt-1 mb-4"
      />
      {DUMMY_TAB_LIST.map((item) => {
        return (
          <TabPanel className={"grid grid-cols-1 gap-y-8"}>
            {item.subContent.map((sub) => (
              <TabContent item={sub} />
            ))}
          </TabPanel>
        );
      })}
    </CustomTabs>
  );
}

export default Tabs;
