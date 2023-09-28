import { configureStore } from "@reduxjs/toolkit";
import ReducerCombine from './Slices/ReducerCombine';

const store = configureStore({
    reducer : ReducerCombine,
})

export default store;