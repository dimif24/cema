import { TextField, Grid, Box, Divider } from '@mui/material';
import PhoneInputDropdown from '../../../dropDowns/PhoneInputDropdown';
import EmailInput from '../../../inputs/EmailInput';
import { Control, Controller } from 'react-hook-form';
import { ContactPerson } from '../../../../models/contactPerson';

interface ContactPersonProps {
    control: Control<ContactPerson>;

}

const ContactPersonForm = ({ control }: ContactPersonProps) => {
    return (
        <Box mb={2}>

            <Grid container spacing={2} marginBottom={2}  >

                <Grid item xs={6}>
                    <Controller
                        name={"name"}
                        control={control}
                        rules={{ required: 'Name is required' }}

                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                error={!!error}
                                helperText={error?.message}
                                {...field}
                                fullWidth
                                label="Name"

                            />
                        )}
                    />

                </Grid>
                <Grid item xs={6}>
                    <Controller
                        name={'position'}
                        control={control}
                        rules={{ required: 'Position is required' }}

                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                error={!!error}
                                helperText={error?.message}
                                {...field}
                                fullWidth
                                label="Position"

                            />
                        )}
                    />
                </Grid>
                <Grid item xs={6}>
                    <EmailInput

                        required={true}
                        control={control}
                        name={'email'}
                    />
                </Grid>
                <Grid item xs={6}>
                    <PhoneInputDropdown

                        required={false}

                        name={'phoneNumber'}
                        control={control}
                    />
                </Grid>

            </Grid>
            <Divider />
        </Box>
    );
};

export default ContactPersonForm;
