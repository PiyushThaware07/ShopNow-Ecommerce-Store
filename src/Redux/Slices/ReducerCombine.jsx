import { combineReducers } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from './cartSlice';

const rootReducer = combineReducers({
    productSlice,cartSlice
})

export default rootReducer;