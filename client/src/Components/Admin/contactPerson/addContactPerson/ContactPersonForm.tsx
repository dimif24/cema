import { TextField, Grid, Box, Divider } from '@mui/material';
import PhoneInputDropdown from '../../../dropDowns/PhoneInputDropdown';
import EmailInput from '../../../inputs/EmailInput';
import { Control, Controller } from 'react-hook-form';
import { ContactPersonDto } from '../../../../models/contactPerson';
import SupplierDropDown from '../../../dropDowns/SuppliersDropDown';
import { useEffect, useState } from 'react';
import { fetchSuppliers } from '../../../api/admin';
import { Supplier } from '../../../../models/supplier';

interface ContactPersonProps {
    control: Control<ContactPersonDto>;

}

const ContactPersonForm = ({ control }: ContactPersonProps) => {
    const [suppliers, setSuppliers] = useState<Supplier[]>([]);
    const [error, setError] = useState<string | null>(null);
    useEffect(()=>{
        const getSuppliers = async () => {
            try {
                const data = await fetchSuppliers();
                setSuppliers(data);
            } catch (error) {
                setError('Failed to fetch suppliers');
            }
        };

        getSuppliers();
    },[])
    if (error) {
        return <Box>{error}</Box>;
    }
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
                <Grid item xs={12}>
     
                        
                        <SupplierDropDown
                            label='Supplier'
                            name='supplierId'
                            data={suppliers}
                            control={control}
                            required={true}
                        />
                 
            
            </Grid>
            </Grid>
            <Divider />
        </Box>
    );
};

export default ContactPersonForm;
