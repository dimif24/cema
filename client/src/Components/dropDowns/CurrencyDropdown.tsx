import { Autocomplete, TextField } from '@mui/material';
import currencyCodes from 'currency-codes';
import { Supplier } from '../../models/supplier';
import { Control, Controller } from 'react-hook-form';

interface CurrencyOption {
    code: string;
    name: string;
    
}

interface CurrencyDropdownProps {
    value: string;
    //onChange: (newValue: string) => void;
    required?: boolean;
    disabled?:boolean;
    control: Control<Supplier> | undefined;


}

const CurrencyDropdown = ({ value,
    //  onChange,
      required,disabled,control }: CurrencyDropdownProps) => {
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

    // const handleChange = (_event: React.SyntheticEvent, newValue: CurrencyOption | null) => {
    //     onChange(newValue ? newValue.code : '');
    // };

    return (
        <Controller
        name={"currency"}
        control={control}
        defaultValue={value}
        rules={{ required: required ? 'Currency is required' : false }}
        render={({ field, fieldState: { error } }) => (
            <Autocomplete
                fullWidth
                options={prioritizedCurrencies}
                getOptionLabel={(option) => `${option.code} - ${option.name}`}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Currency"
                        error={!!error}
                        helperText={error ? error.message : ''}
                        disabled={disabled}
                    />
                )}
                value={prioritizedCurrencies.find(option => option.code === field.value) || null}
                onChange={(_, newValue) => field.onChange(newValue ? newValue.code : '')}
                disabled={disabled}
            />
        )}
    />
    );
};

export default CurrencyDropdown;
