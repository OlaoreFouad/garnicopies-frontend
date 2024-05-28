"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const paths = [
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

/**This section is for when the web application is on desktop View */
const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <div className="container nav">
      <Link href={"/"}>
        <Image
          src="/logo.png"
          alt="Vercel Logo"
          // className="dark:invert"
          width={150}
          height={34}
          priority
        />
      </Link>
      <div className="nav__container">
        {paths.map((path) => (
          <Link
            key={path.pathname}
            href={path.pathname}
            className={
              pathname === path.pathname
                ? "nav__nav_link active"
                : "nav__nav_link"
            }
          >
            {path.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

/**This section is for when the web application is on mobile View */

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div className="container mobile">
      <Link href={"/"}>
        <Image
          src="/logo.png"
          alt="Vercel Logo"
          // className="dark:invert"
          width={150}
          height={34}
          priority
        />
      </Link>

      <div className="action" onClick={handleClick}>
        <Image
          src="/hamburger.png"
          alt="Vercel Logo"
          // className="dark:invert"
          width={34}
          height={34}
          priority
        />
      </div>

      {isOpen ? <SideNav /> : ""}
    </div>
  );
};

const SideNav = () => {
  const pathname = usePathname();

  return (
    <div className="sidenav">
      <div className="sidenav__links">
        {paths.map((path) => (
          <Link
            key={path.pathname}
            href={path.pathname}
            className={
              pathname === path.pathname
                ? "nav__nav_link active"
                : "nav__nav_link"
            }
          >
            {path.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

function Nav() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initialize the state based on the current window width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="nav_body">{isMobile ? <MobileNav /> : <DesktopNav />}</div>
    // <div></div>
  );
}

export default Nav;
