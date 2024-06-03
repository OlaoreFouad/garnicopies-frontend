"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const handleClick = () => {};
  return (
    <>
      <Image
        src="/header__bg.png"
        alt="Vercel Logo"
        className="bgImg"
        width={150}
        height={34}
        priority
      />
      <p className="header__tag">A copywriting agency that just fits.</p>
      <h1 className="header__heading">
        Organic <span>Content</span>, Organic <span>Conversions</span>
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

      {/* <Link href={"/"} className="button">
        Let's Talk
      </Link> */}
    </>
  );
}
