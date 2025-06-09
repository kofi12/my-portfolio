import React from "react";

export default function Contact() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Let’s Build Something Great
        </h2>
        <p className="text-gray-600 mb-10 text-center">
          Tell me a little about your business and what you’re looking for —
          I’ll follow up shortly.
        </p>
        <form className="space-y-6">
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
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
