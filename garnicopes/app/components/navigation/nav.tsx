"use client";

import React, { Dispatch, SetStateAction } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const paths = [
  {
    pathname: "/",
    label: "home",
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

interface NavProp {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

/**This section is for when the web application is on desktop View */
const DesktopNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="container nav">
      <Link href={"/"}>
        <Image
          src="/logo.png"
          alt="Vercel Logo"
          className="nav__logo"
          width={1000}
          height={1000}
          priority
        />
      </Link>
      <div className="nav__container nav__resp">
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
      <div className="action__button" onClick={handleClick}>
        <Image
          src="/hamburger.png"
          alt="Vercel Logo"
          // className="dark:invert"
          width={34}
          height={25}
          priority
        />
      </div>

      {/* <div className="mobile"> */}
      <AnimatePresence>
        {isOpen && <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />}
      </AnimatePresence>
      {/* </div> */}
    </div>
  );
};

/**This section is for when the web application is on mobile View */
const SideNav: React.FC<NavProp> = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
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
          <Link href={"/"} onClick={handleClick}>
            <Image
              src="/logo.png"
              alt="Vercel Logo"
              style={{ zIndex: 33 }}
              width={200}
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
            style={{ marginBottom: "1em" }}
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
              onClick={handleClick}
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
  return <div className="nav_body">{<DesktopNav />}</div>;
};

export default Nav;
