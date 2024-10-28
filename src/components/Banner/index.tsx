import Button from "@/components/Button";
import React from "react";

interface IBannerProps {
  title: string;
  description: string;
  onHandleDemoAccount?: () => void;
  onHandleLiveAccount?: () => void;
}

const Banner: React.FC<IBannerProps> = ({ title, description, onHandleDemoAccount, onHandleLiveAccount }) => {
  return (
    <section className="flex px-11 pb-16 pt-52 md:pb-24 md:pt-48 flex-col bg-banner-mobile-pattern bg-cover bg-center bg-no-repeat w-full justify-center md:bg-banner-pattern dark:bg-banner-pattern-dark">
      <div className="px-5 sm:px-11">
        <h1 className="text-center text-4xl md:text-4xl font-kumbh font-medium text-veryDarkBlue mb-6 dark:text-white">{title}</h1>
        <p className="text-center font-kumbh font-medium sm:text-base text-veryDarkGrey dark:text-lightCyan mb-11">
          {description}
        </p>
        <div className="flex flex-col gap-6 items-center md:justify-center md:flex-row">
          <Button onClick={onHandleDemoAccount} title="Open Demo Account" className="w-fit py-3 px-5 text-white md:mb-0" />
          <Button onClick={onHandleLiveAccount} title="Open Live Account" className="w-fit bg-transparent py-3 px-5 border-hover border-2 dark:border-white dark:text-white" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
