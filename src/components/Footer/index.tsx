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
  return (
    <footer className="p-4 bg-bgFooter relative">
      <Separator
        orientation="horizontal"
        className="hidden md:block absolute top-20 left-0 w-full z-10 bg-separtaror"
      />
      <div className="flex flex-col mb-6 md:items-start md:flex-row md:justify-between gap-4">
        <div className="flex flex-col">
          <img
            src="Logo.png"
            alt="logo"
            className="mr-auto ml-auto mb-5 md:mr-0 md:ml-0 md:mb-16"
          />
          <ul className="flex flex-row gap-4 items-center md:gap-2 flex-wrap justify-between md:justify-between md:flex-col">
            {DUMMY_LIST_FOOTER.map((item, index) => {
              return (
                <li
                  className={cn(
                    "w-1/3 text-nowrap font-poppins font-medium text-base text-darkGrey md:w-full"
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
          <h1 className="font-poppins font-medium mb-5 text-3xl text-veryDarkGrey md:mb-16">
            LEGALITIES
          </h1>
          <p className="font-poppins font-medium text-base text-darkGrey">
            Our Company is a leading online trading platform that empowers
            individuals to invest in global financial markets easily and
            securely. <br />
            Our user-friendly interface, advanced trading tools, and commitment
            to customer satisfaction make us the preferred choice for both
            novice and experienced traders.
          </p>
        </div>
        <div className="w-fit">
          <h1 className="font-poppins font-medium mb-5 text-3xl text-veryDarkGrey md:mb-16">
            SUPPORT
          </h1>
          <ul>
            {DUMMY_LIST_SUPPORTS.map((item, index) => (
              <li key={index} className="font-poppins text-base text-darkGrey mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <div className="flex items-center gap-x-2">
          <img src="fb.png" alt="fb" />
          <img src="twitter.png" alt="twitter" />
          <img src="ig.png" alt="instagram" />
          <img src="tiktok.png" alt="tiktok" />
        </div>
        <div className="flex items-center gap-x-2 justify-between">
          <img src="download-android.png" alt="android" />
          <img src="download-ios.png" alt="ios" />
        </div>
      </div>
      <Separator className="bg-separtaror my-6" />
      <div className="flex flex-col md:flex-row-reverse md:justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex items-center gap-x-6">
            <span className="font-poppins font-medium text-base text-center text-darkGrey">
              Terms of Service
            </span>
            <span className="font-poppins font-medium text-base text-center text-darkGrey">
              Privacy Policy
            </span>
          </div>
          <span className="font-poppins font-medium text-base text-center text-darkGrey">
            Risk Disclosures
          </span>
        </div>
        <span className="font-poppins font-medium text-base text-center text-darkGrey">
          Copyright © Company Name
        </span>
      </div>
    </footer>
  );
}

export default Footer;
