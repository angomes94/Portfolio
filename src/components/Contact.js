import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";


export default function Contact() {

  const variants = {
    hidden: {
      y: "-100",
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 1,  
      }
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 1,
        damping: 18,
        stiffness: 250,
        delay: 0.5
      }
    }
  };
  


  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);


  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
<motion.div ref={ref} animate={controls} initial="hidden" variants={variants}
    className=" flex flex-col justify-center items-center w-full">
      <h1 className=' text-black text-4xl font-extrabold underline underline-offset-4 pb-5 decoration-orange'>Get in Touch</h1>
      <form id="contact" ref={form} onSubmit={sendEmail} className="max-w-lg w-full px-5">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="user_name">
            Name
          </label>
          <input
            className=" border rounded w-full py-2 px-3 text-black leading-tight  focus:outline-2 focus:outline-dark-slate "
            id="user_name"
            type="text"
            name="from_name"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="user_email">
            Email
          </label>
          <input
            className=" border rounded w-full py-2 px-3 text-black leading-tight  focus:outline-2 focus:outline-dark-slate "
            id="user_email"
            type="email"
            name="email_id"
            placeholder="johndoe@example.com"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className=" border rounded w-full py-2 px-3 text-black leading-tight  focus:outline-2 focus:outline-dark-slate "
            id="message"
            name="message"
            rows="5"
            placeholder="Enter your message here"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            className=" bg-orange w-full text-white font-medium rounded-xl py-2 duration-300 hover:ring-2 hover:ring-black focus:scale-110"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </motion.div>

  )
}
