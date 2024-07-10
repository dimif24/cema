import AspectRatio from '@mui/joy/AspectRatio';
import { Box, CircularProgress } from '@mui/joy';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';

import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';

import Grid from '@mui/material/Grid';
//import Select from '@mui/joy/Select';
//import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
//import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useEffect, useState } from 'react';
import { fetchSupplier } from '../../api/admin';
import { useAppDispatch, useAppSelector } from '../../../app/store/configureStore';
import { updateSupplierField, EditInitialSupplierState } from './supplierSlice';
import { TextField } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CountryDropdown from '../../dropDowns/CountryDropdown';

interface SupplierProfileProps {
    id: number;
}

const SupplierProfile = ({ id }: SupplierProfileProps) => {
    const dispatch = useAppDispatch();
    const supplier = useAppSelector(state => state.AddSupplier.supplier);
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
                    bgcolor: 'background.body',
                    zIndex: 9995,
                }}
            >
                <Box sx={{ px: { xs: 2, md: 6 } }}>
                    <Breadcrumbs
                        size="sm"
                        aria-label="breadcrumbs"
                        separator={<ChevronRightRoundedIcon />}
                        sx={{ pl: 0 }}
                    >
                        <Link
                            underline="none"
                            color="neutral"
                            href="#some-link"
                            aria-label="Home"
                        >
                            <HomeRoundedIcon />
                        </Link>
                        <Link
                            underline="hover"
                            color="neutral"
                            href="#some-link"
                            fontSize={12}
                            fontWeight={500}
                        >
                            Users
                        </Link>
                        <Typography color="primary" fontWeight={500} fontSize={12}>
                            Supplier Profile {supplier.name}
                        </Typography>
                    </Breadcrumbs>
                    <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
                        Supplier Profile
                    </Typography>
                </Box>
            </Box>
            <Grid
                container
                spacing={4}
                sx={{
                    maxWidth: '80%',
                    mx: 'auto',
                    px: { xs: 2, md: 6 },
                    py: { xs: 2, md: 3 },
                }}
            >
                <Grid item xs={12}>
                    <Card>
                        <Box sx={{ mb: 1 }}>
                            <Typography level="title-md">Supplier info</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <Typography level="body-sm">
                                    You can edit the supplier info by pressing enable button.
                                </Typography>
                                <Button
                                    sx={{ flex: 1, margin: '0 4px' }}
                                    component="a"
                                    onClick={handleEnableEditing}
                                >
                                    Edit {disableEditing ? <LockOpenIcon /> : <LockIcon />}
                                </Button>
                                <Button
                                    sx={{ flex: 1, margin: '0 4px' }}
                                    onClick={() => openWhatsAppChat(supplier.phoneNumber)}
                                    variant="outlined"
                                    color="primary"
                                >
                                    <WhatsAppIcon />
                                </Button>
                                <Button
                                    sx={{ flex: 1, margin: '0 4px' }}
                                    component="a"
                                    href={`mailto:${supplier.email}?subject=Inquiry from &body=Hello ${supplier.name},`}
                                >
                                    <MailOutlineIcon />
                                </Button>
                            </Box>
                        </Box>
                        <Divider />
                        <Grid container spacing={3} sx={{ my: 1 }}>
                            <Grid item xs={6} md={2}>
                                <Box sx={{ position: 'relative' }}>
                                    <AspectRatio
                                        ratio="1"
                                        maxHeight={200}
                                        sx={{ flex: 1, minWidth: 80, borderRadius: '100%' }}
                                    >
                                        <img
                                            src={supplier.profileImage ? supplier.profileImage : defaultProfileImage}
                                            loading="lazy"
                                            alt=""
                                        />
                                    </AspectRatio>
                                    <IconButton
                                        aria-label="upload new picture"
                                        size="sm"
                                        variant="outlined"
                                        color="neutral"
                                        sx={{
                                            bgcolor: 'background.body',
                                            position: 'absolute',
                                            zIndex: 2,
                                            borderRadius: '50%',
                                            left: 100,
                                            top: 170,
                                            boxShadow: 'sm',
                                        }}
                                    >
                                        <EditRoundedIcon />
                                    </IconButton>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <FormControl>
                                            <FormLabel>Name</FormLabel>
                                            <TextField
                                                fullWidth
                                                name="name"
                                                value={supplier.name}
                                                onChange={handleInputChange}
                                                required
                                                disabled={disableEditing}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormControl>
                                            <FormLabel>Description</FormLabel>
                                            <TextField
                                                fullWidth
                                                name="description"
                                                value={supplier.description}
                                                onChange={handleInputChange}
                                                multiline
                                                rows={1}
                                                disabled={disableEditing}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormControl>
                                            <FormLabel>Role</FormLabel>
                                            <Input size="sm" defaultValue="UI Developer" disabled={disableEditing} />
                                        </FormControl>
                                    </Grid>
                                    
                                    <Grid item xs={12} md={6}>
                                        <FormControl>
                                            <FormLabel>Email</FormLabel>
                                            <Input
                                                size="md"
                                                type="email"
                                                startDecorator={<EmailRoundedIcon />}
                                                placeholder="email"
                                                value={supplier.email || ''}
                                                onChange={handleInputChange}
                                                disabled={disableEditing}
                                            />
                                        </FormControl>
                                    </Grid>
                                    {/* <Grid item xs={12} md={6}>
                                        <FormControl>
                                            <FormLabel>Timezone</FormLabel>
                                            <Select
                                                size="sm"
                                                startDecorator={<AccessTimeFilledRoundedIcon />}
                                                value={supplier.timeZone || '1'}
                                                onChange={handleInputChange}
                                                disabled={disableEditing}
                                            >
                                                <Option value="1">
                                                    Indochina Time (Bangkok)
                                                    <Typography textColor="text.tertiary" ml={0.5}>
                                                        — GMT+07:00
                                                    </Typography>
                                                </Option>
                                                <Option value="2">
                                                    Indochina Time (Ho Chi Minh City)
                                                    <Typography textColor="text.tertiary" ml={0.5}>
                                                        — GMT+07:00
                                                    </Typography>
                                                </Option>
                                            </Select>
                                        </FormControl>
                                    </Grid> */}
                                    <Grid item xs={12} md={6}>
                        <CountryDropdown
                            label="Choose a country"
                            value={supplier.country}
                            onChange={(value: string) => dispatch(updateSupplierField({ name: 'country', value }))}
                            flag='country'
                            required
                            

                        />
                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                                <Button size="sm" variant="outlined" color="neutral">
                                    Cancel
                                </Button>
                                <Button size="sm" variant="solid">
                                    Save
                                </Button>
                            </CardActions>
                        </CardOverflow>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SupplierProfile;
