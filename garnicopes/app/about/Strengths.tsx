import React from "react";

function Strengths() {
  return (
    //STYLING in the landing scss, this is the section that displays the other section
    <section className="strength">
      Strengths
      <div className="strength__descriptions">
        <p className="bold">ORGANIC WRITING</p>
      </div>
      <div className="strength__descriptions">
        <p>WEB COPY</p>
        <p className="bold">content</p>
        <p>messaging</p>
      </div>
      <div className="strength__descriptions">
        <p className="bold">Marketing</p>
        <p>storytelling</p>
        <p>seo</p>
      </div>
      <div className="strength__descriptions">
        <p>audience</p>
        <p className="bold">advertising</p>
        <p>tone</p>
      </div>
      <div className="strength__descriptions">
        <p>headlines</p>
        <p className="bold">conversion</p>
      </div>
    </section>
  );
}

export default Strengths;
