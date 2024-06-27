import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { countries } from './countries'
interface CountryDropdownProps {
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
    label: string;
}
interface CountryDropdown {
    label: string;
    code: string;
    phone: string;

}

const CountryDropdown = ({ value, onChange, required = false, label }: CountryDropdownProps) => {




    const handleChange = (_event: React.SyntheticEvent, newValue: CountryDropdown | null) => {
        onChange(newValue ? newValue.label : '');
    };


    return (
        <Autocomplete
            fullWidth
            id="country-select-demo"
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}

            renderOption={(props, option) => {
                return (
                    <Box component="li" key={option.code} sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                        <img
                            loading="lazy"
                            width="20"
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            alt=""
                        />
                        {option.label} ({option.code}) +{option.phone}
                    </Box>
                );
            }}
            renderInput={(params) => (
                <TextField
                    {...params}

                    label={label}
                    required={required}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
            value={countries.find(option => option.label === value) || null}

            onChange={handleChange}

        />
    );

};

export default CountryDropdown;
