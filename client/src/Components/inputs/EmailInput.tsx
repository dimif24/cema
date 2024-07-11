
import { InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

interface EmailInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    disabled?:boolean;
}




const EmailInput = ({ value, onChange, required = false, disabled }: EmailInputProps) => {

    const [emailError, setEmailError] = useState<string | null>(null);

    const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        onChange(e);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailError(emailRegex.test(value) ? null : `Invalid ${name} Format`);
    };


    return (
        <TextField
            fullWidth
            label={emailError || "Email"}
            name="email"
            type="email"
            value={value}
            onChange={handleEmailInputChange}
            required={required}
            error={!!emailError}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <EmailRoundedIcon />
                    </InputAdornment>
                ),
            }}
            disabled={disabled}

        />
    );
};
export default EmailInput;
