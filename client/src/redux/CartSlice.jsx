import { createSlice } from "@reduxjs/toolkit";

// const fetchFromLocalStorage = () => {
//   let cart = localStorage.getItem("cart");
//   if (cart) {
//     return JSON.parse(localStorage.getItem("cart"));
//   } else {
//     return [];
//   }
// };

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    totalItems: 0,
    totalAmount: 0,
    deliverCharge: 10,
  },
  reducers: {
    addToCart(state, action) {
      const existingProduct = state.data.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        const tempCart = state.data.map((product) => {
          if (product.id === action.payload.id) {
            let newQty = product.quantity + action.payload.quantity;
            let newTotalPrice = newQty * product.price;
            return {
              ...product,
              quantity: newQty,
              totalPrice: newTotalPrice,
            };
          } else {
            return product;
          }
        });

        state.data = tempCart;
        storeInLocalStorage(state.data);
      } else {
        state.data.push(action.payload);
        storeInLocalStorage(state.data);
      }
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const productToUpdate = state.data.find((product) => product.id === id);

      if (productToUpdate) {
        const validQuantity = Math.max(quantity || 1, 1);
        productToUpdate.quantity = validQuantity;
        productToUpdate.totalPrice = productToUpdate.price * quantity;
      }
    },

    removeItem(state, action) {
      const tempCart = state.data.filter(
        (product) => product.id !== action.payload.id
      );
      state.data = tempCart;
      storeInLocalStorage(state.data);
    },
    getCartTotal(state) {
      state.totalAmount = state.data.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.totalPrice);
      }, 0);
      state.totalItems = state.data.length;
    },
  },
});

export const { addToCart, removeItem, getCartTotal, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
 