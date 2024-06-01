import React from "react";
// import adventure from '../'
import Image from "next/image";

export function Adventure() {
  return (
    <div className="adventure">
      <p className=" section__tag">The Copywriting Adventure</p>
      <div className="adv-container adv">
        <div className="adv__info">
          <h2>Turning Clicks into Cheers</h2>
          <h4>The Quest for Engagement</h4>
          <p>
            Once upon a digital landscape, a thriving online business found
            itself{" "}
            <span>
              trapped in the perplexing forest of low conversions, a sky-high
              bounce rate, and dwindling brand engagement.
            </span>{" "}
            The enchanting journey that once beckoned users to explore and
            linger had turned into a maze of missed opportunities.
          </p>
        </div>
        <div className="adv__image">
          <Image
            src="/adv1.png"
            alt="Vercel Logo"
            // className="adv__image"
            width={150}
            height={34}
            priority
          />
        </div>
        
      </div>
    </div>
  );
}
