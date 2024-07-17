import React from 'react';
import { Grid, TextField, SelectChangeEvent } from '@mui/material';
import MultipleSelectCheckmarks from '../../../select/MultipleSelectCheckmarks'; // Ensure you have this import
import shippingMethods from '../../../select/shippingMethods';
import TimeZone from '../../../dropDowns/TimeZone';
import { Supplier } from '../../../../models/supplier';
import { Control, Controller } from 'react-hook-form';
import ImageUpload from '../../../inputs/ImageUpload';

interface AdditionalDetailsProps {

    xs: number;
    md?: number;
    flag?:boolean;
    disabled?:boolean;
    control: Control<Supplier>;
    setValue: (name: keyof Supplier, value: any) => void; // Update type to keyof Supplier

}

const AdditionalDetails: React.FC<AdditionalDetailsProps> = ({
    xs,
    md,
    flag,
    disabled,
    control,
    setValue
}) => {

 

    return (
        <>
            <Grid item xs={xs} md={md}>
            <Controller
                    name="businessType"

                    control={control}
                    render={({ field, fieldState: { error } }) => (
                <TextField
                {...field}
                error={!!error}
                helperText={error?.message}
                    fullWidth
                    label="Business Type"
                    disabled={disabled}

                />
                    )}
                    />
            </Grid>
            <Grid item xs={xs} md={md}>
            <Controller
                    name="yearEstablished"

                    control={control}
                    render={({ field, fieldState: { error } }) => (
                <TextField
                {...field}
                value={field.value === null ? '' : field.value}
                onChange={(e) => {
                    const value = e.target.value === '' ? null : Number(e.target.value);
                    field.onChange(value);
                }}
                error={!!error}
                helperText={error?.message}
                    fullWidth
                    label="Year Established"
                    
                  
                   
                    disabled={disabled}

                />
                    )}
                    />
            </Grid>
            {flag! &&(
                  <ImageUpload
                  control={control}
                  name="profileImage"
                  required={false}
                  disabled={false}
                  setValue={setValue}
                
                  xs={6}

              />
)}
            <Grid item xs={xs} md={md}>
            <Controller
 name="shippingMethods"
 control={control}
            render={({ field }) => (

            <MultipleSelectCheckmarks
                            label="Shipping Methods"
                            value={field.value}
                            data={shippingMethods}
                            onChange={(e: SelectChangeEvent<string[]>) => field.onChange(e.target.value)}
                            disabled={disabled}
                        />
            )}
            />
            </Grid>
            <Grid item xs={xs} md={md}>
            <Controller
                    name="faxNumber"

                    control={control}
                    render={({ field, fieldState: { error } }) => (
                <TextField
                {...field}
                error={!!error}
                helperText={error?.message}
                    fullWidth
                    label="Fax Number"
                    disabled={disabled}

                />
                    )}
                    />
                  
            </Grid>
            <Grid item xs={xs} md={md}>
            <Controller
                    name="timeZone"
                    control={control}
                    render={({ field }) => (
                        <TimeZone
                            label='Time Zone'
                            value={field.value}
                            onChange={(newValue: string) => field.onChange(newValue)}
                            disabled={disabled}
                        />
                    )}
                />
            </Grid>
            {/* <Grid item xs={xs} md={md}>
                <TextField
                    fullWidth
                    label="Bank Name"
                    name="bankName"
                    value={supplier.bankName}
                    onChange={handleInputChange}
                    disabled={disabled}

                />
            </Grid>
            <Grid item xs={xs} md={md}>
                <TextField
                    fullWidth
                    label="Bank Account Number"
                    name="bankAccountNumber"
                    value={supplier.bankAccountNumber}
                    onChange={handleInputChange}
                    disabled={disabled}

                />
            </Grid> */}
        </>
    );
};

export default AdditionalDetails;
