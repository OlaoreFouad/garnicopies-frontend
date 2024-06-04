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
          //   className="scrollImg"
          width={1500}
          height={1150}
          //   objectFit="cover"
          //   fill
          //   layout="responsive"
        />
      </div>
    </footer>
  );
}

export default Footer;
