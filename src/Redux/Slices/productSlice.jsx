import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    productArray: [],
    individualSelectedProduct: null,
    loading: false,
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.productArray = action.payload.map((product) => ({
                ...product,
                quantity: 1,
            }));
        },

        selectProduct: (state, action) => {
            console.log("Payload ==========>>>> ", action.payload);
                state.individualSelectedProduct = action.payload;
        },

        removeSelectedProduct : (state) =>{
            state.individualSelectedProduct = null;
        },



        startLoading: (state) => {
            state.loading = true;
        },

        endLoading: (state) => {
            state.loading = false;
        }

    }
})


export default productSlice.reducer;
export const { setProducts, selectProduct,removeSelectedProduct, startLoading, endLoading } = productSlice.actions;