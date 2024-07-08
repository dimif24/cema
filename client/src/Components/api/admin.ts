// api/adminApi.ts

import { Supplier } from "../../models/supplier";
const url = 'http://localhost:5000';
export const addSupplier = async (supplier: Supplier) => {
    try {
        const response = await fetch(`${url}/api/Suppliers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(supplier),
        });

        const result = await response.json();

        if (!response.ok) {
            return { success: false, message: result.title };
        }

        return { success: true, message: 'Supplier Added Successfully' };
    } catch (error) {
        return { success: false, message: error || 'An error occurred while adding the supplier' };
    }
};
export const fetchSuppliers = async (): Promise<Supplier[]> => {
    try {
        const response = await fetch(`${url}/api/Suppliers`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch suppliers');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching suppliers:', error);
        throw error;
    }
};
export const fetchSupplier = async (id: number): Promise<Supplier> => {
    try {
        const response = await fetch(`${url}/api/Suppliers/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch suppliers');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching suppliers:', error);
        throw error;
    }
};
