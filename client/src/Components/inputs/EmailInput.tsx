
import { InputAdornment, TextField } from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { Control, Controller } from 'react-hook-form';


interface EmailInputProps {
  
    required?: boolean;
    disabled?:boolean;
    control: Control<any> | undefined ;
    name:string;

}




const EmailInput = ({ required = false, disabled,control,name }: EmailInputProps) => {





    return (
        <Controller
        name={name}
        control={control}
      
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
