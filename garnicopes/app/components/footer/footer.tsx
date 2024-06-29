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
        width={1000}
        height={1000}
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
        <Image
          src={"/footer.png"}
          alt="Vercel Logo"
          width={1500}
          height={1150}
        />
      </div>
    </footer>
  );
}

export default Footer;
