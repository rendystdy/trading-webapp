import { cn } from "@/lib/utils";
import React from "react";
import { Separator } from "../ui/separator";

const DUMMY_LIST_FOOTER = [
  "About",
  "Download Platform",
  "Product",
  "Referral Program",
  "Trading Tools",
  "Blog",
];

const DUMMY_LIST_SUPPORTS = [
  "FAQ",
  "Contact Us",
  "Live Chat Support",
  "Whistle Blowing",
  "Bug Bounty",
];

function Footer() {
  const themeStorage = localStorage.getItem('theme');
  return (
    <footer className="py-8 px-4 md:px-8 md:py-10 bg-bgFooter dark:bg-veryDarkGreyMostlyBlack relative">
      <Separator
        orientation="horizontal"
        className="hidden md:block absolute top-20 md:top-28 left-0 w-full z-10 bg-separtaror"
      />
      <div className="flex flex-col mb-6 md:items-start md:flex-row md:justify-between gap-4 md:gap-x-8 gap-y-11">
        <div className="flex flex-col md:w-1/3">
          {themeStorage === 'true' ? <img
            src="/assets/images/Logo-white.png"
            alt="logo"
            className="mr-auto ml-auto mb-5 md:mr-0 md:ml-0 md:mb-16"
          /> : <img
            src="/assets/images/Logo.png"
            alt="logo"
            className="mr-auto ml-auto mb-5 md:mr-0 md:ml-0 md:mb-16"
          />}
          <ul className="flex flex-row gap-y-3 items-center md:pr-0 md:gap-2 flex-wrap justify-between md:justify-between md:flex-col">
            {DUMMY_LIST_FOOTER.map((item, index) => {
              return (
                <li
                  className={cn(
                    "w-1/2 text-nowrap font-poppins font-medium text-sm md:text-sm text-darkGrey dark:text-lightGray md:w-full"
                  )}
                  key={index}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full">
          <h1 className="font-poppins font-medium mb-4 text-2xl md:pt-3 text-veryDarkGrey dark:text-white md:mb-16">
            LEGALITIES
          </h1>
          <p className="font-poppins font-medium text-sm md:text-sm text-darkGrey dark:text-lightGray py-3">
            Our Company is a leading online trading platform that empowers
            individuals to invest in global financial markets easily and
            securely.
          </p>
          <p className="font-poppins font-medium text-sm md:text-sm text-darkGrey dark:text-lightGray py-3">
            Our user-friendly interface, advanced trading tools, and commitment
            to customer satisfaction make us the preferred choice for both
            novice and experienced traders.
          </p>
        </div>
        <div className="w-fit md:w-1/3">
          <h1 className="font-poppins font-medium mb-4 text-2xl md:pt-3 text-veryDarkGrey dark:text-white md:mb-16">
            SUPPORT
          </h1>
          <ul className="flex flex-col gap-y-2">
            {DUMMY_LIST_SUPPORTS.map((item, index) => (
              <li key={index} className="font-poppins font-medium text-sm text-nowrap md:text-sm text-darkGrey mb-2 dark:text-lightGray">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4 gap-y-6 md:flex-row md:justify-between md:items-center">
        <div className="flex items-center gap-x-4 md:gap-x-2">
          <img className="md:w-1/6" src="/assets/images/fb.png" alt="fb" />
          <img className="md:w-1/6" src="/assets/images/twitter.png" alt="twitter" />
          <img className="md:w-1/6" src="/assets/images/ig.png" alt="instagram" />
          <img className="md:w-1/6" src="/assets/images/tiktok.png" alt="tiktok" />
        </div>
        <div className="flex items-center gap-x-4 md:gap-x-2 justify-end">
          <img className="w-1/2 md:w-1/4" src="/assets/images/download-android.png" alt="android" />
          <img className="w-1/2 md:w-1/4" src="/assets/images/download-ios.png" alt="ios" />
        </div>
      </div>
      <Separator className="bg-separtaror mt-8 mb-5" />
      <div className="flex flex-col md:flex-row-reverse md:justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex items-center gap-x-6">
            <span className="font-poppins font-medium text-sm md:text-sm text-center dark:text-lightGray text-darkGrey">
              Terms of Service
            </span>
            <span className="font-poppins font-medium text-sm md:text-sm text-center dark:text-lightGray text-darkGrey">
              Privacy Policy
            </span>
          </div>
          <span className="font-poppins font-medium text-sm md:text-sm text-center dark:text-lightGray text-darkGrey">
            Risk Disclosures
          </span>
        </div>
        <span className="font-poppins font-medium text-sm md:text-sm text-center dark:text-lightGray text-darkGrey">
          Copyright © Company Name
        </span>
      </div>
    </footer>
  );
}

export default Footer;
