import React from "react";
import { useState, useEffect } from "react";

const words = [
  "ORGANIC WRITING",
  "CONTENT",
  "MARKETING",
  "ADVERTISING",
  "CONVERSION",
];

function Strengths() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    //STYLING in the landing scss, this is the section that displays the other section
    <section className="strength">
      <div className="strength__descriptions">
        <p
          //  className="bold one"
          className={`${
            words[index].toLowerCase() === "organic writing"
              ? "bold word__anim"
              : "bold"
          }`}
        >
          ORGANIC WRITING
        </p>
      </div>
      <div className="strength__descriptions">
        <p>WEB COPY</p>
        <p
          className={`${
            words[index].toLowerCase() === "content"
              ? "bold word__anim"
              : "bold"
          }`}
        >
          content
        </p>
        <p>messaging</p>
      </div>
      <div className="strength__descriptions">
        <p
          className={`${
            words[index].toLowerCase() === "marketing"
              ? "bold word__anim"
              : "bold"
          }`}
        >
          Marketing
        </p>
        <p>storytelling</p>
        <p>seo</p>
      </div>
      <div className="strength__descriptions">
        <p>audience</p>
        <p
          className={`${
            words[index].toLowerCase() === "advertising"
              ? "bold word__anim"
              : "bold"
          }`}
        >
          advertising
        </p>
        <p>tone</p>
      </div>
      <div className="strength__descriptions">
        <p>headlines</p>
        <p
          className={`${
            words[index].toLowerCase() === "conversion"
              ? "bold word__anim"
              : "bold"
          }`}
        >
          conversion
        </p>
      </div>
    </section>
  );
}

export default Strengths;
