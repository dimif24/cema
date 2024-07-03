
import { TextField } from '@mui/material';
import { useState  } from 'react';

interface EmailInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
}




const EmailInput = ({ value, onChange, required = false }: EmailInputProps) => {
 
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
        label={emailError||"Email"}
        name="email"
        type="email"
        value={value}
        onChange={handleEmailInputChange}
        required={required}
        error={!!emailError}
    />
    );
};
export default EmailInput;
