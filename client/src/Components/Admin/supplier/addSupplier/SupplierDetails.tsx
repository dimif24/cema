import React from 'react';
import { Grid, TextField } from '@mui/material';
import CountryDropdown from '../../../dropDowns/CountryDropdown';
import PhoneInputDropdown from '../../../dropDowns/PhoneInputDropdown';
import EmailInput from '../../../inputs/EmailInput';
import CurrencyDropdown from '../../../dropDowns/CurrencyDropdown';
import { Supplier } from '../../../../models/supplier';
import { Control, Controller } from 'react-hook-form';


interface SupplierDetailsProps {
    // supplier: Supplier; // Replace with actual supplier type
    xs: number;
    md?: number;
    disabled?: boolean;
    control?: Control<Supplier>;

}

const SupplierDetails: React.FC<SupplierDetailsProps> = ({  xs, md, disabled, control }) => {
    


    return (
        <>
            <Grid item xs={xs} md={md}>
                <Controller
                    name="name"
                 
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
            <Controller
name="description"
                  

                    control={control}
                    render={({ field, fieldState: { error } }) => (
                <TextField
                {...field}
                error={!!error}
                helperText={error?.message}
                    fullWidth
                    label="Description"
                    
                    multiline
                    rows={1}
                    disabled={disabled}

                />
                    )}
                    />
            </Grid>
            <Grid item xs={xs} md={md}>
                <CountryDropdown
                    label="Choose a country"
                    flag='country'
                    required
                    disabled={disabled}
                    control={control}

                />
            </Grid>
            <Grid item xs={xs} md={md}>
            <Controller
                    name="city"

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
                    required
                    disabled={disabled}
                    control={control}
                    name='email'


                />
            </Grid>
            <Grid item xs={xs} md={md}>
                <PhoneInputDropdown
                    required
                    
                    disabled={disabled}
                    control={control}
                    name='phoneNumber'

                />
            </Grid>
            <Grid item xs={xs} md={md}>
            <Controller
                    name="website"

                    control={control}
                    // rules={{ required: 'City is required' }}
                    render={({ field, fieldState: { error } }) => (
                <TextField
                {...field}
                error={!!error}
                helperText={error?.message}
                    fullWidth
                    label="Website"
                    disabled={disabled}

                />
                    )}
                    />
            </Grid>
            <Grid item xs={xs} md={md}>
                <CurrencyDropdown
                  
                    required
                    disabled={disabled}
                    control={control}

                />
            </Grid>
        </>
    );
};

export default SupplierDetails;
