import React from "react";

function Strengths() {
  return (
    //STYLING in the landing scss, this is the section that displays the other section
    <section className="strength">
      <div className="strength__descriptions">
        <p className="bold one">ORGANIC WRITING</p>
      </div>
      <div className="strength__descriptions">
        <p>WEB COPY</p>
        <p className="bold two">content</p>
        <p>messaging</p>
      </div>
      <div className="strength__descriptions">
        <p className="bold three">Marketing</p>
        <p>storytelling</p>
        <p>seo</p>
      </div>
      <div className="strength__descriptions">
        <p>audience</p>
        <p className="bold four">advertising</p>
        <p>tone</p>
      </div>
      <div className="strength__descriptions">
        <p>headlines</p>
        <p className="bold five">conversion</p>
      </div>
    </section>
  );
}

export default Strengths;
