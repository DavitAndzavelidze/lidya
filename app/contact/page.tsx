"use client";
import Button from "@/components/Button";
import { Contacts } from "@/constants";
import React from "react";
import { motion } from "framer-motion";
import { rightToLeft, leftToRight } from "@/utils/motion";

const Contact = () => {
  return (
    <div className="my-[2rem] md:pt-0 flexCenter lg:justify-between flex flex-col lg:flex-row h-screen lg:max-container ">
      <motion.div
        variants={leftToRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-6 px-6 py-6 lg:px-0 lg:py-0 lg:flex-1 lg:h-[50%]"
      >
        {Contacts.map((info) => (
          <div key={info.title}>
            <h4 className="font-bold ">{info.title}</h4>
            <p>{info.content}</p>
          </div>
        ))}
      </motion.div>

      <motion.form
        variants={rightToLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        action="#"
        className="flex flex-col gap-2 py-6 w-full md:px-[6rem] px-6 lg:px-0 lg:flex-1"
      >
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            First name
          </label>
          <div>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="formInput"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Subject
          </label>
          <div>
            <input
              type="text"
              name="subject"
              id="subject"
              autoComplete="given-name"
              className="formInput"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Email
          </label>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="formInput"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            className="formInput resize-none"
            defaultValue={""}
          />
        </div>
        <div className="mx-auto">
          <Button
            type="submit"
            alt="submit"
            title="Send message"
            variant="btn_dark_blue"
          />
        </div>
      </motion.form>
    </div>
  );
};

export default Contact;
