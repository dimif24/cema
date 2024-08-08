import { Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import ContactPersonCard from './ContactPersonCard';
import { useFormContext } from 'react-hook-form';
import { Supplier } from '../../../../../models/supplier';
import { useState } from 'react';

const ContactInfo = () => {
    const { watch,setValue } = useFormContext<Supplier>();
    const [contactPersons, setContactPersons] = useState(watch('contactPersons'));
    const handleDelete = (id: number) => {
        const updatedContactPersons = contactPersons.filter(cp => cp.id !== id);
        setContactPersons(updatedContactPersons);
        setValue('contactPersons', updatedContactPersons);
    };

    return (
        <Grid
        container
        spacing={4}
        sx={{
            maxWidth: '100%',
            mx: 'auto',
            px: { xs: 2, md: 6 },
            py: { xs: 2, md: 3 },
        }}
        >
            <Grid item xs={12}>
                <Card >
                    <CardContent>
                        <Box sx={{ mb: 1 }}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h6">ContactPerson</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Divider />
                        <Box sx={{ mt: 2, maxHeight: 275, overflow: 'auto',height:275 }}>
                        <Grid container spacing={2}>
                        {contactPersons.map((contactPerson) => (
                            <ContactPersonCard 
                            key={contactPerson.id}
                            contactPerson={contactPerson}
                            onDelete={handleDelete}
            />
                        ))}
                        </Grid>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
);
}
export default ContactInfo;