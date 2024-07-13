import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Link {
  pathname: string;
  label: string;
}

const paths: Array<Link> = [
  {
    pathname: "/",
    label: "Home",
  },
  {
    pathname: "/about",
    label: "about",
  },
  {
    pathname: "/work",
    label: "work",
  },
  {
    pathname: "/contact",
    label: "contact",
  },
];

function Footer() {
  return (
    <footer>
      <Image
        src="/header__bg.png"
        alt="Vercel Logo"
        className="bgImg"
        width={500}
        height={500}
        priority
      />
      <ul>
        {paths.map((element, index) => {
          return (
            <li key={index}>
              <Link href={element.pathname}>{element.label}</Link>
            </li>
          );
        })}
      </ul>
      <div className="footer__img">
        <Image src={"/logo.png"} alt="Vercel Logo" width={500} height={500} />

        <h2 className="footer__heading">
          COPIES WITH A <span>F</span>
          <span>E</span>
          <span>E</span>
          <span>L</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
          <span>!</span>
        </h2>
      </div>
    </footer>
  );
}

export default Footer;
