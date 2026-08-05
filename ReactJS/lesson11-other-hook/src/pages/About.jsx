import React from "react";

const About = () => {
  return (
    <div>
      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">About us</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-12">
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>

            <h3 className="mb-3">About Extra Shop</h3>

            <p>
              At Extra Shop, we believe technology should be accessible,
              reliable, and exciting. Founded with a passion for innovation,
              we specialize in bringing you the latest electronics — from
              cutting-edge smartphones and laptops to smart home devices,
              audio equipment, and accessories.
            </p>

            <p>
              Our mission is simple: to provide high-quality products at
              competitive prices, backed by exceptional customer service. We
              carefully select every item in our catalog to ensure it meets
              our standards for performance, durability, and value.
            </p>

            <p>
              Whether you're upgrading your home setup, searching for the
              perfect gift, or staying ahead of the latest tech trends, Extra
              Shop is here to make your shopping experience seamless and
              enjoyable.
            </p>

            <h4 className="mt-4 mb-3">Why Choose Us?</h4>
            <ul>
              <li>Wide range of genuine electronics</li>
              <li>Competitive prices with regular deals</li>
              <li>Fast and secure shipping</li>
              <li>Dedicated customer support</li>
              <li>Easy returns and warranty coverage</li>
            </ul>

            <p className="mt-4 fst-italic">
              Thank you for choosing Extra Shop — where technology meets trust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;