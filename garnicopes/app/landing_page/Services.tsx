"use client";
import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export interface Service {
  heading: string;
  details: string;
}
const services: Service[] = [
  {
    heading: "WEB COPY",
    details:
      "Get engaging copy that’s also fully optimised for search engines. With your brand personality stamped across every page.",
  },
  {
    heading: "CASE STUDY",
    details:
      "Use real-life examples to showcase your products and services. The best stories come from your customers.",
  },
  {
    heading: "PRODUCT DESCRIPTIONS",
    details:
      "A chance to sprinkle personality where your customers don’t expect it. And guide them seamlessly to the ‘buy now’ button.",
  },
  {
    heading: "EMAIL MARKETING",
    details:
      "Get engaging copy that’s also fully optimised for search engines. With your brand personality stamped across every page.",
  },
];

export function Services() {
  return (
    <section className="services" id="services">
      <p className=" section__tag">Services</p>
      <h2 className="services__heading">
        COPIES WITH A <span>F</span>
        <span>E</span>
        <span>E</span>
        <span>L</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
        <span>!</span>
      </h2>
      <p className="section__tag services__info">
        There&apos;s no second chances. Bad writing will send customers straight
        to your competitor. Never to return.{" "}
        <span>Copy that connects and converts is not just a dream.</span> We can
        make it your reality.
      </p>

      <div className="services__container">
        {services.map((element, index) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              key={index}
              className="services__service"
            >
              <div className="info">
                <h3 className="heading">{element.heading}</h3>
                <p className="info__details">{element.details}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
