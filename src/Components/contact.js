import React, { useState } from "react";
import emailjs from "emailjs-com";
import Confetti from "react-confetti";
import SatelliteMotion from "./satellitemotion";
import { motion } from "framer-motion";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cibo1ek",
        "template_gwkv6pb",
        e.target,
        "RrKeOKOTJdH1gBlTs"
      )
      .then(
        (result) => {
          setEmail("");
          setName("");
          setMessage("");
          setShowConfetti(true);
          setTimeout(() => {
            setShowConfetti(false);
          }, 5000);
        },
        (error) => {
          alert("It's Strange, can you try again?");
        }
      );
  };

  return (
    <div className="h-screen bg-[#001129] p-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-justify"
      >
        <h1 className="p-10 text-xl lg:text-3xl text-justify text-teal-600 px-10 lg:px-32">
          "Looking for an enthusiastic and skilled professional? I'm available
          for freelance and full-time job opportunities, ready to take on
          exciting projects. Fill out the details below, and I'll get in touch
          with you promptly!"
        </h1>
      </motion.div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <div className="inputBox pb-10 ">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl leading-tight"
              required="required"
            />
            <span htmlFor="email">Email</span>
          </div>
          <div className="inputBox pb-10">
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-xl leading-tight"
              required="required"
            />
            <span htmlFor="name">Name</span>
          </div>
          <div className="inputBox pb-10" id="msgField">
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-xl h-32 leading-tight"
            />
            <span htmlFor="message">Message</span>
          </div>
          <span>
            <button
              type="submit"
              className="relative inline-block px-4 py-2 font-medium group w-full"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-teal-600 border-2 border-black group-hover:bg-black"></span>
              <span className="flex relative justify-center text-white  group-hover:text-white">
                Get in Touch!
              </span>
            </button>
            {showConfetti && <Confetti />}
          </span>
        </form>
      </div>
      <SatelliteMotion />
    </div>
  );
}

export default Contact;
