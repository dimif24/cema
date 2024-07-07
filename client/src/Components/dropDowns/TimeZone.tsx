import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import timezones from '../../Helpers/timeZones';
interface timeZone {
    label: string,
    value: string | null;
    onChange: (newValue: string) => void;
    required?: boolean;
}

const TimeZone = ({ value, onChange, required, label }: timeZone) => {
    const handleChange = (_event: React.SyntheticEvent, newValue: string | null) => {

        onChange(newValue!);
    };
    return (
        <Autocomplete
            fullWidth
            autoHighlight
            disablePortal
            id="combo-box-demo"
            options={timezones}
            value={value}
            onChange={handleChange}

            renderInput={(params) => <TextField {...params} required={required} label={label} />}
        />
    );
}
export default TimeZone;