import Button from "@/components/Button";
import React from "react";

interface IBannerProps {
  title: string;
  description: string;
}

const Banner: React.FC<IBannerProps> = ({ title, description }) => {
  return (
    <section className="flex max-h-[578px] h-[578px] flex-col bg-banner-mobile-pattern bg-cover bg-center bg-no-repeat w-full justify-center md:bg-banner-pattern">
      <div className="px-5 sm:px-11">
        <h1 className="text-center text-3xl md:text-4xl font-poppins font-medium text-veryDarkBlue mb-6">{title}</h1>
        <p className="text-center font-kumbh font-medium sm:text-base text-veryDarkGrey mb-11">
          {description}
        </p>
        <div className="flex flex-col gap-6 items-center md:justify-center md:flex-row">
          <Button title="Open Demo Account" className="w-fit py-3 px-5 text-white md:mb-0" />
          <Button title="Open Live Account" className="w-fit bg-transparent py-3 px-5 border-hover border-2" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
