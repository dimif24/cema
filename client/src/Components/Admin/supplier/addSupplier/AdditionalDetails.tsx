import React from 'react';
import { Grid, TextField, SelectChangeEvent } from '@mui/material';
import { updateSupplierField } from './../supplierSlice';
import { useAppDispatch } from '../../../../app/store/configureStore';
import MultipleSelectCheckmarks from '../../../select/MultipleSelectCheckmarks'; // Ensure you have this import
import shippingMethods from '../../../select/shippingMethods';
import TimeZone from '../../../dropDowns/TimeZone';
import { Supplier } from '../../../../models/supplier';

interface AdditionalDetailsProps {
    supplier: Supplier; // Replace with actual supplier type
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    xs: number;
    md?: number;
}

const AdditionalDetails: React.FC<AdditionalDetailsProps> = ({
    supplier,
    handleInputChange,
    handleImageUpload,
    xs,
    md,
}) => {
    const dispatch = useAppDispatch();

    const handleShippingMethodsChange = (e: SelectChangeEvent<string[]>) => {
        dispatch(updateSupplierField({ name: 'shippingMethods', value: e.target.value }));
    };

    return (
        <>
            <Grid item xs={xs} md={md}>
                <TextField
                    fullWidth
                    label="Business Type"
                    name="businessType"
                    value={supplier.businessType}
                    onChange={handleInputChange}
                />
            </Grid>
            <Grid item xs={xs} md={md}>
                <TextField
                    fullWidth
                    label="Year Established"
                    name="yearEstablished"
                    value={supplier.yearEstablished}
                    onChange={handleInputChange}
                />
            </Grid>
            <Grid item xs={xs-1}>
                <TextField
                    fullWidth
                    name="profileImage"
                    type="file"
                    onChange={handleImageUpload}
                    inputProps={{ accept: 'image/*' }}
                />
            </Grid>
            <Grid item xs={1}>
                {supplier.profileImage && (
                    <img
                        src={supplier.profileImage}
                        alt="Profile Preview"
                        style={{
                            width: '100%', height: '100%', maxHeight: '56px',
                            objectFit: 'contain'
                        }}
                    />
                )}
            </Grid>
            <Grid item xs={xs} md={md}>
                <MultipleSelectCheckmarks
                    label="Shipping Methods"
                    value={supplier.shippingMethods}
                    data={shippingMethods}
                    onChange={handleShippingMethodsChange}
                />
            </Grid>
            <Grid item xs={xs} md={md}>
                <TextField
                    fullWidth
                    label="Fax Number"
                    name="faxNumber"
                    value={supplier.faxNumber}
                    onChange={handleInputChange}
                />
            </Grid>
            <Grid item xs={xs} md={md}>
                <TimeZone
                    label='Time Zone'
                    value={supplier.timeZone}
                    onChange={(value: string) => dispatch(updateSupplierField({ name: 'timeZone', value }))}
                />
            </Grid>
            <Grid item xs={xs} md={md}>
                <TextField
                    fullWidth
                    label="Bank Name"
                    name="bankName"
                    value={supplier.bankName}
                    onChange={handleInputChange}
                />
            </Grid>
            <Grid item xs={xs} md={md}>
                <TextField
                    fullWidth
                    label="Bank Account Number"
                    name="bankAccountNumber"
                    value={supplier.bankAccountNumber}
                    onChange={handleInputChange}
                />
            </Grid>
        </>
    );
};

export default AdditionalDetails;
