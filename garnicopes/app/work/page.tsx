"use client";
import { Portfolio } from "../landing_page";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";


function Page() {
  return (
    <motion.div
      className="work__container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <Portfolio />
    </motion.div>
  );
}

export default Page;


