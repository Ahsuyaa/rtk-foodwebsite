import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartTotal,
  removeItem,
  updateQuantity,
} from "../../redux/CartSlice";
import { Link } from "react-router-dom";
import { FaMinus, FaPlusCircle, FaTimes } from "react-icons/fa";

export default function Cart() {
  const increaseQty = (cartProductId, currentQty) => {
    const newQty = currentQty + 1;
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  const decreaseQty = (cartProductId, currentQty) => {
    const newQty = Math.max(currentQty - 1, 1); // Ensure quantity doesn't go below 1
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  const dispatch = useDispatch();
  const {
    data: cartProducts,
    totalAmount,
    deliverCharge,
  } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [useSelector((state) => state.cart)]);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

  const emptyCartMsg = (
    <h4 className="container text-center p-4">Your Cart is Empty</h4>
  );

  return (
    <div className="container mx-auto">
      <div className=" py-5">
        <h1 className="text-center text-white display-6">Cart</h1>
      </div>
      {cartProducts.length === 0 ? (
        emptyCartMsg
      ) : (
        <div className=" py-5">
          <div className="container flex justify-between py-5">
            <div className="">
              <table className="table text-xl ">
                <thead>
                  <tr>
                    <th scope="col">Products</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((cartProduct) => (
                    <tr key={cartProduct.id}>
                      <th scope="row ">
                        <div className="flex items-center px-5">
                          <img
                            src={cartProduct.product_img}
                            alt={cartProduct.product_img}
                            style={{ width: 100 }}
                          />
                        </div>
                      </th>
                      <td>
                        <p className="mb-0 mt-4 px-5">
                          {cartProduct.product_name}
                        </p>
                      </td>
                      <td>
                        <p className="mb-0 mt-4 px-5">{cartProduct.price}</p>
                      </td>
                      <td>
                        <div
                          className="flex justify-center gap-2 mt-4"
                          style={{ width: "100px" }}
                        >
                          <div className="input-group-btn">
                            <button
                              onClick={() =>
                                decreaseQty(
                                  cartProduct.id,
                                  cartProduct.quantity
                                )
                              }
                              className="border"
                            >
                              <span className="">
                                <FaMinus />
                              </span>
                            </button>
                          </div>
                          <span className="form-control form-control-sm text-center border-0">
                            {cartProduct.quantity || 1}
                          </span>
                          <div className="input-group-btn">
                            <button
                              onClick={() =>
                                increaseQty(
                                  cartProduct.id,
                                  cartProduct.quantity
                                )
                              }
                              className=""
                            >
                              <span className="">
                                <FaPlusCircle />
                              </span>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0 mt-4 px-5">
                          {cartProduct.totalPrice} $
                        </p>
                      </td>
                      <td>
                        <button
                          onClick={() => handleRemoveItem(cartProduct.id)}
                          className=" mt-4"
                        >
                          <span className="">
                            <FaTimes />
                          </span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border">
              <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                <div className="">
                  <div className="p-4">
                    <h1 className="display-6 mb-4 font-bold">
                      Cart <span className="font-normal">Total</span>
                    </h1>
                    <div className="flex mb-4">
                      <h5 className="mb-0 me-4">Subtotal:</h5>
                      <p className="mb-0">${totalAmount}</p>
                    </div>
                    <div className="flex ">
                      <h5 className="mb-0 me-4">Shipping</h5>
                      <div>
                        <p className="mb-0">Flat rate: $ {deliverCharge}</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 mb-4 flex ">
                    <h5 className="mb-0 ps-4 me-4">Total</h5>
                    <p className="mb-0 pe-4">$ {totalAmount + deliverCharge}</p>
                  </div>
                  <button
                    className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
                    type="button"
                  >
                    Proceed Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
