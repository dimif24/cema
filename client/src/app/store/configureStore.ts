// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
//import supplierReducer from './slices/supplierSlice';

const store = configureStore({
    reducer: {
        // suppliers: supplierReducer,
    },
});

export default store;
