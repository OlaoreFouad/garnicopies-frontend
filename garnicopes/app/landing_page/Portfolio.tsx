import React from "react";

interface Clients {
  tag: string;
  brand: string;
  industry: string;
  info: string;
}

export function Portfolio() {
  return (
    <section className="portfolio">
      <p className=" section__tag">Portfolio</p>
      <h2>
        Copies that brings <span>Crazy</span> Results
      </h2>
      <div className="brand__container">
        <div className="brand">
          <div className="info">
            <h3 className="heading">fasdfdsafdsfasf</h3>
            <p className="info__details">dfsafdsfsf</p>
          </div>
        </div>
      </div>
    </section>
  );
}
