import React from 'react';
import { Grid, TextField } from '@mui/material';
//import { useAppDispatch } from '../../../../app/store/configureStore';
//import { updateSupplierField } from './../supplierSlice';
import { Supplier } from '../../../../models/supplier';
import { Control, Controller } from 'react-hook-form';

interface FinancialDetailsProps {
    xs: number;
    disabled?: boolean;
    flag?: boolean;
    control?: Control<Supplier>;

}

const FinancialDetails: React.FC<FinancialDetailsProps> = ({ xs, disabled, flag, control }) => {
    //const dispatch = useAppDispatch();
    return (
        <>
            <Grid item xs={xs}>
                <Controller
                    name="db"


                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <TextField
                            {...field}
                            error={!!error}
                            helperText={error?.message}

                            fullWidth
                            label="DB"

                            type='number'
                            disabled={disabled}
                        />
                    )}
                />
            </Grid>
            <Grid item xs={xs}>
                <Controller
                    name="cr"


                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <TextField
                            {...field}
                            error={!!error}
                            helperText={error?.message}
                            fullWidth
                            label="CR"
                            type='number'

                            disabled={disabled}

                        />
                    )}
                />
            </Grid>
            {flag! && (
                <Grid item xs={xs}>
                    <Controller
                        name="balance"


                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                error={!!error}
                                helperText={error?.message}
                                fullWidth
                                label="Balance"

                                type='number'


                                disabled
                            />
                        )}
                    />

                </Grid>
            )}
        </>
    );
};

export default FinancialDetails;
