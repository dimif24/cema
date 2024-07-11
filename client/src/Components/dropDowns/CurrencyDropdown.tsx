import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import currencyCodes from 'currency-codes';

interface CurrencyOption {
    code: string;
    name: string;
    
}

interface CurrencyDropdownProps {
    value: string;
    onChange: (newValue: string) => void;
    required?: boolean;
    disabled?:boolean;

}

const CurrencyDropdown = ({ value, onChange, required,disabled }: CurrencyDropdownProps) => {
    const allCurrencies: CurrencyOption[] = currencyCodes.codes().map(code => {
        const currency = currencyCodes.code(code);
        return {
            code: currency?.code || '',
            name: currency?.currency || '',
        };
    });

    // Ensure USD and KWD appear first
    const prioritizedCurrencies: CurrencyOption[] = [
        { code: 'USD', name: 'US Dollar' },
        { code: 'KWD', name: 'Kuwaiti Dinar' },
        { code: 'EUR', name: 'Euro' },
        ...allCurrencies.filter(currency => currency.code !== 'USD' && currency.code !== 'KWD' && currency.code !== 'EUR')
    ];

    const handleChange = (_event: React.SyntheticEvent, newValue: CurrencyOption | null) => {
        onChange(newValue ? newValue.code : '');
    };

    return (
        <Autocomplete
            fullWidth
            options={prioritizedCurrencies}
            getOptionLabel={(option) => `${option.code} - ${option.name}`}
            renderInput={(params) => <TextField {...params} label="Currency" required={required} />}
            value={prioritizedCurrencies.find(option => option.code === value) || null}
            onChange={handleChange}
            disabled={disabled}

        />
    );
};

export default CurrencyDropdown;
