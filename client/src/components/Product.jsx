import React, { useState } from "react";
import { products } from "../data/Data";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/CartSlice";
const Product = () => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();

  const increaseQty = () => {
    setQty((preQty) => {
      let newQty = preQty + 1;
      return newQty;
    });
  };

  const decreaseQty = () => {
    setQty((preQty) => {
      let newQty = preQty - 1;
      if (newQty < 1) {
        newQty = 1;
      }
      return newQty;
    });
  };

  const handleAddToCart = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      qunatity: qty,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
    navigate("/cart");
  };

  const [menuItems, setMenuItem] = useState(products);

  const filterItems = (category) => {
    const newItems = products.filter((item) => item.category === category);
    setMenuItem(newItems);

    // for all data show
    if (category === "all") {
      setMenuItem(products);
      return;
    }
  };
  return (
    <div className="py-5 ">
      <div className="container mx-auto py-5">
        <div className="text-center">
          <div className="grid grid-cols-4 gap-10 ">
            <div className="col-span-1 text-center">
              <h1 className="text-3xl font-semibold border-b-4 border-b-[#80c407]  inline-flex pb-2">
                Our Organic Product
              </h1>
            </div>
            <div className="col-span-3">
              <ul className=" inline-flex  text-center mb-5">
                <li className="nav-item">
                  <a
                    className="flex m-2 py-2 bg-[#dfe0e3] text-[#80c407]  font-bold rounded-full active cursor-pointer"
                    onClick={() => filterItems("all")}
                  >
                    <span className="text-dark w-[130px]">All Products</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="flex py-2 m-2 bg-[#dfe0e3] text-[#80c407]  font-bold rounded-full"
                    onClick={() => filterItems("Vegetables")}
                  >
                    <span className="text-dark w-[130px]">Vegetables</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="flex m-2 py-2 bg-[#dfe0e3] text-[#80c407]  font-bold rounded-full"
                    onClick={() => filterItems("Fruits")}
                  >
                    <span className="text-dark w-[130px]">Fruits</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="flex m-2 py-2 bg-[#dfe0e3] text-[#80c407]  font-bold rounded-full"
                    onClick={() => filterItems("Bread")}
                  >
                    <span className="text-dark w-[130px]">Bread</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="flex m-2 py-2 bg-[#dfe0e3] text-[#80c407]  font-bold rounded-full"
                    onClick={() => filterItems("Meat")}
                  >
                    <span className="text-dark w-[130px]">Meat</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="">
              <div className="grid grid-cols-4 gap-5">
                {menuItems.map((val, index) => (
                  <div className="">
                    <div className="relative">
                      <img
                        src={val.product_img}
                        alt="img"
                        className="w-[100%] h-[200px] object-cover "
                      />
                      <div className="absolute top-0 right-0 m-2  bg-orange-400 inline-flex rounded-full text-white px-5 py-2 bg-opacity-75">
                        {val.product_name}
                      </div>
                      <div>
                        <p>{val.description}</p>
                        <div className="flex justify-between">
                          <h6>${val.price}</h6>
                          <button onClick={() => handleAddToCart(val)}>
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
