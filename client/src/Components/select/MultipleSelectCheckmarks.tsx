import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';




interface MultipleSelectCheckmarksProps{
    label:string;
  value:string[];
  data:string[],
  onChange:(e: SelectChangeEvent<string[]>)=>void;
  disabled?:boolean;

}
const  MultipleSelectCheckmarks=({label,value,data,onChange,disabled}:MultipleSelectCheckmarksProps)=> {



  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
        <Select
        fullWidth
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={value}
          onChange={onChange}
          input={<OutlinedInput label="Shipping Methods" />}
          renderValue={(selected) => selected.join(', ')}
          name='shippingMethods'
          disabled={disabled}

        >
          {data.map((method) => (
            <MenuItem key={method} value={method}>
              <Checkbox checked={value.indexOf(method) > -1} />
              <ListItemText primary={method} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
export default MultipleSelectCheckmarks;
