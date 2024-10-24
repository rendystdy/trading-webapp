import Banner from "@/components/Banner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useFetch } from "@/app/hooks";
import { fetchFaqAsync } from "./educationSlice";
import { cn } from "@/lib/utils";

function Faq() {
  useFetch(fetchFaqAsync);
  const faq = useAppSelector(state => state.education.faq);
  const statusFaq = useAppSelector(state => state.education.statusFaq);
  const faqResponse = faq;
  const navigate = useNavigate();
  const handleToDetailFaq = (catId: string) => {
    navigate(`/education/faq/${catId}`)
  }

  return (
    <div className="dark:bg-veryDarkBlueTertiary">
      <Banner
        title="Frequently Asked Questions"
        description="Search and browse our most frequently asked questions or contact our 24/5 support team."
      />
      <div className="pb-14">
        <h1 className="font-poppins text-center font-semibold text-2xl text-veryDarkBlue my-7 dark:text-white">
          Find Answers
        </h1>
        <div className={cn("grid grid-cols-1 gap-y-4 px-4 md:gap-6 md:px-16 md:grid-cols-2 md:items-center", statusFaq === 'loading' ? "animate-pulse" : "animate-none")}>
          {statusFaq === "loading" ? [1,2,3,4,5,6].map((_, index) => {
            return (
              <Card key={index} className="bg-veryLightGrayWhite border-0 shadow-transparent rounded-2xl p-5">
                <CardHeader className="p-0">
                  <CardDescription className="font-poppins text-sm text-darkBlueSecondary font-bold">
                    <div className="h-8 w-8 rounded-full bg-gray" />
                  </CardDescription>
                  <CardTitle className="font-poppins font-semibold text-xl text-darkBlueSecondary line-clamp-1 md:text-2xl">
                    <div className="w-1/2 h-8 mb-3 rounded-sm bg-gray" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="w-full h-8 bg-gray rounded-sm" />
                </CardContent>
              </Card>
            )
          }) : faqResponse.data?.categoryList?.map((item) => {
            return (
              <Card key={item.categoryId} onClick={() => handleToDetailFaq(item.categoryId)} className="bg-veryLightGrayWhite md:min-h-52 border-0 shadow-transparent rounded-2xl p-5 dark:bg-veryDarkBlue">
                <CardHeader className="p-0">
                  <CardDescription className="font-poppins text-sm text-darkBlueSecondary font-bold">
                    <FontAwesomeIcon
                      className="text-darkBlueSecondary dark:text-white"
                      size="2xl"
                      icon={['fab', 'trade-federation']}
                    />
                  </CardDescription>
                  <CardTitle className="font-poppins font-semibold text-xl text-darkBlueSecondary line-clamp-1 md:text-2xl dark:text-white">
                    {item.categoryName}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="font-poppins font-normal text-sm md:text-lg text-veryDarkGrey line-clamp-4 dark:text-white">
                    {item.descriptionEnglish}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Faq;
