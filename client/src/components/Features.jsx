import React from "react";
import { features } from "./../data/Data";
const Features = () => {
  return (
    <div>
      <div className="container mx-auto py-5 my-10">
        <div className="grid grid-cols-4 gap-6">
          {features.map((val, index) => (
            <div key={index}>
              <div className="rounded p-5 text-center bg-[#dfe0e3]">
                <div className="rounded-full py-2 bg-white inline-flex p-2">
                  {val.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{val.title}</h3>
                  <p>{val.descript}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
