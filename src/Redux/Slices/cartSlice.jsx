import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartArray: [],
    totalQuantity: 0,
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;

            // Check if the item already exists in the cart
            const existingItem = state.cartArray.find((product) => product.id === newItem.id);

            if (existingItem) {
                // If the item exists, increment its quantity
                existingItem.quantity += 1;
            } else {
                // If the item doesn't exist, add it to the cart
                state.cartArray.push({
                    ...newItem,
                    quantity: 1,
                });
            }
            // Update totalQuantity and totalPrice
            state.totalQuantity += 1;
            state.totalPrice = parseInt(state.totalPrice + newItem.price);
        },



        removeFromCart: (state, action) => {
            const newItem = action.payload;
            console.log(newItem.id);
            state.cartArray = state.cartArray.filter((product) => product.id !== newItem.id);
            state.totalQuantity = state.totalQuantity - newItem.quantity;

            const calculateNewPrice = parseInt(state.totalPrice - (newItem.quantity * newItem.price))
            state.totalPrice = calculateNewPrice <= 0 ? 0 : calculateNewPrice;
        },


        incrementCartQuantity: (state, action) => {
            const { id } = action.payload;
            // Create a copy of the cartArray with updated quantities
            const updatedCartArray = state.cartArray.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    };
                }
                return item;
            });

            // Calculate the updated totalQuantity and totalPrice
            const updatedTotalQuantity = updatedCartArray.reduce(
                (total, item) => (total + item.quantity),
                0  // initial value of total
            );

            const updatedTotalPrice = updatedCartArray.reduce(
                (total, item) => total + parseInt(item.price * item.quantity),
                0
            );
            state.cartArray = updatedCartArray;
            state.totalQuantity = updatedTotalQuantity;
            state.totalPrice = updatedTotalPrice;
        },


        decrementCartQuantity: (state, action) => {
            const { id } = action.payload;
            // Create a copy of the cartArray with updated quantities
            const updatedCartArray = state.cartArray.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    };
                }
                return item;
            });

            // Calculate the updated totalQuantity and totalPrice
            const updatedTotalQuantity = updatedCartArray.reduce(
                (total, item) => (total + item.quantity),
                0  // initial value of total
            );

            const updatedTotalPrice = updatedCartArray.reduce(
                (total, item) => total + parseInt(item.price * item.quantity),
                0
            );
            state.cartArray = updatedCartArray;
            state.totalQuantity = updatedTotalQuantity;
            state.totalPrice = updatedTotalPrice;
        },



        clearCart: (state) => {
            state.cartArray = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        }
    }
})

export default cartSlice.reducer;
export const { addToCart, removeFromCart, incrementCartQuantity, decrementCartQuantity, clearCart } = cartSlice.actions;