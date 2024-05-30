"use client";

import React, { Dispatch, SetStateAction } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
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

interface NavProp {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

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
          style={{ zIndex: 33 }}
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

      <AnimatePresence>
        {isOpen && <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </div>
  );
};

const SideNav: React.FC<NavProp> = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const linkVariants = {
    hidden: (index: number) => ({
      x: 100,
      y: 20 * index,
      opacity: 0,
    }),
    visible: (index: number) => ({
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 30,
        delay: index * 0.1,
      },
    }),
    exit: (index: number) => ({
      x: 100,
      y: 20 * index,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 30,
        delay: index * 0.1,
      },
    }),
  };

  return (
    <motion.div
      className="sidenav"
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "-100%" }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
    >
      <div className="sidenav__links">
        <div className="top_section">
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="Vercel Logo"
              style={{ zIndex: 33 }}
              // className="dark:invert"
              width={150}
              height={34}
              priority
            />
          </Link>

          <div className="action" onClick={handleClick}>
            <Image
              src="/close.png"
              alt="close button"
              width={34}
              height={34}
              priority
            />
          </div>
        </div>

        {paths.map((path, index) => (
          <motion.div
            key={path.pathname}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={linkVariants}
          >
            <Link
              href={path.pathname}
              className={
                pathname === path.pathname
                  ? "nav__nav_link active"
                  : "nav__nav_link"
              }
            >
              {path.label}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Nav = () => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile === null) {
    return null; // or a loading spinner, if you prefer
  }

  return (
    <div className="nav_body">{isMobile ? <MobileNav /> : <DesktopNav />}</div>
  );
};

export default Nav;