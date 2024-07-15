// src/slices/supplierSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditInitialSupplier, Supplier, emptySupplier } from '../../../models/supplier';
import { ContactPerson } from '../../../models/contactPerson';

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
        updateSupplierField: (state, action: PayloadAction<{ name: string, value: string | number | string[] }>) => {
            state.supplier = { ...state.supplier, [action.payload.name]: action.payload.value };
        },
        resetSupplier: (state) => {
            state.supplier = emptySupplier;
        },
        EditInitialSupplierState: (state, action: PayloadAction<Supplier>) => {
            state.supplier = EditInitialSupplier(action.payload);
        },
        addContactPerson(state) {
            state.supplier.contactPersons.push({
                id: 0,
                name: '',
                position: '',
                phoneNumber: '',
                email: '',
                supplier: null,
            } as unknown as ContactPerson); //those as because we shouldnt pass supplier field when adding contact from supplier and we dont want to remove supplier from contactperson model to be used.
        },
        updateContactPerson(state, action: PayloadAction<{ index: number; name: keyof ContactPerson; value: string }>) {
            const { index, name, value } = action.payload;
            const contactPerson = state.supplier.contactPersons[index];

            if (name in contactPerson) {
                (contactPerson[name] as string) = value;
            }
        },
        removeContactPerson(state, action: PayloadAction<number>) {
            state.supplier.contactPersons.splice(action.payload, 1);
        },
    },
});

export const { updateSupplierField, resetSupplier, EditInitialSupplierState, addContactPerson,
    updateContactPerson,
    removeContactPerson } = supplierSlice.actions;
export default supplierSlice.reducer;
