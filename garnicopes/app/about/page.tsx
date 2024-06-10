"use client";
import { Testimonials } from "../landing_page/Testimonials";
import { AnimatePresence, motion } from "framer-motion";
import { AdventureModel } from "../landing_page/Adventure";
import Image from "next/image";

const data: Array<AdventureModel> = [
  {
    subHeading: "The Quest for Engagement",
    img: "story1",
    info: (
      <p>
        There&apos;s no second chances. Bad writing will send customers straight
        to your competitor. Never to return.
        <span> Copy that connects and converts is not just a dream.</span> We
        can make it your reality. ances. Bad writing will send customers
        straight to your competitor. Nevances. Bad writing will send customers
        straight to your competitor. Nev
      </p>
    ),
  },
  {
    subHeading: "The Quest for Engagement",
    img: "story2",
    reverse: true,
    info: (
      <p>
        Our goal is to help brands tell their stories in a way that connects
        deeply with their audience. We believe that the right words have the
        <span> power to inspire, engage, and drive action.</span> That&apos;s
        why we are committed to creating content that not only sounds good but
        also delivers real results.
      </p>
    ),
  },
];

function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="about__page"
    >
      <div className="about__page__header">
        <h2>Our Story</h2>
        <p>
          Our journey started with a passion for crafting compelling, authentic
          content that resonates with audiences. As a team of creative minds, we
          set out to create a copywriting studio<span> that focuses on organic,
          impactful writing.</span>
        </p>
      </div>
      <Story />

      <Testimonials />
    </motion.div>
  );
}

export default Page;

const Story = () => {
  return (
    <section className="adventure">
      {data.map((element, index) => {
        return (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            key={index}
            className={
              element.reverse
                ? "adv-container adv reverse"
                : "adv-container adv"
            }
            style={{}}
          >
            <div className="adv__info">
              <h2>{element.heading}</h2>
              <h4>{element.subHeading}</h4>
              {element.info}
            </div>

            <div className="adv__image">
              <Image
                src={"/" + element.img + ".png"}
                alt="Vercel Logo"
                width={1000}
                height={34}
                priority
              />
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};
