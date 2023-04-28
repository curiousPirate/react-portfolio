import React, { useState } from "react";
import emailjs from "emailjs-com";
import SatelliteMotion from "./satellitemotion";



function Contact() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

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
          console.log(result.text);
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
    <div className="h-screen bg-cover bg-center bg-no-repeat m-0 overflow-hidden text-center text-white">
      <div
        className="w-full p-6 flex flex-col xl:items-stretch justify-between xl:flex-row"
        id="newsletter"
      >
        <div className="w-full xl:pl-10 xl:py-28">
          <h1 className="text-4xl md:text-4xl xl:text-5xl font-bold leading-10 text-slate-950 mb-4 xl:text-left md:mt-0 mt-20">
            Let's Talk!
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full max-w-md"
          >
            <label htmlFor="email" className="text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow bg-gray-100 text-base rounded-xl text-cyan-950 w-full p-5 leading-tight caret-cyan-950"
              required
            />
            <label htmlFor="name" className="text-sm font-bold mb-2 mt-4">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow bg-gray-100 text-base rounded-xl text-cyan-950 w-full p-5 leading-tight caret-cyan-950"
              required
            />
            <label htmlFor="message" className="text-sm font-bold mb-2 mt-4">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="shadow bg-gray-100 text-base rounded-xl text-cyan-950 w-full p-5 leading-tight caret-cyan-950"
              rows="5"
              required
            />
            <span className="my-4 mx-4">
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
