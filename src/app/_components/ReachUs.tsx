"use client"

import React, { useState } from "react";

const options = ["Development", "Design", "Branding", "Other"];

const ReachUs = () => {
  const [selected, setSelected] = useState<string>("Development");

  return (
    <div 
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundImage: "url('/assets/ReachUs.svg')",
        backgroundSize: "cover",
      }}
    >
      <div className="py-48 justify-center items-center flex">
      <div className="gap-14 flex justify-center rounded-xl w-full max-w-4xl">
        <div className="w-1/2 py-20 pr-20">
          <h2 className="text-4xl font-semibold text-white mb-4">Reach us out</h2>
          <p className="text-xl text-white/70 mb-6">
            Have an idea, a project, or just want to collaborate?
          </p>
          <p className="text-xl text-white/60">
            We're here to turn possibilities into reality. Let's explore how we can engineer your vision into something extraordinary.
          </p>
        </div>
        <div className="w-1/2 px-2">
          <form action="#" method="POST" className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-white block mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-2 text-white bg-white/15 rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label className="text-white block mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-2  bg-white/5 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
            </div>
            <div>
              <label className="text-white block mb-2">Email</label>
              <input
                type="email"
                placeholder="name@name.com"
                className="w-full p-2 bg-white/5 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>
            <div>
              <label className="text-white block mb-2">Company/Organization</label>
              <input
                type="text"
                placeholder="your company"
                className="w-full p-2 bg-white/5 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>
            <div className="w-full">
              <label className="text-white block mb-2">What Can We Help You With?</label>
              <div className="space-y-2">
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelected(option)}
                    className={`w-full text-left p-2 rounded-lg border transition-all duration-300
                      ${
                        selected === option
                          ? "bg-white/20 border-white/20 text-white"
                          : "border-white/20 text-gray-300 bg-white/5"
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-white block mb-2">Your Message</label>
              <textarea
                placeholder="Message"
                rows={2}
                className="w-full p-3 bg-white/5 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black p-2 rounded-md font-semibold hover:bg-gray-300 transition"
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ReachUs;
