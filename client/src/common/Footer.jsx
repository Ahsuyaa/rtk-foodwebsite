import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  console.log("Footer rendered");
  return (
    <div className="bg-[#6c9427f5] text-white">
      <div className="container mx-auto grid grid-cols-3 py-10">
        <div className="py-10">
          <div className="text-[#fff] text-4xl font-bold mb-2">
            तरकारी<span>Bazar</span>
          </div>
          <div className="flex text-2xl gap-2">
            <h6>
              <FaFacebookF />
            </h6>
            <h6>
              <FaInstagram />
            </h6>
            <h6>
              <FaTiktok />
            </h6>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold ">Shop info</h2>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li></li>
          </ul>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold "> Why People Like Us!</h2>
          <p className="text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam fuga
            quaerat est fugiat a odit quo repellendus magni atque enim nobis
            aliquam error, officiis reprehenderit? Obcaecati, aliquid! Quis
            iusto pariatur rerum dolores. Dignissimos in fuga ad impedit ratione
            hic nulla facere voluptatibus blanditiis eius vero saepe tempora,
            fugiat maxime cum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
