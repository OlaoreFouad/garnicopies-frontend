import React from "react";
import Link from "next/link";
// import bgImage from "/static/prot_img.png";
import Image from "next/image";
interface Clients {
  tag: string;
  brand: string;
  industry: string;
  info: any;
  img: string;
}

const data: Array<Clients> = [
  {
    tag: "Client",
    brand: "APPLE INC.",
    industry: "Electronics & Gadgets Manufacturers",
    info: (
      <p className="info__details">
        With strategic storytelling and the alchemy of persuasive language, the
        business not only reversed its fortunes but flourished in a kingdom of
        results.
        <span>
          {" "}
          Conversions soared, the bounce rate became a distant memory, and the
          brand thrived in the spotlight of success.{" "}
        </span>
      </p>
    ),
    img: "port",
  },
  {
    tag: "Client",
    brand: "NETFLIX",
    industry: "Movie Production & Services",
    info: (
      <p className="info__details">
        With strategic storytelling and the alchemy of persuasive language, the
        business not only reversed its fortunes but flourished in a kingdom of
        results.{" "}
        <span>
          Conversions soared, the bounce rate became a distant memory, and the
          brand thrived in the spotlight of success.
        </span>
      </p>
    ),
    img: "prot_img",
  },
  {
    tag: "Client",
    brand: "FACEBOOK",
    industry: "Chatting App",
    info: (
      <p className="info__details">
        With strategic storytelling and the alchemy of persuasive language, the
        business not only reversed its fortunes but flourished in a kingdom of
        results.{" "}
        <span>
          Conversions soared, the bounce rate became a distant memory, and the
          brand thrived in the spotlight of success.
        </span>
      </p>
    ),
    img: "port1",
  },
];
export function Portfolio() {
  return (
    <section className="portfolio">
      <p className=" section__tag">Portfolio</p>
      <h2>
        Copies that brings <span>Crazy</span> Results
      </h2>
      <div className="brand__container">
        {data.map((element, index) => {
          return (
            <div key={index} className="brand">
              <div className="image">
                <Image
                  src={"/" + element.img + ".png"}
                  alt="Company Logo"
                  width={1000}
                  height={1000}
                  // objectFit="cover"
                />
              </div>
              <div className="info">
                <p className="tag">{element.tag}</p>
                <h3 className="brand__name">{element.brand}</h3>
                <p className="industry">{element.industry}</p>
                {element.info}
                <div className="button__container">
                  <Link href={"/"} className="button">
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
