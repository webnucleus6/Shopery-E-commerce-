import React, { useState } from "react";
import image from "../../assets/faq-page/farmer.png";

const FAQ = () => {
  // State to track the active accordion
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the accordion
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="md:flex md:justify-between md:items-center">
        {/* Left Section: Title and Accordion */}
        <div className="md:w-1/2 flex flex-col justify-center items-start m-4">
          {/* Title */}
          <h2 className="text-left text-3xl md:text-5xl font-bold mb-8">
            Welcome, Let’s Talk <br />
            About Our Ecobazar
          </h2>
          {/* Accordion */}
          <div className="space-y-8">
            <div
              className={`collapse collapse-plus ${
                activeIndex === 0 ? "bg-transparent border-2 border-green-200" : "bg-base-200"
              }`}
            >
              <input
                type="radio"
                name="my-accordion-3"
                checked={activeIndex === 0}
                onChange={() => toggleAccordion(0)}
              />
              <div className="collapse-title text-xl font-medium">
                What is Ecobazar?
              </div>
              <div
                className={`collapse-content ${
                  activeIndex === 0 ? "border-t-2 border-green-200" : ""
                }`}
              >
                <p>
                  Ecobazar is an online marketplace that connects eco-friendly
                  farmers and consumers, providing fresh and organic products
                  directly from farms to your doorstep.
                </p>
              </div>
            </div>

            <div
              className={`collapse collapse-plus ${
                activeIndex === 1 ? "bg-transparent border-2 border-green-200" : "bg-base-200"
              }`}
            >
              <input
                type="radio"
                name="my-accordion-3"
                checked={activeIndex === 1}
                onChange={() => toggleAccordion(1)}
              />
              <div className="collapse-title text-xl font-medium">
                How does Ecobazar work?
              </div>
              <div
                className={`collapse-content ${
                  activeIndex === 1 ? "border-t-2 border-green-200" : ""
                }`}
              >
                <p>
                  Ecobazar allows you to browse and order organic products from
                  various local farmers. Simply choose your products, place an
                  order, and they will be delivered to your home.
                </p>
              </div>
            </div>

            <div
              className={`collapse collapse-plus ${
                activeIndex === 2 ? "bg-transparent border-2 border-green-200" : "bg-base-200"
              }`}
            >
              <input
                type="radio"
                name="my-accordion-3"
                checked={activeIndex === 2}
                onChange={() => toggleAccordion(2)}
              />
              <div className="collapse-title text-xl font-medium">
                What products can I find on Ecobazar?
              </div>
              <div
                className={`collapse-content ${
                  activeIndex === 2 ? "border-t-2 border-green-200" : ""
                }`}
              >
                <p>
                  On Ecobazar, you can find a wide range of organic products
                  including fresh vegetables, fruits, dairy products, grains,
                  and eco-friendly household items.
                </p>
              </div>
            </div>

            <div
              className={`collapse collapse-plus ${
                activeIndex === 3 ? "bg-transparent border-2 border-green-200" : "bg-base-200"
              }`}
            >
              <input
                type="radio"
                name="my-accordion-3"
                checked={activeIndex === 3}
                onChange={() => toggleAccordion(3)}
              />
              <div className="collapse-title text-xl font-medium">
                Is there a minimum order amount?
              </div>
              <div
                className={`collapse-content ${
                  activeIndex === 3 ? "border-t-2 border-green-200" : ""
                }`}
              >
                <p>
                  No, there is no minimum order amount on Ecobazar. You can
                  order as much or as little as you need.
                </p>
              </div>
            </div>

            <div
              className={`collapse collapse-plus ${
                activeIndex === 4 ? "bg-transparent border-2 border-green-200" : "bg-base-200"
              }`}
            >
              <input
                type="radio"
                name="my-accordion-3"
                checked={activeIndex === 4}
                onChange={() => toggleAccordion(4)}
              />
              <div className="collapse-title text-xl font-medium">
                How can I track my order?
              </div>
              <div
                className={`collapse-content ${
                  activeIndex === 4 ? "border-t-2 border-green-200" : ""
                }`}
              >
                <p>
                  You can track your order through the Ecobazar website or
                  mobile app by logging into your account and checking the order
                  status in the "My Orders" section.
                </p>
              </div>
            </div>

            <div
              className={`collapse collapse-plus ${
                activeIndex === 5 ? "bg-transparent border-2 border-green-200" : "bg-base-200"
              }`}
            >
              <input
                type="radio"
                name="my-accordion-3"
                checked={activeIndex === 5}
                onChange={() => toggleAccordion(5)}
              />
              <div className="collapse-title text-xl font-medium">
                What payment methods are accepted?
              </div>
              <div
                className={`collapse-content ${
                  activeIndex === 5 ? "border-t-2 border-green-200" : ""
                }`}
              >
                <p>
                  Ecobazar accepts various payment methods including
                  credit/debit cards, mobile payments, and cash on delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 flex justify-center items-center m-4">
          <img className="max-w-full h-auto" src={image} alt="Farmer" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
