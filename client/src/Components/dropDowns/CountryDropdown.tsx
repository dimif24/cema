import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Controller, Control } from 'react-hook-form';
import { countries } from '../../Helpers/countries';
import { Supplier } from '../../models/supplier';

interface CountryDropdownProps {
    control: Control<Supplier> | undefined;
    required?: boolean;
    label: string;
    flag: 'country' | 'phoneNumber';
    disabled?: boolean;


}

interface CountryDropdownOption {
    label: string;
    code: string;
    phone: string;
    disabled?: boolean;
}

const CountryDropdown = ({ control, required = false, label, flag, disabled }: CountryDropdownProps) => {
    const handleChange = (_event: React.SyntheticEvent, newValue: CountryDropdownOption | null) => {
        console.log(typeof (newValue?.phone));
        return newValue ? (flag === 'phoneNumber' ? newValue.phone : newValue.label) : '';
    };

    const getOptionSelected = (option: CountryDropdownOption, value: string) => {
        return flag === 'phoneNumber' ? option.phone === value : option.label === value;
    };

    return (
        <Controller
            name={flag}
            control={control}
           
            rules={{ required: required ? `${label} is required` : false }}
            render={({ field, fieldState: { error } }) => (
                <Autocomplete
                    fullWidth
                    id="country-select-demo"
                    options={countries}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option) => (
                        <Box component="li" key={option.code} sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            <img
                                loading="lazy"
                                width="20"
                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                alt=""
                            />
                            {option.label} ({option.code}) {flag === 'phoneNumber' && `+${option.phone}`}
                        </Box>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label={label}
                            error={!!error}
                            helperText={error?.message}
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                            disabled={disabled}
                        />
                    )}
                    value={countries.find(option => getOptionSelected(option, field.value)) || null}
                    onChange={(_event, newValue) => field.onChange(handleChange(_event, newValue))}
                    disabled={disabled}
                />
            )}
        />
    );
};

export default CountryDropdown;
