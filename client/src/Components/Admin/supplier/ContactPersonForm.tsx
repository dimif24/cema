import { TextField, Grid, IconButton, Box, Divider } from '@mui/material';
import { Delete } from '@mui/icons-material';
import PhoneInputDropdown from '../../dropDowns/PhoneInputDropdown';
import EmailInput from '../../inputs/EmailInput';
import { ContactPerson } from '../../../models/contactPerson';

interface ContactPersonProps {
    contactPerson: ContactPerson;
    index: number;
    onChange: (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onDelete: (index: number) => void;
}

const ContactPersonForm = ({ contactPerson, index, onChange, onDelete }: ContactPersonProps) => {
    return (
        <Box mb={2}>

            <Grid container spacing={2} marginBottom={2}  >
                <Grid item xs={12} container justifyContent="end">
                    <IconButton onClick={() => onDelete(index)}>
                        <Delete />
                    </IconButton>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={contactPerson.name}
                        onChange={(e) => onChange(index, e)}
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        label="Position"
                        name="position"
                        value={contactPerson.position}
                        onChange={(e) => onChange(index, e)}
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <EmailInput
                        value={contactPerson.email}
                        onChange={(e) => onChange(index, e)}
                        required={true}
                    />
                </Grid>
                <Grid item xs={6}>
                    <PhoneInputDropdown
                        value={contactPerson.phoneNumber}
                        required={false}
                        onChange={(value: string) => onChange(index, { target: { name: 'phoneNumber', value } } as React.ChangeEvent<HTMLInputElement>)}
                    />
                </Grid>

            </Grid>
            <Divider />
        </Box>
    );
};

export default ContactPersonForm;
