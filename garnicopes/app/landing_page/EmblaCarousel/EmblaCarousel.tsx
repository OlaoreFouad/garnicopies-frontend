"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  slides: number[];
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
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="slide__container">
                <div className="slide__heading">
                  <div className="slide__img">
                    <Image
                      src={"/testimonial1.png"}
                      alt="Image of person"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="heading__info">
                    <h3>Karim Benzema</h3>
                    <p>Google CEO</p>
                  </div>
                </div>
                <div className="slide__info">
                  <h4>
                    Garnicopies good care of your Business, cares about your
                    success just as much as
                  </h4>
                  <p>
                    Garnicopies absolutely changed the game in our
                    copywriting!... There is strategy, ideas, and support that
                    allows us to reach our target audience on a deeper level.
                  </p>
                </div>
              </div>
            </div>
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
