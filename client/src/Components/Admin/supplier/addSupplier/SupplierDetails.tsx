import React from 'react';
import { Grid, TextField } from '@mui/material';
import { useAppDispatch } from '../../../../app/store/configureStore';
import CountryDropdown from '../../../dropDowns/CountryDropdown';
import PhoneInputDropdown from '../../../dropDowns/PhoneInputDropdown';
import EmailInput from '../../../inputs/EmailInput';
import CurrencyDropdown from '../../../dropDowns/CurrencyDropdown';
import { updateSupplierField } from './../supplierSlice';

interface SupplierDetailsProps {
    supplier: any; // Replace with actual supplier type
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    xs: number;
}

const SupplierDetails: React.FC<SupplierDetailsProps> = ({ supplier, handleInputChange, xs }) => {
    const dispatch = useAppDispatch();

    return (
        <>
            <Grid item xs={xs}>
                <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={supplier.name}
                    onChange={handleInputChange}
                    required
                />
            </Grid>
            <Grid item xs={xs}>
                <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    value={supplier.description}
                    onChange={handleInputChange}
                    multiline
                    rows={1}
                />
            </Grid>
            <Grid item xs={xs}>
                <CountryDropdown
                    label="Choose a country"
                    value={supplier.country}
                    onChange={(value: string) => dispatch(updateSupplierField({ name: 'country', value }))}
                    flag='country'
                    required
                />
            </Grid>
            <Grid item xs={xs}>
                <TextField
                    fullWidth
                    label="City"
                    name="city"
                    value={supplier.city}
                    onChange={handleInputChange}
                    required
                />
            </Grid>
            <Grid item xs={xs}>
                <EmailInput
                    value={supplier.email!}
                    onChange={handleInputChange}
                    required
                />
            </Grid>
            <Grid item xs={xs}>
                <PhoneInputDropdown
                    value={supplier.phoneNumber}
                    required
                    onChange={(value: string) => dispatch(updateSupplierField({ name: 'phoneNumber', value }))}
                />
            </Grid>
            <Grid item xs={xs}>
                <TextField
                    fullWidth
                    label="Website"
                    name="website"
                    value={supplier.website}
                    onChange={handleInputChange}
                />
            </Grid>
            <Grid item xs={xs}>
                <CurrencyDropdown
                    value={supplier.currency!}
                    onChange={(value: string) => dispatch(updateSupplierField({ name: 'currency', value }))}
                    required
                />
            </Grid>
        </>
    );
};

export default SupplierDetails;
