// src/components/Admin/supplier/SuppliersListing.tsx
import { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import SupplierCard from './SupplierCard';
import { fetchSuppliers } from '../../api/admin';
import { Supplier } from '../../../models/supplier';
import { Grid } from '@mui/material';

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

        <Grid container spacing={2}>
            {suppliers.map((supplier) => (
            <Grid item xs={12} key={supplier.id}>
                <SupplierCard key={supplier.id} {...supplier} />
            </Grid>

            ))}
        </Grid>

    );
};

export default SuppliersListing;
