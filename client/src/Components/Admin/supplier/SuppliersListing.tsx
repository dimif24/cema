// src/components/Admin/supplier/SuppliersListing.tsx
import { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/joy';
import SupplierCard from './SupplierCard';
import { fetchSuppliers } from '../../api/AdminApi';
import { Supplier } from '../../../models/supplier';

const SuppliersListing = () => {
    const [suppliers, setSuppliers] = useState<Supplier[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getSuppliers = async () => {
            try {
                const data = await fetchSuppliers();
                setSuppliers(data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch suppliers');
                setLoading(false);
            }
        };

        getSuppliers();
    }, []);

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Box>{error}</Box>;
    }

    return (
        <Box>
            {suppliers.map((supplier) => (
                <SupplierCard key={supplier.id} {...supplier} />
            ))}
        </Box>
    );
};

export default SuppliersListing;
