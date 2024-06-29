"use client";
import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export interface AdventureModel {
  heading?: string;
  subHeading?: string;
  reverse?: boolean;
  img: string;
  info: any;
}
const data: Array<AdventureModel> = [
  {
    heading: "Turning Clicks into Cheers",
    // subHeading: "The Quest for Engagement",
    img: "smile",
    info: (
      <p>
        {" "}
        Once upon a digital landscape, a thriving online business found itself{" "}
        <span>
          trapped in the perplexing forest of low conversions, a sky-high bounce
          rate, and dwindling brand engagement.
        </span>
        The enchanting journey that once beckoned users to explore and linger
        had turned into a maze of missed opportunities.{" "}
      </p>
    ),
  },
  {
    subHeading: "The Quest for Engagement",
    img: "adv2",
    reverse: true,
    info: (
      <p>
        Our amazing copywriting team went on a mission to get to know our
        audience better
        <span>
          —what they love, what makes them tick, and what our brand is all
          about.
        </span>{" "}
        It was like a journey of friendship and discovery!
      </p>
    ),
  },
  {
    img: "adv3",
    subHeading: "A Kingdom of Results",
    info: (
      <p>
        With strategic storytelling and the alchemy of persuasive language, the
        business not only reversed its fortunes but{" "}
        <span>
          flourished in a kingdom of results. Conversions soared, the bounce
          rate became a distant memory, and the brand thrived in the spotlight
          of success.
        </span>
      </p>
    ),
  },
];

export function Adventure() {
  return (
    <section className="adventure">
      <p className=" section__tag">The Copywriting Adventure</p>
      {data.map((element, index) => {
        return (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            key={index}
            className={
              element.reverse
                ? "adv-container adv reverse"
                : "adv-container adv"
            }
            style={{}}
          >
            <div className="adv__info">
              <h2>{element.heading}</h2>

              <h4>{element.subHeading}</h4>
              {element.info}
            </div>

            <div className="adv__image">
              <h2 className="hide">{element.heading}</h2>
              <Image
                src={"/" + element.img + ".png"}
                alt="Vercel Logo"
                width={1000}
                height={34}
                priority
              />
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
