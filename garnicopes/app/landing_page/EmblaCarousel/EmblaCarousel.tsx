"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { AnimatePresence, motion } from "framer-motion";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { Testimonail } from "../Testimonials";

type PropType = {
  slides: Testimonail[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla ">
      <div className="embla__viewport brand" ref={emblaRef}>
        <div className="embla__container ">
          {slides.map((element, index) => (
            <motion.div
              initial={{ scale: .5,opacity: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  ease: "easeOut",
                  duration: .5,
                },
              }}
              className="embla__slide"
              key={index}
            >
              <div className="slide__container">
                <div className="slide__heading">
                  <div className="slide__img">
                    <Image
                      src={"/" + element.image + ".png"}
                      alt="Image of person"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="heading__info">
                    <h3>{element.name}</h3>
                    <p>{element.position}</p>
                  </div>
                </div>
                <div className="slide__info">
                  <h4>{element.heading}</h4>
                  <p>{element.testimonial}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>

      <div className="embla__controls__dots">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
