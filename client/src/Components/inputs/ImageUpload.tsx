import React, { useEffect, useRef, useState } from 'react';
import { Grid, TextField } from '@mui/material';
import { Control, Controller, useFormContext, useWatch } from 'react-hook-form';
import { Supplier } from '../../models/supplier';

interface ImageUploadProps {
    setValue: (name: keyof Supplier, value: any) => void;
    required?: boolean;
    disabled?: boolean;
    control: Control<any> | undefined;
    name: string;
    xs: number;
}

const ImageUpload = ({ setValue, required = false, disabled, control, name, xs }: ImageUploadProps) => {
    const [image,setImage]=useState<string>();
    const [fileName, setFileName] = useState<string>('');
    const { getValues } = useFormContext<Supplier>();

    // Watch for changes in the form field
    const watchedValue = useWatch({
        control,
        name: name,
    });

    useEffect(() => {
        // Reset component state when the watched value is empty or null
        if (!watchedValue) {
           setFileName('');
            setImage('');
            // if (fileInputRef.current) {
            //     fileInputRef.current.value = '';
            // }
        }
    }, [watchedValue]);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();

            reader.readAsDataURL(file);
            setFileName(file.name); // Set the file name

            setValue("profileImage",reader.result)
            reader.onloadend = () => {
                const base64String = reader.result?.toString() || '';
                setValue(name as keyof Supplier, base64String); // Update form value
                setImage(base64String);
            };
        }
    };

    return (
        <>
            <Grid item xs={xs - 1}>
                <Controller
                    name={name}
                    control={control}
                    rules={{
                        required: required ? 'Image is required' : false,
                    }}
                    render={({ field: { onChange: fieldOnChange }, fieldState: { error } }) => (
                        <>
                            <TextField
                                fullWidth
                                type="text"
                                error={!!error}
                                helperText={error?.message}
                                value={fileName}
                                onClick={() => fileInputRef.current?.click()}
                                InputProps={{
                                    readOnly: true,
                                }}
                                placeholder="Choose file"
                                disabled={disabled}
                            />
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    fieldOnChange(e.target.value);
                                    handleImageFileChange(e);
                                }}
                                accept="image/*"
                            />
                        </>
                    )}
                />
            </Grid>
            <Grid item xs={1}>
                {getValues("profileImage") && (
                    <img
                        src={getValues("profileImage")!}
                        alt="Profile Preview"
                        style={{
                            width: '100%',
                            height: '100%',
                            maxHeight: '56px',
                            objectFit: 'contain'
                        }}
                    />
                    
                )}
            </Grid>
        </>
    );
};

export default ImageUpload;
