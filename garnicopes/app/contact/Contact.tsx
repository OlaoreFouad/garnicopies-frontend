"use client";
import Link from "next/link";
import React, {
  ChangeEvent,
  FormEvent,
  useState,
  
} from "react";

import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

import Image from "next/image";
function Contact() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [selectedPurpose, setSelectedPurpose] = useState<string>("");

 const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
   setSelectedPurpose(event.target.value);
 };

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // const mailchimpClient = require("@mailchimp/mailchimp_transactional")(
  //   "YOUR_API_KEY"
  // );

  // const run = async () => {
  //   const response = await mailchimpClient.messages.send({ message: {} });
  //   console.log(response);
  // };


  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="images">
        {Array.from({ length: 6 }).map((_, i) => (
          <Image
            key={i}
            src={"/ask.png"}
            width={1000}
            height={1000}
            alt="ask"
          />
        ))}
      </div>

      <form action="#" className="brand" onSubmit={handleSubmit}>
        <h2>Do you have</h2>
        <h2 className="green">a question?</h2>
        <p>Fill up the form and our team will get back within 24 hours</p>

        <div className="inputBox">
          <select
            id="purpose"
            value={selectedPurpose}
            onChange={handleChange}
            style={{ width: "100%" }}
          >
            <option value="" disabled></option>
            <option value="question">Question</option>
            <option value="feedback">Feedback</option>
            <option value="support">Support</option>
          </select>
          <label
            htmlFor="purpose"
            className={selectedPurpose.length > 0 ? "active" : ""}
          >
            Purpose
          </label>
        </div>

        <div className="inputBox">
          <input type="text" id="name" onChange={onChangeName} value={name} />
          <label htmlFor="name" className={name.length > 0 ? "active" : ""}>
            Name
          </label>
        </div>
        <div className="inputBox">
          <input
            type="text"
            id="email"
            value={email}
            onChange={onChangeEmail}
          />
          <label htmlFor="email" className={email.length > 0 ? "active" : ""}>
            Email
          </label>
        </div>
        <div className="inputBox">
          <textarea
            name="message"
            value={message}
            id="message"
            onChange={onChangeMessage}
          ></textarea>
          <label
            htmlFor="message"
            className={message.length > 0 ? "active" : ""}
          >
            Message
          </label>
        </div>

        <button type="submit">Submit</button>

        <div className="socials">
          <Link href={"#"}>
            <BsTwitterX color="white" size={30} />
          </Link>
          <Link href={"#"}>
            <FaInstagram color="white" size={30} />
          </Link>
        </div>
      </form>
    </motion.section>
  );
}

export default Contact;
