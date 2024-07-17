import React from 'react';
import { Grid, TextField } from '@mui/material';
import { useAppDispatch } from '../../../../app/store/configureStore';
import CountryDropdown from '../../../dropDowns/CountryDropdown';
import PhoneInputDropdown from '../../../dropDowns/PhoneInputDropdown';
import EmailInput from '../../../inputs/EmailInput';
import CurrencyDropdown from '../../../dropDowns/CurrencyDropdown';
import { updateSupplierField } from './../supplierSlice';
import { Supplier } from '../../../../models/supplier';
import { Control, Controller } from 'react-hook-form';


interface SupplierDetailsProps {
    supplier: Supplier; // Replace with actual supplier type
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    xs: number;
    md?: number;
    disabled?: boolean;
    control?: Control<Supplier>;

}

const SupplierDetails: React.FC<SupplierDetailsProps> = ({ supplier, handleInputChange, xs, md, disabled, control }) => {
    const dispatch = useAppDispatch();


    return (
        <>
            <Grid item xs={xs} md={md}>
                <Controller
                    name="name"
                    defaultValue={supplier.name}

                    control={control}
                    rules={{ required: 'Name is required' }}
                    render={({ field, fieldState: { error } }) => (
                        <TextField
                            {...field}
                            error={!!error}
                            helperText={error?.message}

                            fullWidth
                            label="Name"
                            name="name"



                            disabled={disabled}
                        />
                    )}
                />
            </Grid>
            <Grid item xs={xs} md={md}>
                <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    value={supplier.description}
                    onChange={handleInputChange}
                    multiline
                    rows={1}
                    disabled={disabled}

                />
            </Grid>
            <Grid item xs={xs} md={md}>
                <CountryDropdown
                    label="Choose a country"
                    value={supplier.country}
                    //onChange={(value: string) => dispatch(updateSupplierField({ name: 'country', value }))}
                    flag='country'
                    required
                    disabled={disabled}
                    control={control}

                />
            </Grid>
            <Grid item xs={xs} md={md}>
            <Controller
                    name="city"
                    defaultValue={supplier.city}

                    control={control}
                    rules={{ required: 'City is required' }}
                    render={({ field, fieldState: { error } }) => (
                <TextField
                {...field}
                error={!!error}
                helperText={error?.message}
                    fullWidth
                    label="City"
                    name="city"
                 
                    disabled={disabled}

                />
                    )}
                />
            </Grid>
            <Grid item xs={xs} md={md}>
                <EmailInput
                    value={supplier.email!}
                    onChange={handleInputChange}
                    required
                    disabled={disabled}
                    control={control}


                />
            </Grid>
            <Grid item xs={xs} md={md}>
                <PhoneInputDropdown
                    value={supplier.phoneNumber}
                    required
                    onChange={(value: string) => dispatch(updateSupplierField({ name: 'phoneNumber', value }))}
                    disabled={disabled}

                />
            </Grid>
            <Grid item xs={xs} md={md}>
                <TextField
                    fullWidth
                    label="Website"
                    name="website"
                    value={supplier.website}
                    onChange={handleInputChange}
                    disabled={disabled}

                />
            </Grid>
            <Grid item xs={xs} md={md}>
                <CurrencyDropdown
                    value={supplier.currency!}
                    //onChange={(value: string) => dispatch(updateSupplierField({ name: 'currency', value }))}
                    required
                    disabled={disabled}
                    control={control}

                />
            </Grid>
        </>
    );
};

export default SupplierDetails;
