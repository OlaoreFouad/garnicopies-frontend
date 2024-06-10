import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./EmblaCarousel/EmblaCarousel";
import Image from "next/image";

const OPTIONS: EmblaOptionsType = { loop: true };

export interface Testimonail {
  image: string;
  name: string;
  position: string;
  heading: string;
  testimonial: string;
}

const slides: Array<Testimonail> = [
  {
    image: "testimonial1",
    name: "Karim Benzema",
    position: "Google CEO",
    heading:
      "Garnicopies good care of your Business, cares about your success just as much as",
    testimonial: ` Garnicopies absolutely changed the game in our
                    copywriting!... There is strategy, ideas, and support that
                    allows us to reach our target audience on a deeper level.`,
  },
  {
    image: "testimonial1",
    name: "Karim Benzema",
    position: "Google CEO",
    heading:
      "Garnicopies good care of your Business, cares about your success just as much as",
    testimonial: ` Garnicopies absolutely changed the game in our
                    copywriting!... There is strategy, ideas, and support that
                    allows us to reach our target audience on a deeper level.`,
  },
  {
    image: "testimonial1",
    name: "Karim Benzema",
    position: "Google CEO",
    heading:
      "Garnicopies good care of your Business, cares about your success just as much as",
    testimonial: ` Garnicopies absolutely changed the game in our
                    copywriting!... There is strategy, ideas, and support that
                    allows us to reach our target audience on a deeper level.`,
  },
  {
    image: "testimonial1",
    name: "Karim Benzema",
    position: "Google CEO",
    heading:
      "Garnicopies good care of your Business, cares about your success just as much as",
    testimonial: ` Garnicopies absolutely changed the game in our
                    copywriting!... There is strategy, ideas, and support that
                    allows us to reach our target audience on a deeper level.`,
  },
];

export function Testimonials() {
  return (
    <section className="testimonial">
      <div className="star">
        <Image
          src={"/star.png"}
          alt="Company Logo"
          width={1000}
          className="star"
          height={1000}

          // objectFit="cover"
        />
      </div>

      <h2 className="testimonial__header">Testimonials</h2>
      <div className="slider ">
        <div className="bg__box brand"></div>
        <EmblaCarousel slides={slides} options={OPTIONS} />
      </div>
    </section>
  );
}
