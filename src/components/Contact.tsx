import React from "react";

export default function Contact() {
  return (
    <section className="py-10 px-4 sm:py-16 sm:px-6 md:py-20 md:px-12">
      <div className="max-w-lg sm:max-w-xl md:max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-4 sm:p-8 md:p-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-500 mb-4 sm:mb-6 text-center font-heading">
          {`Let's Build Something Great`}
        </h2>
        <p className="text-gray-600 mb-6 sm:mb-10 text-center font-para text-base sm:text-lg">
          {`Let's bring your business online — tell me what you need and I'll make it happen.`}
        </p>
        <form className="space-y-4 sm:space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            type="text"
            placeholder="Business Name"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows={5}
            placeholder="Tell me about your project..."
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full sm:w-auto bg-transparent text-slate-500 border border-blue-400 shadow-xl shadow-blue-200 font-semibold py-3 px-5 rounded-md font-para"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
