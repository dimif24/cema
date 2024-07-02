import { PhoneNumberUtil } from 'google-libphonenumber';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
interface PhoneInputProps {
    value: string;
    onChange: (value: string) => void;
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

const PhoneInputDropdown = ({ value, onChange, required = false }: PhoneInputProps) => {


    const isValid = isPhoneValid(value);
    const handleChange = (phone: string) => {
        onChange(phone);
    };
    return (
        <>
            <PhoneInput
                defaultCountry="kw" //to be choseen feom admin side
                value={value}
                onChange={handleChange}
                required={required}

            />

            {!isValid && <div style={{ color: 'red' }}>Phone is not valid</div>}
        </>

    );
};
export default PhoneInputDropdown;