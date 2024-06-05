import Image from "next/image";
import * as Landing from "./landing_page";
import Contact from "./contact/Contact";

export default function Home() {
  return (
    <div className="container header">
      <Landing.Header />
      <Landing.Services />
      <Landing.Adventure />
      <Landing.Portfolio />
      <Contact />
    </div>
  );
}
