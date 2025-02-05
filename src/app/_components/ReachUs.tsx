"use client";

import React, { useState } from "react";

const ReachUs = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <div className="bg-black flex items-center justify-center min-h-screen p-4">
      <div className="p-6 md:p-10 rounded-xl shadow-lg w-full max-w-none flex flex-col md:flex-row md:min-h-screen md:items-center">
        <div className="w-full md:w-1/2 text-white pr-0 md:pr-6 mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-4">Reach us out</h2>
          <p className="text-gray-400 mb-6">
            Have an idea, a project, or just want to collaborate?
          </p>
          <p className="text-gray-400">
            We're here to turn possibilities into reality. Let's explore how we can engineer your vision into something extraordinary.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <form action="#" method="POST" className="space-y-4 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-400 block mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
              <div>
                <label className="text-gray-400 block mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
            </div>
            <div>
              <label className="text-gray-400 block mb-1">Email</label>
              <input
                type="email"
                placeholder="name@name.com"
                className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>
            <div>
              <label className="text-gray-400 block mb-1">Company/Organization</label>
              <input
                type="text"
                placeholder="your company"
                className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>
            <div className="relative">
              <label className="text-gray-400 block mb-1">What Can We Help You With?</label>
              <select 
                className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              >
                <option>Development</option>
                <option>Design</option>
                <option 
                  onMouseEnter={() => setShowComingSoon(true)} 
                  onMouseLeave={() => setShowComingSoon(false)}
                >
                  Branding
                </option>
                <option>Other</option>
              </select>
              {showComingSoon && (
                <span className="absolute left-full ml-2 mt-1 text-gray-400 text-sm">(Coming Soon)</span>
              )}
            </div>
            <div>
              <label className="text-gray-400 block mb-1">Your Message</label>
              <textarea
                placeholder="Write your message here"
                rows={4}
                className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black p-3 rounded-md font-semibold hover:bg-gray-300 transition"
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReachUs;
