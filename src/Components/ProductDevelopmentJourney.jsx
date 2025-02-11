import React from "react";
import "./ProductDevelopmentJourney.css";
import Text from "./Text";

const steps = [
  {
    title: "Crafting Your Business Strategy",
    description: "Join forces with our innovative technology firm to explore the limitless possibilities of innovation...",
    link: "#"
  },
  {
    title: "Discovery and Prototyping",
    description: "As a leading software development company, we excel in developing custom web and mobile applications...",
    link: "#"
  },
  {
    title: "Software/Product Development",
    description: "Our team specializes in delivering scalable, high-performance software solutions...",
    link: "#"
  }
];

const ProductDevelopmentJourney = () => {
  return (
    <div className="journey-container ">
        <div className="  p-5">

      <Text  text_data={"How we do"} />
      <h1 className="main-heading display-6 fw-bold text-white">From Idea to Launch to Support</h1>
      <p className="description text-white">Working only with the best to provide exquisite services and to bring state-of-the-art technology to those who need it.</p>
      <h3 className="journey-title text-start text-white mx-auto   fs-3  mt-5 fw-bold">Product Development Journey</h3>
        </div>

      <div className="carousel">
        {steps.map((step, index) => (
          <div key={index} className="card p-card">
            <h4>{step.title}</h4>
            <p>{step.description}</p>
            <a href={step.link} className="view-more">View more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDevelopmentJourney;