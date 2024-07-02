import { TextField, Button, Container, Grid, Typography } from '@mui/material';
import { updateSupplierField, resetSupplier } from '../supplier/supplierSlice';
import { useAppDispatch, useAppSelector } from '../../../app/store/configureStore';
import { useEffect } from 'react';
import CurrencyDropdown from '../../dropDowns/CurrencyDropdown';
import CountryDropdown from '../../dropDowns/CountryDropdown';
import PhoneInputDropdown from '../../dropDowns/PhoneInputDropdown';



const AddSupplier = () => {
    const dispatch = useAppDispatch();
    const supplier = useAppSelector(state => state.AddSupplier.supplier);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        dispatch(updateSupplierField({ name, value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add submit logic here
        dispatch(resetSupplier());
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
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={supplier.name}
                            onChange={handleInputChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Description"
                            name="description"
                            value={supplier.description}
                            onChange={handleInputChange}
                            multiline
                            rows={4}
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
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            value={supplier.email}
                            onChange={handleInputChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>

                        <Container>
                            <PhoneInputDropdown value={supplier.phoneNumber} required onChange={(value: string) => dispatch(updateSupplierField({ name: 'phoneNumber', value }))}
                            ></PhoneInputDropdown>
                        </Container>

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
                            value={supplier.currency}
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
                    {/* Add more input fields as needed */}
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            Add Supplier
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}
export default AddSupplier;
