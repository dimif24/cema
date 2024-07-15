import { Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { ContactPerson } from '../../../../../models/contactPerson';
import ContactPersonCard from './ContactPersonCard';
interface ContactInfoSectionProps{
    contactPersons:ContactPerson[]
}
const ContactInfo = ({ contactPersons }: ContactInfoSectionProps) => {
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
                <ContactPersonCard contactPerson={contactPerson} />
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