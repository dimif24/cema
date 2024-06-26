// src/slices/supplierSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Supplier, emptySupplier } from '../../../models/supplier';

interface SupplierState {
    supplier: Supplier;
}

const initialState: SupplierState = {
    supplier: emptySupplier,
};

const supplierSlice = createSlice({
    name: 'addingSupplier',
    initialState,
    reducers: {
        updateSupplierField: (state, action: PayloadAction<{ name: string, value: string | number }>) => {
            state.supplier = { ...state.supplier, [action.payload.name]: action.payload.value };
        },
        resetSupplier: (state) => {
            state.supplier = emptySupplier;
        },
    },
});

export const { updateSupplierField, resetSupplier } = supplierSlice.actions;
export default supplierSlice.reducer;
