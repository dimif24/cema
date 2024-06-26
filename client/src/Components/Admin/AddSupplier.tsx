import { Supplier, emptySupplier } from "../../models/supplier";
import { TextField, Button, Container, Grid, Typography } from '@mui/material';
import { useState } from "react";

// interface AddSupplierComponentProps {
//     onAddSupplier: (supplier: Supplier) => void;
// }
const AddSupplier = () => {
    const [supplier, setSupplier] = useState<Supplier>(emptySupplier);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setSupplier({ ...supplier, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Reset form (optional)
        setSupplier(emptySupplier);
    };
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
                        <TextField
                            fullWidth
                            label="Country"
                            name="country"
                            value={supplier.country}
                            onChange={handleInputChange}
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
                        <TextField
                            fullWidth
                            label="Phone Number"
                            name="phoneNumber"
                            value={supplier.phoneNumber}
                            onChange={handleInputChange}
                            required
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
