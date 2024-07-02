"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
  const handleClick = () => {};
  return (
    ///@todo : fix this
    <motion.main
    className="initial__header"
      style={{
        padding: "11em 0px",
      }}
      // initial={{ y: "100%", opacity: 0 }}
      // whileInView={{ y: 0, opacity: 1 }}
      // transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Image
        src="/header__bg.png"
        alt="Vercel Logo"
        className="bgImg"
        width={1000}
        height={1000}
        priority
      />
      <p className="header__tag">A copywriting agency that just fits.</p>
      <h1 className="header__heading">
        Organic <span>Content</span> , Organic <span>Conversions</span>
      </h1>
      <div className="button__container">
        <Link href={"/"} className="button">
          Let&apos;s Talk
        </Link>
      </div>

      <Link href={"#services"}>
        <Image
          src="/scroll.png"
          alt="Vercel Logo"
          className="scrollImg"
          width={90}
          height={30}
          priority
        />
      </Link>
    </motion.main>
  );
}
