import 'react-international-phone/style.css';
import { PhoneNumberUtil } from 'google-libphonenumber';

import {
    InputAdornment,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import {
    CountryIso2,
    defaultCountries,
    FlagImage,
    parseCountry,
    usePhoneInput,
} from 'react-international-phone';
import { Control, Controller, useFormContext } from 'react-hook-form';

interface PhoneInputDropdownProps {
    required?: boolean;
    disabled?:boolean;
    control: Control<any> | undefined ;
    name:string;
}
const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone: string) => {
    try {
        return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error) {
        return false;
    }
};

const PhoneInputDropdown = ({  required = false,disabled,name,control }: PhoneInputDropdownProps) => {
    const { watch } = useFormContext<any>();
const value = watch(name);
    const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
        usePhoneInput({
            defaultCountry: 'kw',
           value,
            countries: defaultCountries,
    
        });

    return (
        <Controller
        name={name}
        control={control}
        rules={{ required: required ? `Phone is required` : false,                
        validate: (value) => isPhoneValid(value) || 'Invalid phone number'
        }}

        render={({ field, fieldState: { error: error } }) => {
           

            return (
                <TextField
                    fullWidth
                    variant="outlined"
                    label={"Phone Number"}
                    {...field}
                    error={!!error}
                    helperText={error?.message}
                    color="primary"
                    placeholder="Phone number"
                    value={inputValue}
                    onChange={(e) => {
                        handlePhoneValueChange(e);
                        field.onChange(e);
                    }}
                    type="tel"
                    inputRef={(e) => {
                        inputRef.current = e;
                        field.ref(e);
                    }}
            InputProps={{
                startAdornment: (
                    <InputAdornment
                        position="start"
                        style={{ marginRight: '2px', marginLeft: '-8px' }}
                    >
                        <Select
                            MenuProps={{
                                style: {
                                    height: '300px',
                                    width: '360px',
                                    top: '10px',
                                    left: '-34px',
                                },
                                transformOrigin: {
                                    vertical: 'top',
                                    horizontal: 'left',
                                },
                            }}
                            sx={{
                                width: 'max-content',
                                // Remove default outline (display only on focus)
                                fieldset: {
                                    display: 'none',
                                },
                                '&.Mui-focused:has(div[aria-expanded="false"])': {
                                    fieldset: {
                                        display: 'block',
                                    },
                                },
                                // Update default spacing
                                '.MuiSelect-select': {
                                    padding: '8px',
                                    paddingRight: '24px !important',
                                },
                                svg: {
                                    right: 0,
                                },
                            }}
                            value={country.iso2}
                            onChange={(e) => setCountry(e.target.value as CountryIso2)}
                            renderValue={(value) => (
                                <FlagImage iso2={value} style={{ display: 'flex' }} />
                            )}
                            disabled={disabled}
                        >
                            {defaultCountries.map((c) => {
                                const country = parseCountry(c);
                                return (
                                    <MenuItem key={country.iso2} value={country.iso2}>
                                        <FlagImage
                                            iso2={country.iso2}
                                            style={{ marginRight: '8px' }}
                                        />
                                        <Typography marginRight="8px">{country.name}</Typography>
                                        <Typography color="gray">+{country.dialCode}</Typography>
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </InputAdornment>
                ),
            }}
            disabled={disabled}

            />
        );
    }}
/>
);
}
export default PhoneInputDropdown;
