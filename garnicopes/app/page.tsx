import Image from "next/image";
import * as Landing from "./landing_page";
import Contact from "./contact/Contact";

export default function Home() {
  return (
    <div className=" header">
      <Landing.Header />
      <Landing.Services />
      <Landing.Adventure />
      <Landing.Portfolio />
      <Landing.Testimonials />
      <p
        className=" section__tag"
        style={{ textAlign: "start", margin: "10vh auto" }}
      >
        Contact Us
      </p>

      <Contact />
    </div>
  );
}
