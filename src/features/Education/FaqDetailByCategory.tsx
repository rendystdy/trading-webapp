import Banner from "@/components/Banner";
import { Input } from "@/components/ui/input";
import React from "react";
import { useParams } from "react-router-dom";
import { ChevronUp, Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqJson from "@/json/faq-json.json";
import * as Models from "@/interfaces/faq-response";

function filterFaqByCategory(
  faqList: Models.FaqResponse.FaqListEntity[],
  categoryId: string
) {
  return faqList.filter((faq) =>
    faq.faqCategories?.some((category) => category.categoryId === categoryId)
  );
}

function FaqDetailByCategory() {
  const { faqId } = useParams();
  const faqByCategory = filterFaqByCategory(faqJson.data.faqList, faqId || "");
  return (
    <div>
      <Banner
        title="Frequently Asked Questions"
        description="Search and browse our most frequently asked questions or contact our 24/5 support team."
      />
      <div className="px-6 py-7">
        <h1 className="font-poppins text-center font-semibold text-2xl text-veryDarkBlue">
          Find Answers
        </h1>
        <div className="bg-white rounded-2xl px-2 shadow-md py-7 mb-10">
          <div className="flex items-center px-5 py-5 bg-lightGrayishBlue rounded-3xl focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 h-10 w-full border border-input bg-background ring-offset-background disabled:cursor-not-allowed disabled:opacity-50">
            <Search />
            <Input
              className="bg-transparent border-0 focus:outline-none focus:ring-0 focus-visible:outline-0 focus-visible:ring-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              type="text"
              placeholder="Search Entry"
            />
          </div>
        </div>
        <h1 className="font-poppins font-semibold text-xl text-darkBlueTertiary mb-2">
          Getting Started
        </h1>
        <p className="font-poppins font-normal text-sm text-veryDarkGrey mb-6">
          Understand the basics of the platform before delving into its deeper
          mechanics.
        </p>
        <Accordion type="single" collapsible className="flex flex-col w-full gap-y-4">
          {faqByCategory.map((faq) => (
            <AccordionItem
              value={faq.faqId}
              className="bg-darkBlueTertiary rounded-2xl p-4"
            >
              <AccordionTrigger className="text-white hover:text-white">
                {faq.titleEnglish}
                <ChevronUp className="h-6 w-6 rotate-180 shrink-0 transition-transform duration-200 [&[data-state=open]>svg]:rotate-180" />
              </AccordionTrigger>
              <AccordionContent className="text-white">
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
