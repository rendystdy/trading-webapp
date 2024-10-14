import Banner from "@/components/Banner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import faq from "@/json/faq-json.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Faq() {
  const faqResponse = faq;
  const navigate = useNavigate();
  const handleToDetailFaq = (catId: string) => {
    navigate(`/education/faq/${catId}`)
  }
  return (
    <div>
      <Banner
        title="Frequently Asked Questions"
        description="Search and browse our most frequently asked questions or contact our 24/5 support team."
      />
      <div className="pb-14">
        <h1 className="font-poppins text-center font-semibold text-2xl text-veryDarkBlue my-7">
          Find Answers
        </h1>
        <div className="grid grid-cols-1 gap-y-4 px-4 md:gap-6 md:px-16 md:grid-cols-2 md:items-center">
          {faqResponse.data.categoryList.map((item) => {
            // const iconName = item.faqCategories[0].icon.substring(7);
            return (
              <Card onClick={() => handleToDetailFaq(item.categoryId)} className="bg-veryLightGrayWhite border-0 shadow-transparent rounded-2xl p-5">
                <CardHeader className="p-0">
                  <CardDescription className="font-poppins text-sm text-darkBlueSecondary font-bold">
                    <FontAwesomeIcon
                      className="text-darkBlueSecondary"
                      size="2xl"
                      icon={['fab', 'trade-federation']}
                    />
                  </CardDescription>
                  <CardTitle className="font-poppins font-semibold text-xl text-darkBlueSecondary line-clamp-1 md:text-2xl">
                    {item.categoryName}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="font-poppins font-normal text-sm md:text-lg text-veryDarkGrey line-clamp-4">
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
