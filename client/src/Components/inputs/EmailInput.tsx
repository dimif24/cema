
import { InputAdornment, TextField } from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { Control, Controller } from 'react-hook-form';
import { Supplier } from '../../models/supplier';

interface EmailInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    disabled?:boolean;
    control?:Control<Supplier>;

}




const EmailInput = ({ value, onChange, required = false, disabled,control }: EmailInputProps) => {





    return (
        <Controller
        name="email"
        control={control}
        defaultValue={value}
        rules={{
            required: required ? 'Email is required' : false,
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email format'
            }
        }}
        render={({ field, fieldState: { error } }) => (
            <TextField
                {...field}
                fullWidth
                label="Email"
                error={!!error}
                helperText={error?.message}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <EmailRoundedIcon />
                        </InputAdornment>
                    ),
                }}
                disabled={disabled}
            />
        )}
    />
    );
};
export default EmailInput;
