import React from "react";

import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import NavBar from "./NavBar";
const TopBar = () => {
  return (
    <>
      <div className="bg-[#80c407] ">
        <div className="container mx-auto  ">
          <div className="flex justify-between">
            <div className="p-2 flex gap-5">
              <small className="mb-3 flex items-center gap-1">
                <span>
                  <FaMapMarkerAlt />
                </span>
                <div className="">123 Street, New York</div>
              </small>
              <small className="mb-3 flex items-center gap-1">
                <span>
                  <FaEnvelope />
                </span>
                <div className="">Email@Example.com</div>
              </small>
            </div>
            <div className="top-div pb-2 flex items-center gap-1">
              <div className="">
                <small className=" mx-2">Privacy Policy</small>/
              </div>
              <div className="">
                <small className=" mx-2">Terms of Use</small>/
              </div>
              <div className="">
                <small className=" m-2">Sales and Refunds</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </>
  );
};
export default TopBar;
