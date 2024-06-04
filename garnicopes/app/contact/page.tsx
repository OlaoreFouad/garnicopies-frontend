import React from "react";
import { useRef } from "react";
function page() {
  return (
    <section className="contact">
      <form action="#" className="brand">
        <h2>Do you have</h2>
        <h2 className="green">a question?</h2>
        <p>Fill up the form and our team will get back within 24 hours</p>

        <div className="inputBox">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className="inputBox">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>
        <div className="inputBox">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
      </form>
    </section>
  );
}

export default page;
