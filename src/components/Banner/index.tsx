import Button from "@/components/Button";

function Banner() {
  return (
    <section className="flex max-h-[578] h-[578px] flex-col bg-banner-mobile-pattern bg-cover bg-center bg-no-repeat w-full justify-center md:bg-banner-pattern">
      <div className="px-11">
        <h1 className="text-center text-4xl font-poppins font-medium text-veryDarkBlue mb-6">Announcement</h1>
        <p className="text-center font-kumbh font-medium text-base text-veryDarkGrey mb-11">
          Get the latest Company News here are important between you and me.
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
