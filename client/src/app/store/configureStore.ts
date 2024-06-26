// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import supplierSlice from '../../Components/Admin/supplier/supplierSlice';
//import supplierReducer from './slices/supplierSlice';

const store = configureStore({
    reducer: {
        AddSupplier: supplierSlice,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;