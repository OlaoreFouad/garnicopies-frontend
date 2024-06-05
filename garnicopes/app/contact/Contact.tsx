"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

function Contact() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="contact">
      <form action="#" className="brand">
        <h2>Do you have</h2>
        <h2 className="green">a question?</h2>
        <p>Fill up the form and our team will get back within 24 hours</p>

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

        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>

        <div className="socials">
          <Link href={"#"}>
            <BsTwitterX color="white" size={30} />
          </Link>
          <Link href={"#"}>
            <FaInstagram color="white" size={30} />
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Contact;
