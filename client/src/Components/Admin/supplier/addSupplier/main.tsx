import React, { useEffect } from 'react';
//import { useForm, Controller, useFieldArray } from 'react-hook-form';
import {  Button, Container, Grid, Typography } from '@mui/material';
import { updateSupplierField, resetSupplier, addContactPerson, updateContactPerson, removeContactPerson } from './../supplierSlice';
import { useAppDispatch, useAppSelector } from '../../../../app/store/configureStore';

import ContactPersonForm from './../ContactPersonForm';
import { ContactPerson } from '../../../../models/contactPerson';
import useCustomSnackbar from "../../../hooks/snackbar/useCustomSnackbar";
import { addSupplier } from '../../../api/admin';
import AdditionalDetails from './AdditionalDetails';
import FinancialDetails from './FinancialDetails';
import SupplierDetails from './SupplierDetails';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { emptySupplier, Supplier } from '../../../../models/supplier';

const AddSupplier = () => {
    const dispatch = useAppDispatch();
   // const { handleSubmit, control } = methods;


    const supplier = useAppSelector(state => state.AddSupplier.supplier);
    const [showAdditionalDetails, setShowAdditionalDetails] = React.useState(false);
    const { openSnackbar, SnackbarComponent } = useCustomSnackbar();

    const methods= useForm<Supplier>();
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        dispatch(updateSupplierField({ name, value }));
    };

    const handleContactPersonChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        dispatch(updateContactPerson({ index, name: name as keyof ContactPerson, value }));
    };

    const handleAddContactPerson = () => {
        dispatch(addContactPerson());
    };

    const handleDeleteContactPerson = (index: number) => {
        dispatch(removeContactPerson(index));
    };
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                const base64String = reader.result?.toString() || '';
                dispatch(updateSupplierField({ name: 'profileImage', value: base64String }));
            };
        }
    };

    const onSubmit:SubmitHandler<Supplier>
     = async (data: Supplier) => {
        console.log(data);
        const result = await addSupplier(data);

        if (result.success) {
            openSnackbar('success', 'Supplier Added Successfully');
            dispatch(resetSupplier());

            methods.reset();

        } else {
            openSnackbar('error', result.message);
        }
    };

    useEffect(() => {
        const balance = (supplier.cr || 0) - (supplier.db || 0);
        dispatch(updateSupplierField({ name: 'balance', value: balance }));
    }, [supplier.cr, supplier.db, dispatch]);
    return (
        <FormProvider {...methods}>
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Add New Supplier
            </Typography>
           

                <form
                onSubmit={methods.handleSubmit(onSubmit)}
                 >
                    <Grid container spacing={2}>

                    <SupplierDetails
                            supplier={supplier}
                            handleInputChange={handleInputChange}
                            control={methods.control}
                            xs={6}
                        />
                        {/*contains Name -> Currency dropdwos and inputs*/}
                        <FinancialDetails
                            supplier={supplier}
                            handleInputChange={handleInputChange}
                            xs={4}
                            flag={true}
                        />
                         {/*contains DB CR Balance inputs*/}
                        
                        <Grid item xs={12}>
                            <Button variant="outlined" onClick={() => setShowAdditionalDetails(!showAdditionalDetails)}>
                                {showAdditionalDetails ? "Hide Additional Details" : "Show Additional Details"}
                            </Button>
                        </Grid>
                        {showAdditionalDetails && (
                            <AdditionalDetails
                            supplier={supplier}
                            handleInputChange={handleInputChange}
                            handleImageUpload={handleImageUpload}
                            xs={6} // Replace with your desired value
                            flag={true}

                        />
                        )}
                        {/* Add Contact Person Section */}
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom>
                                Contact Persons
                            </Typography>
                            {supplier.contactPersons.map((contactPerson, index) => (
                                <ContactPersonForm
                                    key={index}
                                    index={index}
                                    contactPerson={contactPerson}
                                    onChange={handleContactPersonChange}
                                    onDelete={handleDeleteContactPerson}
                                />
                            ))}
                            <Button variant="outlined" color="primary" onClick={handleAddContactPerson}>
                                Add Contact Person
                            </Button>
                        </Grid>
                        {/* Add more input fields as needed */}
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary">
                                Add Supplier
                            </Button>

                        </Grid>
                        {SnackbarComponent}

                    </Grid>
                </form>
           

        </Container>
       </FormProvider>
    );
}
export default AddSupplier;
