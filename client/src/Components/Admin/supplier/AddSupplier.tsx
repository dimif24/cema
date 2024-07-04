import React, { useEffect } from 'react';
//import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { TextField, Button, Container, Grid, Typography, SelectChangeEvent } from '@mui/material';
import { updateSupplierField, resetSupplier, addContactPerson, updateContactPerson, removeContactPerson } from '../supplier/supplierSlice';
import { useAppDispatch, useAppSelector } from '../../../app/store/configureStore';
import CurrencyDropdown from '../../dropDowns/CurrencyDropdown';
import CountryDropdown from '../../dropDowns/CountryDropdown';
import PhoneInputDropdown from '../../dropDowns/PhoneInputDropdown';
import EmailInput from '../../inputs/EmailInput';
import ContactPersonForm from '../supplier/ContactPersonForm';
import { ContactPerson } from '../../../models/contactPerson';
import MultipleSelectCheckmarks from '../../select/MultipleSelectCheckmarks'; // Make sure to import this if needed
import shippingMethods from '../../select/shippingMethods'
import useCustomSnackbar from "../../hooks/snackbar/useCustomSnackbar";
import { addSupplier } from '../../api/AdminApi';

const AddSupplier = () => {
    const dispatch = useAppDispatch();
    const supplier = useAppSelector(state => state.AddSupplier.supplier);
    const [showAdditionalDetails, setShowAdditionalDetails] = React.useState(false);
    const { openSnackbar, SnackbarComponent } = useCustomSnackbar();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
     
        dispatch(updateSupplierField({ name, value }));
    };
    const handleShippingMethodsChange = (e: SelectChangeEvent<string[]>) => {
        dispatch(updateSupplierField({ name: 'shippingMethods', value: e.target.value  }));
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await addSupplier(supplier);

        if (result.success) {
            openSnackbar('success', 'Supplier Added Successfully');
            dispatch(resetSupplier());
        } else {
            openSnackbar('error', result.message);
        }
    };

    useEffect(() => {
        const balance = (supplier.cr || 0) - (supplier.db || 0);
        dispatch(updateSupplierField({ name: 'balance', value: balance }));
    }, [supplier.cr, supplier.db, dispatch]);
    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Add New Supplier
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={supplier.name}
                            onChange={handleInputChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
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
                    <Grid item xs={6}>
                        <CountryDropdown
                            label="Choose a country"
                            value={supplier.country}
                            onChange={(value: string) => dispatch(updateSupplierField({ name: 'country', value }))}
                            flag='country'
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="City"
                            name="city"
                            value={supplier.city}
                            onChange={handleInputChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>

                        <EmailInput value={supplier.email!} onChange={handleInputChange} required={true}></EmailInput>
                    </Grid>
                    <Grid item xs={6}>

                        <PhoneInputDropdown
                            value={supplier.phoneNumber}
                            required
                            onChange={(value: string) => dispatch(updateSupplierField({ name: 'phoneNumber', value }))}
                        >

                        </PhoneInputDropdown>

                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Website"
                            name="website"
                            value={supplier.website}
                            onChange={handleInputChange}

                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CurrencyDropdown
                            value={supplier.currency!}
                            onChange={(value: string) => dispatch(updateSupplierField({ name: 'currency', value }))}
                            required
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            fullWidth
                            label="DB"
                            name="db"
                            type='number'
                            value={supplier.db}
                            onChange={handleInputChange}

                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            fullWidth
                            label="CR"
                            name="cr"
                            type='number'

                            value={supplier.cr}
                            onChange={handleInputChange}

                        />
                    </Grid>
                    <Grid item xs={4}>
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
                    <Grid item xs={12}>
                        <Button variant="outlined" onClick={() => setShowAdditionalDetails(!showAdditionalDetails)}>
                            {showAdditionalDetails ? "Hide Additional Details" : "Show Additional Details"}
                        </Button>
                    </Grid>
                    {showAdditionalDetails && (
<>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="businessType"
                            name="businessType"
                            value={supplier.businessType}
                            onChange={handleInputChange}
                            
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="yearEstablished"
                            name="yearEstablished"
                            value={supplier.yearEstablished}
                            onChange={handleInputChange}
                            
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="profileImage"
                            name="profileImage"
                            value={supplier.profileImage}
                            onChange={handleInputChange}
                            
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <MultipleSelectCheckmarks label={"Shipping Methods"} value={supplier.shippingMethods!}    data={shippingMethods}                 onChange={handleShippingMethodsChange}
                        ></MultipleSelectCheckmarks>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="faxNumber"
                            name="faxNumber"
                            value={supplier.faxNumber}
                            onChange={handleInputChange}
                            
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="timeZone"
                            name="timeZone"
                            value={supplier.timeZone}
                            onChange={handleInputChange}
                            
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="bankName"
                            name="bankName"
                            value={supplier.bankName}
                            onChange={handleInputChange}
                            
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="bankAccountNumber"
                            name="bankAccountNumber"
                            value={supplier.bankAccountNumber}
                            onChange={handleInputChange}
                            
                        />
                    </Grid>
                    </>
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
    );
}
export default AddSupplier;
