
import React, { useState } from "react";
import { FaChevronDown, FaShippingFast, FaLock, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function Documentation() {
  const docs = [
    {
      title: "Getting Started",
      icon: <FaStar className="text-yellow-500 mr-2" />,
      content: "Learn how to create your account, navigate our store, and place your first order.",
    },
    {
      title: "Product Care",
      icon: <FaStar className="text-yellow-500 mr-2" />,
      content: "Follow our care instructions to ensure your clothing lasts longer.",
    },
    {
      title: "Size Guide",
      icon: <FaStar className="text-yellow-500 mr-2" />,
      content: "Check our size charts to find the perfect fit for you.",
    },
    {
      title: "Shipping & Returns",
      icon: <FaShippingFast className="text-blue-500 mr-2" />,
      content: "We provide fast shipping and easy returns for all products.",
    },
    {
      title: "Payment & Security",
      icon: <FaLock className="text-gray-700 mr-2" />,
      content: "Your payment details are safe and encrypted.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 tracking-wide">Documentation</h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Everything you need to know about our products, care, and shopping policies.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-4 gap-8">
        {/* Sidebar / Table of Contents */}
        <div className="md:col-span-1 sticky top-20">
          <h2 className="text-xl font-semibold mb-6 border-b pb-2">Contents</h2>
          <ul className="space-y-3">
            {docs.map((doc, i) => (
              <li key={i}>
                <button
                  onClick={() => toggle(i)}
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-black transition"
                >
                  <span className="flex items-center">
                    {doc.icon} {doc.title}
                  </span>
                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="md:col-span-3 space-y-6">
          {docs.map((doc, i) => (
            <div
              key={i}
              className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-lg transition"
            >
              <button
                onClick={() => toggle(i)}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-2xl font-semibold">{doc.title}</h3>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {openIndex === i && (
                <p className="text-gray-600 mt-3">{doc.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-semibold mb-3">Shop With Confidence</h2>
        <p className="text-gray-600 mb-6">
          Explore our latest clothing & accessories collection.
        </p>

        <Link
          to="/shop"
          className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
        >
          Explore Collection
        </Link>
      </div>
    </div>
  );
}

export default Documentation;
