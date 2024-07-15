import React from 'react';
import { Grid, TextField } from '@mui/material';
//import { useAppDispatch } from '../../../../app/store/configureStore';
//import { updateSupplierField } from './../supplierSlice';
import { Supplier } from '../../../../models/supplier';

interface FinancialDetailsProps {
    supplier: Supplier; // Replace with actual supplier type
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    xs: number;
    disabled?:boolean;
    flag?:boolean;
}

const FinancialDetails: React.FC<FinancialDetailsProps> = ({ supplier, handleInputChange, xs,disabled,flag }) => {
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
                    disabled={disabled}
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
                    disabled={disabled}

                />
            </Grid>
            {flag! && (
            <Grid item xs={xs}>
                <TextField
                    fullWidth
                    label="Balance"
                    name="balance"
                    type='number'
                    value={supplier.balance}
                    onChange={handleInputChange}
                    disabled
                />
            </Grid>
            )}
        </>
    );
};

export default FinancialDetails;
