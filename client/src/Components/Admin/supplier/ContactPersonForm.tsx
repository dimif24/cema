import { TextField, Grid, IconButton, Box, Divider } from '@mui/material';
import { Delete } from '@mui/icons-material';
import PhoneInputDropdown from '../../dropDowns/PhoneInputDropdown';
import EmailInput from '../../inputs/EmailInput';
import { Control, Controller } from 'react-hook-form';
import { Supplier } from '../../../models/supplier';

interface ContactPersonProps {
    index: number;

    onDelete: (index: number) => void;
    control?: Control<Supplier>;

}

const ContactPersonForm = ({  index, onDelete,control }: ContactPersonProps) => {
    return (
        <Box mb={2}>

            <Grid container spacing={2} marginBottom={2}  >
                <Grid item xs={12} container justifyContent="end">
                    <IconButton onClick={() => onDelete(index)}>
                        <Delete />
                    </IconButton>
                </Grid>
                <Grid item xs={6}>
                <Controller
                        name={`contactPersons.${index}.name`}
                        control={control}
                        rules={{ required: 'Name is required' }}

                        render={({ field }) => (
                            <TextField
                                {...field}
                                fullWidth
                                label="Name"
                                
                            />
                        )}
                    />
               
                </Grid>
                <Grid item xs={6}>
                <Controller
                        name={`contactPersons.${index}.position`}
                        control={control}
                        rules={{ required: 'Position is required' }}

                        render={({ field }) => (
                            <TextField
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
                        name={`contactPersons.${index}.email`}
                        />
                </Grid>
                <Grid item xs={6}>
                    <PhoneInputDropdown
                     
                        required={false}
                        
                        name={`contactPersons.${index}.phoneNumber`}
                        control={control}
                    />
                </Grid>

            </Grid>
            <Divider />
        </Box>
    );
};

export default ContactPersonForm;
