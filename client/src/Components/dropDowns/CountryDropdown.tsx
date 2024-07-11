import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { countries } from '../../Helpers/countries'
interface CountryDropdownProps {
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
    label: string;
    flag: string;
    disabled?:boolean;

}
interface CountryDropdown {
    label: string;
    code: string;
    phone: string;
    disabled?:boolean;

}

const CountryDropdown = ({ value, onChange, required = false, label, flag,disabled }: CountryDropdownProps) => {




    const handleChange = (_event: React.SyntheticEvent, newValue: CountryDropdown | null) => {
        console.log(typeof (newValue?.phone));
     
            onChange(newValue ? flag == 'phoneNumber' ? newValue.phone : newValue.label : '');

        
    };
    const getOptionSelected = (option: CountryDropdown, value: string) => {
        return flag === 'phoneNumber' ? option.phone === value : option.label === value;
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
                        {option.label} ({option.code}) {flag === 'phoneNumber' && `+${option.phone}`}
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
                    disabled={disabled}
                />
            )}
            value={countries.find(option => getOptionSelected(option, value)) || null}

            onChange={handleChange}
disabled={disabled}
        />
    );

};

export default CountryDropdown;
