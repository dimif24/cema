import React, { useState } from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { FormProvider, SubmitHandler, useForm, useFieldArray } from 'react-hook-form';
import { Supplier, emptySupplier } from '../../../../models/supplier';
import { ContactPerson } from '../../../../models/contactPerson';
import useCustomSnackbar from "../../../hooks/snackbar/useCustomSnackbar";
import { addSupplier } from '../../../api/admin';
import AdditionalDetails from './AdditionalDetails';
import FinancialDetails from './FinancialDetails';
import SupplierDetails from './SupplierDetails';
import ContactPersonForm from '../ContactPersonForm';

const AddSupplier = () => {
    const [showAdditionalDetails, setShowAdditionalDetails] = useState(false);
    const { openSnackbar, SnackbarComponent } = useCustomSnackbar();

    const methods = useForm<Supplier>({
        defaultValues: emptySupplier
    });

    const {control, handleSubmit, watch, setValue } = methods;

    const { fields, append, remove } = useFieldArray({
        control,
        name: "contactPersons"
    });

    // Watch for changes in CR and DB to update balance
    const cr = watch('cr');
    const db = watch('db');
    React.useEffect(() => {
        const balance = (cr || 0) - (db || 0);
        setValue('balance', balance);

    }, [cr, db, setValue]);
    React.useEffect(() => {
        const subscription = watch((value) => {
            console.log("Form Values Changed:", value);
        });
        return () => subscription.unsubscribe();
    }, [watch]);
    const onSubmit: SubmitHandler<Supplier> = async (data: Supplier) => {
        console.log(data);
        const result = await addSupplier(data);

        if (result.success) {
            openSnackbar('success', 'Supplier Added Successfully');
            methods.reset(emptySupplier);
        } else {
            openSnackbar('error', result.message);
        }
    };

    const handleAddContactPerson = () => {
        append({
            id: 0,
            name: '',
            position: '',
            phoneNumber: '',
            email: '',
            supplier: null
        } as unknown as ContactPerson);
    };

    return (
        <FormProvider {...methods}>
            <Container>
                <Typography variant="h4" component="h1" gutterBottom>
                    Add New Supplier
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <SupplierDetails  control={control} xs={6}  />
                        <FinancialDetails control={control} xs={4} flag={true} />
                        
                        <Grid item xs={12}>
                            <Button variant="outlined" onClick={() => setShowAdditionalDetails(!showAdditionalDetails)}>
                                {showAdditionalDetails ? "Hide Additional Details" : "Show Additional Details"}
                            </Button>
                        </Grid>
                        
                        {showAdditionalDetails && (
                            <AdditionalDetails setValue={setValue} control={control} xs={6} flag={true} />
                        )}

                        {/* Contact Persons Section */}
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom>
                                Contact Persons
                            </Typography>
                            {fields.map((field, index) => (
                                <ContactPersonForm
                                    key={field.id}
                                    index={index}
                                    onDelete={() => remove(index)}
                                    control={control}
                                />
                            ))}
                            <Button variant="outlined" color="primary" onClick={handleAddContactPerson}>
                                Add Contact Person
                            </Button>
                        </Grid>

                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" >
                                Add Supplier
                            </Button>
                        </Grid>
                    </Grid>
                </form>

                {SnackbarComponent}
            </Container>
        </FormProvider>
    );
}

export default AddSupplier;


