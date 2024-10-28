import Banner from "@/components/Banner";
import { Input } from "@/components/ui/input";
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronUp, Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import * as Models from "@/interfaces/faq-response";
import { useAppSelector } from "@/app/hooks";
import { debounce } from "lodash";

const filterFaqByCategory = (
  faqList: Models.FaqResponse.FaqListEntity[],
  categoryId: string
) => {
  return faqList.filter((faq) =>
    faq.faqCategories?.some((category) => category.categoryId === categoryId)
  );
}

const filterByQuery = (data: Models.FaqResponse.FaqListEntity[], valueQuery: string) => {
  return data.filter(item => item.titleEnglish.toLowerCase().includes(valueQuery.toLowerCase()))
}

function FaqDetailByCategory() {
  const { faqId } = useParams();
  const faq = useAppSelector(state => state.education.faq)
  const faqByCategory = filterFaqByCategory(faq.data?.faqList || [], faqId || "");
  const [data, setData] = useState(faqByCategory);
  const [query, setQuery] = useState('');


  const handleSearch = useCallback(
    debounce((valueQuery) => {
      if (valueQuery.trim().length === 0) {
        return setData(faqByCategory);
      } else {
        // Add your API call or search logic here
        const queryResult = filterByQuery(faqByCategory, valueQuery);
        return setData(queryResult || [])
      }

    }, 1000), // Adjust the delay as needed
    []
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
    handleSearch(value);
  };

  return (
    <div className="dark:bg-veryDarkBlueTertiary">
      <Banner
        title="Frequently Asked Questions"
        description="Search and browse our most frequently asked questions or contact our 24/5 support team."
      />
      <div className="px-6 py-7">
        <h1 className="font-poppins text-center font-semibold text-xl text-veryDarkBlue dark:text-white mb-2">
          Find Answers
        </h1>
        <div className="bg-white rounded-2xl px-5 py-3 md:px-7 md:py-5 dark:bg-darkBlueSecondary shadow-md  mb-10">
          <div className="flex items-center px-5 py-5 bg-lightGrayishBlue rounded-3xl focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 h-10 w-full border-0- border-input bg-background ring-offset-background disabled:cursor-not-allowed disabled:opacity-50">
            <Search className="dark:text-veryDarkGrey" />
            <Input
              className="bg-transparent text-center border-0 focus:outline-none focus:ring-0 focus-visible:outline-0 focus-visible:ring-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              type="text"
              placeholder="Search Entry"
              value={query}
              onChange={handleChange}
            />
          </div>
        </div>
        <h1 className="font-poppins font-semibold text-lg text-darkBlueTertiary mb-2 dark:text-white">
          Getting Started
        </h1>
        <p className="font-poppins font-normal text-sm text-veryDarkGrey mb-6 dark:text-grayishCyan">
          Understand the basics of the platform before delving into its deeper
          mechanics.
        </p>
        <Accordion type="single" collapsible className="flex flex-col w-full gap-y-4">
          {data.map((faq) => (
            <AccordionItem
              value={faq.faqId}
              className="bg-darkBlueTertiary rounded-2xl p-4"
            >
              <AccordionTrigger className="text-white text-left text-sm md:text-lg font-poppins font-bold hover:text-white">
                {faq.titleEnglish}
                <ChevronUp className="h-6 w-6 rotate-180 shrink-0 transition-transform duration-200 [&[data-state=open]>svg]:rotate-180" />
              </AccordionTrigger>
              <AccordionContent className="text-white font-poppins font-light md:text-sm">
                {faq.descriptionEnglish}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FaqDetailByCategory;
