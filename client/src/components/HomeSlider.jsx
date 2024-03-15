import React from "react";

const HomeSlider = () => {
  const containerStyle = {
    background:
      "linear-gradient(rgba(128, 196, 7, 0.2), rgba(128, 196, 7, 0.2))",

    backgroundPosition: "center",
    height: "500px", // Set an appropriate height for your slider
    display: "flex",
    alignItems: "center",

    color: "#ffffff", // Set text color to make it visible on the background
    backgroundRepeat: "no-repeat", // Add no-repeat property
    position: "relative", // Required for the overlay
  };

  return (
    <div>
      <div>
        <div className="mx-auto container flex items-center gap-10 justify-between">
          <div>
            <h4 className="text-[25px] text-orange-400 ">100% Organic Foods</h4>
            <h1 className="text-[60px] font-bold text-[#80c407] ">
              Organic Veggies & <br /> Fruits Foods
            </h1>
            <input
              type="text"
              className="border-2 border-orange-400 p-5 bg-transparent rounded-full w-full"
            />
            <button className="bg-[#80c407] px-8 text-white font-bold py-2 mt-5 rounded-full">
              Submit
            </button>
          </div>
          <div className="">
            <img
              src="https://img.freepik.com/premium-vector/font-design-word-organic-with-many-vegetables_1308-42251.jpg?size=626&ext=jpg&ga=GA1.2.1986468226.1692861284&semt=ais"
              alt="img"
              className=" h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
