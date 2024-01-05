"use client";

import {
  CAROUSEL_INFO,
  PEOPLE_TESTIMONIAL_OBJECTS,
  PEOPLE_URL,
} from "@/constants";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import CampSite from "./campSite";
import RevealAnimation from "./RevealAnimation";
import {motion} from "framer-motion"




const Camp = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: false,
    breakpoints: {
      "(min-width: 768px)": { align: "center" },
    },
  });

  const onSelect = useCallback((emblaApi, eventName) => {
    console.log(`Embla just triggered ${eventName}!`);
    console.log(emblaApi.selectedScrollSnap());
    setSelectedSlide(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (emblaApi) emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);
  return (
    <section className=" 2xl:max-w-[95%] 2xl:mx-auto relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full overflow-x-auto lg:h-[400px] xl:h-[540px]">
        <div className="embla w-full h-full">
          <div className="embla__viewport h-full" ref={emblaRef}>
            <div className="embla__container h-full gap-8">
              {CAROUSEL_INFO.map((dataObj, index) => (
                <CampSite
                  key={index}
                  backgroundImage={dataObj.backgroundImage}
                  title={dataObj.title}
                  subtitle={dataObj.subtitle}
                  peopleJoined={dataObj.peopleJoined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-40 lg:mr-12">
       <RevealAnimation>
       <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[600px] xl:rounded-5xl xl:px-12 xl:py-12 relative w-full overflow-hidden rounded-3xl ">
          <Image
            src={PEOPLE_TESTIMONIAL_OBJECTS[selectedSlide]["image"]}
            alt="person"
            width={52}
            height={52}
            className="inline-block h-10 w-10 rounded-full object-cover object-center"
            
          />
          <p className="regular-14 xl:regular-18 mt-5 text-white">
            {PEOPLE_TESTIMONIAL_OBJECTS[selectedSlide]["testimonial"]}
          </p>

          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
       </RevealAnimation>
      </div>
    </section>
  );
};

export default Camp;
