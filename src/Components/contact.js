import React, { useState } from "react";
import emailjs from "emailjs-com";

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
    <div
      className="w-full p-6 flex flex-col xl:items-stretch justify-between xl:flex-row"
      id="newsletter"
    >
      <div className="w-full xl:w-1/2 xl:pl-10 xl:py-28">
        <h1 className="text-4xl md:text-4xl xl:text-5xl font-bold leading-10 text-slate-950 mb-4 xl:text-left md:mt-0 mt-20">
          Let's Talk!
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md">
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
          <button
            type="submit"
            className="w-full bg-cyan-950 rounded-xl text-base font-medium leading-none text-white p-5 uppercase mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-900"
          >
            Get In Touch!
          </button>
        </form>
      </div>
      <div className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">

      </div>
    </div>
  );
}

export default Contact;
