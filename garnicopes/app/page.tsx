import Image from "next/image";
import * as Landing from "./landing_page";

export default function Home() {
  return (
    <div className="container header">
      <Landing.Header />
      <Landing.Services />
    </div>
  );
}
