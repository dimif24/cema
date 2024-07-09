import AspectRatio from '@mui/joy/AspectRatio';
import { Box, CircularProgress } from '@mui/joy';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';

import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';

import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
// import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
// import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
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
// import CountryDropdown from '../../dropDowns/CountryDropdown';
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
    }, []);
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
    }
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
            <Stack
                spacing={4}
                sx={{
                    display: 'flex',
                    maxWidth: '800px',
                    mx: 'auto',
                    px: { xs: 2, md: 6 },
                    py: { xs: 2, md: 3 },
                }}
            >
                <Card>
                    <Box sx={{ mb: 1 }}>
                        <Typography level="title-md">Supplier info</Typography>
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
                    <Divider />
                    <Stack
                        direction="row"
                        spacing={3}
                        sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
                    >
                        <Stack direction="column" spacing={1}>
                            <AspectRatio
                                ratio="1"
                                maxHeight={200}
                                sx={{ flex: 1, minWidth: 120, borderRadius: '100%' }}
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
                        </Stack>
                        <Stack spacing={2} sx={{ flexGrow: 1 }}>
                            <Stack spacing={1}>
                                <FormLabel>Name</FormLabel>

                                <TextField
                                    fullWidth
                                    name="name"
                                    value={supplier.name}
                                    onChange={handleInputChange}
                                    required
                                    disabled={disableEditing}

                                />
                            </Stack>
                            <Stack direction="row" spacing={2}>
                                <FormControl>
                                    <FormLabel>Role</FormLabel>
                                    <Input size="sm" defaultValue="UI Developer" />
                                </FormControl>
                                <FormControl sx={{ flexGrow: 1 }}>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        size="md"
                                        type="email"
                                        startDecorator={<EmailRoundedIcon />}
                                        placeholder="email"
                                        defaultValue="siriwatk@test.com"
                                        sx={{ flexGrow: 1 }}

                                    />

                                </FormControl>
                            </Stack>
                            <div>
                                {/* <CountryDropdown /> */}
                            </div>
                            <div>
                                <FormControl sx={{ display: { sm: 'contents' } }}>
                                    <FormLabel>Timezone</FormLabel>
                                    <Select
                                        size="sm"
                                        startDecorator={<AccessTimeFilledRoundedIcon />}
                                        defaultValue="1"
                                    >
                                        <Option value="1">
                                            Indochina Time (Bangkok){' '}
                                            <Typography textColor="text.tertiary" ml={0.5}>
                                                — GMT+07:00
                                            </Typography>
                                        </Option>
                                        <Option value="2">
                                            Indochina Time (Ho Chi Minh City){' '}
                                            <Typography textColor="text.tertiary" ml={0.5}>
                                                — GMT+07:00
                                            </Typography>
                                        </Option>
                                    </Select>
                                </FormControl>
                            </div>
                        </Stack>
                    </Stack>
                    <Stack
                        direction="column"
                        spacing={2}
                        sx={{ display: { xs: 'flex', md: 'none' }, my: 1 }}
                    >
                        <Stack direction="row" spacing={2}>
                            <Stack direction="column" spacing={1}>
                                <AspectRatio
                                    ratio="1"
                                    maxHeight={108}
                                    sx={{ flex: 1, minWidth: 108, borderRadius: '100%' }}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                                        srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
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
                                        left: 85,
                                        top: 180,
                                        boxShadow: 'sm',
                                    }}
                                >
                                    <EditRoundedIcon />
                                </IconButton>
                            </Stack>
                            <Stack spacing={1} sx={{ flexGrow: 1 }}>
                                <FormLabel>Name</FormLabel>
                                <FormControl
                                    sx={{
                                        display: {
                                            sm: 'flex-column',
                                            md: 'flex-row',
                                        },
                                        gap: 2,
                                    }}

                                >
                                    <Input size="sm" placeholder="First name" />
                                    <Input size="sm" placeholder="Last name" />
                                </FormControl>
                            </Stack>
                        </Stack>
                        <FormControl>
                            <FormLabel>Role</FormLabel>
                            <Input onChange={handleInputChange} size="sm" defaultValue="UI Developer" />
                        </FormControl>
                        <FormControl sx={{ flexGrow: 1 }}>
                            <FormLabel>Email</FormLabel>
                            <Input
                                size="sm"
                                type="email"
                                startDecorator={<EmailRoundedIcon />}
                                placeholder="email"
                                defaultValue="siriwatk@test.com"
                                sx={{ flexGrow: 1 }}
                                readOnly={disableEditing}
                            />
                        </FormControl>
                        <div>
                            {/* <CountryDropdown /> */}
                        </div>
                        <div>
                            <FormControl sx={{ display: { sm: 'contents' } }}>
                                <FormLabel>Timezone</FormLabel>
                                <Select
                                    size="sm"
                                    startDecorator={<AccessTimeFilledRoundedIcon />}
                                    defaultValue="1"
                                >
                                    <Option value="1">
                                        Indochina Time (Bangkok){' '}
                                        <Typography textColor="text.tertiary" ml={0.5}>
                                            — GMT+07:00
                                        </Typography>
                                    </Option>
                                    <Option value="2">
                                        Indochina Time (Ho Chi Minh City){' '}
                                        <Typography textColor="text.tertiary" ml={0.5}>
                                            — GMT+07:00
                                        </Typography>
                                    </Option>
                                </Select>
                            </FormControl>
                        </div>
                    </Stack>
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


            </Stack>
        </Box>
    );
}
export default SupplierProfile;