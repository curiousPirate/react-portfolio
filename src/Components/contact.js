import React, { useState } from "react";
import emailjs from "emailjs-com";
import SatelliteMotion from "./satellitemotion";


function Contact() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
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
          alert("You are AWESOME! Will get back soon!");
        },
        (error) => {
          console.log(error.text);
          alert("Its's Strange, can you try again?");
        }
      );
  };


  return (
    <div className="h-screen bg-[#102a43]">
      <div
        className="w-full px-10 flex flex-col xl:items-stretch justify-between xl:flex-row"
        id="newsletter"
      >
        <div className="w-full xl:pl-10 mt-10">
          <h1 className="text-4xl md:text-4xl xl:text-5xl font-bold mb-4 xl:text-left text-teal-500">
            Let's Talk!
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full max-w-md"
          >
            <div className="inputBox mt-10">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl w-full p-5 leading-tight text-lg"
                required="required"
              />
              <span htmlFor="email">Email</span>
            </div>
            <div className="inputBox mt-10">
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-xl w-full p-5 leading-tight"
                required="required"
              />
              <span htmlFor="name">Name</span>
            </div>
            <div className="inputBox my-10" id="msgField">
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="rounded-xl w-full p-5 h-32 leading-tight"
              />
              <span htmlFor="message">Message</span>
            </div>
            <span>
              <button
                type="submit"
                className="relative inline-block px-4 py-2 font-medium group w-full"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  Get in Touch!
                </span>
              </button>
            </span>
          </form>
          <SatelliteMotion />
        </div>
      </div>
    </div>
  );
}

export default Contact;
