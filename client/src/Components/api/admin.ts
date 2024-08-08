// api/adminApi.ts

import { ContactPersonDto } from "../../models/contactPerson";
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

export const editSupplier = async (id: number, supplier: Supplier) => {
    try {
        const response = await fetch(`${url}/api/Suppliers/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(supplier),


        });

        if (!response.ok) {
            return { success: false, message: "error" };

        }
        return { success: true, message: 'Supplier Added Successfully' };

    } catch (error) {
        console.error('Error fetching suppliers:', error);
        return { success: false, message: error };

    }
};

export const addContactPerson = async (ContactPerson: ContactPersonDto) => {
    try {
        const response = await fetch(`${url}/api/ContactPersons`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ContactPerson),
        });

        const result = await response.json();

        if (!response.ok) {
            return { success: false, message: result.title };
        }

        return { success: true, message: 'Contact Added Successfully' };
    } catch (error) {
        return { success: false, message: error || 'An error occurred while adding the Contact Person' };
    }
};
export const deleteContactPerson = async (id: number) => {
    try {
        const response = await fetch(`${url}/api/ContactPersons/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error(`Contact person with ID ${id} not found`);
            } else {
                throw new Error('Failed to delete contact');
            }
        }
        return ;
    } catch (error) {
        console.error('Error deleting contact:', error);
        throw error;
    }
};