import { Avatar, Box, Button, Card, CardActions, CardContent, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import { Supplier } from '../../../../models/supplier';
import SupplierDetails from '../addSupplier/SupplierDetails';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useEffect, useRef, useState } from 'react';

import FinancialDetails from '../addSupplier/FinancialDetails';
import AdditionalDetails from '../addSupplier/AdditionalDetails';
import useCustomSnackbar from "../../../hooks/snackbar/useCustomSnackbar";
import { editSupplier } from '../../../api/admin';
import { SubmitHandler, useFormContext } from 'react-hook-form';
interface InfoSectionProps {
    onUpdateSuccess: () => Promise<void>;
}

const InfoSection = ({onUpdateSuccess }:InfoSectionProps) => {
    const { setValue,control,watch,handleSubmit } = useFormContext<Supplier>();

    const [disableEditing, setDisableEditing] = useState<boolean>(true);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [showAdditionalDetails, setShowAdditionalDetails] = useState(false);
    const { openSnackbar, SnackbarComponent } = useCustomSnackbar();

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const { name, value } = e.target;
    //     setValue(name as keyof Supplier, value);
    // };
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setValue('profileImage', reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleEnableEditing = () => {
        setDisableEditing(!disableEditing);
    };
    const openFileSelector = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const openWhatsAppChat = (phoneNumber: string) => {
        const whatsappURL = `https://wa.me/${phoneNumber.replace(/\s+/g, '')}`;
        window.open(whatsappURL, '_blank');
    };
    const defaultProfileImage = '../../../../images/AdditionalImages/defaultProfileImage.webp';
    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const supplierData = getValues();
    //     const result = await editSupplier(supplierData.id, supplierData);

    //     if (result.success) {
    //         await onUpdateSuccess(); // Call the function to refresh data
    //         openSnackbar('success', 'Supplier Added Successfully');


    //     } else {
    //         openSnackbar('error', result.message as string);
    //     }
    // };
    const onSubmit: SubmitHandler<Supplier> = async (data: Supplier) => {
        // console.log(data);
        // const result = await addSupplier(data);

        // if (result.success) {
        //     openSnackbar('success', 'Supplier Added Successfully');
        //     methods.reset(emptySupplier);
        // } else {
        //     openSnackbar('error', result.message);
        // }


        const result = await editSupplier(data.id, data);

        if (result.success) {
            await onUpdateSuccess(); // Call the function to refresh data
            openSnackbar('success', 'Supplier Added Successfully');


        } else {
            openSnackbar('error', result.message as string);
        }
    };
    useEffect(() => {
        const cr = watch('cr') || 0;
        const db = watch('db') || 0;
        const balance = cr - db;
        setValue('balance', balance);
    }, [watch, setValue]);
    return (
        <Grid
        container
        spacing={4}
        sx={{
            maxWidth: '100%',
            mx: 'auto',
            px: { xs: 2, md: 6 },
            py: { xs: 2, md: 3 },
        }}
    >
        <Grid item xs={12}>
            <Card>
            <form             onSubmit={handleSubmit(onSubmit)}
            >
                <CardContent>
                    <Box sx={{ mb: 1 }}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={6}>
                                <Typography variant="h6">Supplier info</Typography>
                            </Grid>
                            <Grid item xs={6} textAlign="right">
                                <Stack direction="row" spacing={1} justifyContent="flex-end" alignItems="center">
                                    <Typography variant="h6">Balance:</Typography>
                                    <Typography variant="h6">{ watch("cr") && watch("db") ? (watch("cr")!-watch("db")!).toLocaleString():0}</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} md={8}>
                                <Typography variant="body2">
                                    You can edit the supplier info by pressing enable button.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4} container justifyContent="flex-end" spacing={1}>
                                <Grid item>
                                    <Button onClick={handleEnableEditing} startIcon={disableEditing ? <LockOpenIcon /> : <LockIcon />}>
                                        Edit
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        onClick={() => openWhatsAppChat(watch("phoneNumber"))}
                                        color="primary"
                                        startIcon={<WhatsAppIcon />}
                                    >
                                        WhatsApp
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        component="a"
                                        href={`mailto:${watch("email")}?subject=Inquiry from &body=Hello ${watch("name")},`}
                                        startIcon={<MailOutlineIcon />}
                                    >
                                        Email
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider />
                    <Grid container spacing={3} sx={{ my: 1 }}>
                        <Grid item xs={4} md={2}>
                            <Box sx={{ position: 'relative' }}>
                                <Avatar
                                  src={watch("profileImage") || defaultProfileImage}

                                    alt=""
                                    sx={{ width: "100%", height: "100%", borderRadius: '50%' }}
                                />
                                <IconButton
                                    aria-label="upload new picture"
                                    size="small"
                                    sx={{
                                        position: 'absolute',
                                        bottom: -10,
                                        right: -10,
                                        bgcolor: 'background.paper',
                                        boxShadow: 1,
                                    }}
                                    onClick={openFileSelector}
disabled={disableEditing}
                                >
                                    <EditRoundedIcon />
                                </IconButton>
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    onChange={handleImageChange}
                                    style={{ display: 'none' }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Grid container spacing={2}>
                                <SupplierDetails
                              
                                    control={control}
                                    xs={12}
                                    md={6}
                                    
                                    disabled={disableEditing}
                                />
                                   <FinancialDetails
                 
control={control}                        xs={6}
                        disabled={disableEditing}

                    /> {/*contains DB CR Balance inputs*/}
                    
                    <Grid item xs={12}>
                        <Button variant="outlined" onClick={() => setShowAdditionalDetails(!showAdditionalDetails)}>
                            {showAdditionalDetails ? "Hide Additional Details" : "Show Additional Details"}
                        </Button>
                    </Grid>
                    {showAdditionalDetails && (
                         <AdditionalDetails
                        control={control}
                         xs={6} // Replace with your desired value
                         disabled={disableEditing}

                     />
                    )}
                            </Grid>
                      
                        </Grid>
                            
                    </Grid>
                </CardContent>
                <Divider />
                <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
                    <Button variant="outlined" color="primary">
                        Cancel
                    </Button>
                    <Button type='submit' variant="contained" color="primary">
                        Save
                    </Button>
                </CardActions>
                </form>

            </Card>
            {SnackbarComponent}

        </Grid>
    </Grid>
);
}
export default InfoSection;