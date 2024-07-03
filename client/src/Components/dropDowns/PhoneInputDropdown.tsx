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
import { useState } from 'react';

interface PhoneInputDropdownProps {
    value: string;
    onChange: (phone: string) => void;
    required?: boolean;
}
const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone: string) => {
    try {
        return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error) {
        return false;
    }
};

const PhoneInputDropdown = ({ value, onChange, required = false }: PhoneInputDropdownProps) => {
    const [error, setError] = useState<string | null>(null);

    const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
        usePhoneInput({
            defaultCountry: 'kw',
            value,
            countries: defaultCountries,
            onChange: (data) => {
                onChange(data.phone);
                setError(isPhoneValid(data.phone) ? null : 'Wrong format');

            },
            
        });

    return (
        <TextField
            fullWidth
            required={required}
            variant="outlined"
            label={error || "Phone Number"}
            error={!!error}

            color="primary"
            placeholder="Phone number"
            value={inputValue}
            onChange={handlePhoneValueChange}
            type="tel"
            inputRef={inputRef}
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
        />
    );
};
export default PhoneInputDropdown;
