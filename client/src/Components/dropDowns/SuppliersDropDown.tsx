import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { InputAdornment } from '@mui/material';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import { Control, Controller } from 'react-hook-form';

interface Supplier {
    label: string;
    required?: boolean;
    disabled?: boolean;
    data: { id: number; name: string; country: string }[];
    control: Control<any>;
    name: string;  // Add this line
}

const SupplierDropDown = ({ required, label, disabled, data, control, name }: Supplier) => {
    return (
        <Controller
            name={name}  // Use the name prop here
            control={control}
            rules={{ required: required ? 'Supplier is required' : false }}
            render={({ field, fieldState: { error } }) => (
                <Autocomplete
                    {...field}
                    fullWidth
                    autoHighlight
                    disablePortal
                    id={`autocomplete-${name}`}
                    options={data}
                    value={data.find(item => item.id === field.value) || null}
                    onChange={(_, newValue) => field.onChange(newValue ? newValue.id : null)}
                    getOptionLabel={(option) => `${option.id} - ${option.name} ${option.country}`}
                    renderInput={(params) => (
                        <TextField 
                            {...params} 
                            label={label}
                            required={required}
                            error={!!error}
                            helperText={error?.message}
                            InputProps={{
                                ...params.InputProps,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <BusinessRoundedIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                    disabled={disabled}
                />
            )}
        />
    );
}

export default SupplierDropDown;