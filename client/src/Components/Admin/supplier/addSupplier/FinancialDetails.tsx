import React from 'react';
import { Grid, TextField } from '@mui/material';
//import { useAppDispatch } from '../../../../app/store/configureStore';
//import { updateSupplierField } from './../supplierSlice';
import { Supplier } from '../../../../models/supplier';

interface FinancialDetailsProps {
    supplier: Supplier; // Replace with actual supplier type
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    xs: number;
}

const FinancialDetails: React.FC<FinancialDetailsProps> = ({ supplier, handleInputChange, xs }) => {
    //const dispatch = useAppDispatch();

    return (
        <>
            <Grid item xs={xs}>
                <TextField
                    fullWidth
                    label="DB"
                    name="db"
                    type='number'
                    value={supplier.db?.toLocaleString()}
                    onChange={handleInputChange}
                />
            </Grid>
            <Grid item xs={xs}>
                <TextField
                    fullWidth
                    label="CR"
                    name="cr"
                    type='number'
                    value={supplier.cr?.toLocaleString()}
                    onChange={handleInputChange}
                />
            </Grid>
            <Grid item xs={xs}>
                <TextField
                    fullWidth
                    label="Balance"
                    name="balance"
                    type='number'
                    value={supplier.balance?.toLocaleString()}
                    onChange={handleInputChange}
                    disabled
                />
            </Grid>
        </>
    );
};

export default FinancialDetails;
