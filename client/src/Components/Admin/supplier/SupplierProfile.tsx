import React, { useEffect, useState } from 'react';
import {
    Box,
    CircularProgress,
    Button,
    Divider,
    IconButton,
    Grid,
    Typography,
    Breadcrumbs,
    Link,
    Card,
    CardActions,
    CardContent,
    Avatar,
    Stack,
} from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { fetchSupplier } from '../../api/admin';
import { useAppDispatch, useAppSelector } from '../../../app/store/configureStore';
import { updateSupplierField, EditInitialSupplierState } from './supplierSlice';
import SupplierDetails from './addSupplier/SupplierDetails';

interface SupplierProfileProps {
    id: number;
}

const SupplierProfile = ({ id }: SupplierProfileProps) => {
    const dispatch = useAppDispatch();
    const supplier = useAppSelector((state) => state.AddSupplier.supplier);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        dispatch(updateSupplierField({ name, value }));
    };

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [disableEditing, setDisableEditing] = useState<boolean>(true);

    useEffect(() => {
        const getSupplier = async () => {
            try {
                const supplier = await fetchSupplier(id);
                dispatch(EditInitialSupplierState(supplier));
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch suppliers');
                setLoading(false);
            }
        };

        getSupplier();
    }, [id, dispatch]);

    useEffect(() => {
        const balance = (supplier.cr || 0) - (supplier.db || 0);
        dispatch(updateSupplierField({ name: 'balance', value: balance }));
    }, [supplier.cr, supplier.db, dispatch]);

    const defaultProfileImage = '../../../../images/AdditionalImages/defaultProfileImage.webp';
    const openWhatsAppChat = (phoneNumber: string) => {
        const whatsappURL = `https://wa.me/${phoneNumber}`;
        window.open(whatsappURL, '_blank');
    };

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Box>{error}</Box>;
    }

    const handleEnableEditing = () => {
        setDisableEditing(!disableEditing);
    };

    return (
        <Box sx={{ flex: 1, width: '100%' }}>
            <Box
                sx={{
                    position: 'sticky',
                    top: { sm: -100, md: -110 },
                    bgcolor: 'background.paper',
                    zIndex: 9995,
                }}
            >
                <Box sx={{ px: { xs: 2, md: 6 } }}>
                    <Breadcrumbs
                        separator={<ChevronRightRoundedIcon fontSize="small" />}
                        aria-label="breadcrumb"
                        sx={{ pl: 0 }}
                    >
                        <Link color="inherit" href="#">
                            <HomeRoundedIcon />
                        </Link>
                        <Link color="inherit" href="#">
                            Users
                        </Link>
                        <Typography color="textPrimary">Supplier Profile {supplier.name}</Typography>
                    </Breadcrumbs>
                    <Typography variant="h4" component="h1" sx={{ mt: 1, mb: 2 }}>
                        Supplier Profile
                    </Typography>
                </Box>
            </Box>
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
                        <CardContent>
                            <Box sx={{ mb: 1 }}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={6}>
                                        <Typography variant="h6">Supplier info</Typography>
                                    </Grid>
                                    <Grid item xs={6} textAlign="right">
                                        <Stack direction="row" spacing={1} justifyContent="flex-end" alignItems="center">
                                            <Typography variant="h6">Balance:</Typography>
                                            <Typography variant="h6">{supplier.balance?.toLocaleString()}</Typography>
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
                                                onClick={() => openWhatsAppChat(supplier.phoneNumber)}
                                                variant="outlined"
                                                color="primary"
                                                startIcon={<WhatsAppIcon />}
                                            >
                                                WhatsApp
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button
                                                component="a"
                                                href={`mailto:${supplier.email}?subject=Inquiry from &body=Hello ${supplier.name},`}
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
                                <Grid item xs={6} md={2}>
                                    <Box sx={{ position: 'relative' }}>
                                        <Avatar
                                            src={supplier.profileImage ? supplier.profileImage : defaultProfileImage}
                                            alt=""
                                            sx={{ width: 200, height: 200, borderRadius: '50%' }}
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
                                        >
                                            <EditRoundedIcon />
                                        </IconButton>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <Grid container spacing={2}>
                                        <SupplierDetails
                                            supplier={supplier}
                                            handleInputChange={handleInputChange}
                                            xs={12}
                                            md={6}
                                            disabled={disableEditing}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <Divider />
                        <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
                            <Button variant="outlined" color="primary">
                                Cancel
                            </Button>
                            <Button variant="contained" color="primary">
                                Save
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SupplierProfile;
