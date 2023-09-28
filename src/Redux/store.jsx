import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slices/productSlice";
import ReducerCombine from './Slices/ReducerCombine';

const store = configureStore({
    reducer : ReducerCombine,
})

export default store;