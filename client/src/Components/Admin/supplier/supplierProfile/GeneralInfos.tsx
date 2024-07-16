import {  Card, CardContent, Grid, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Supplier } from '../../../../models/supplier';
import {
    Button,
    Avatar,
    Stack,
} from '@mui/material';
interface GeneralInfosProps{
    supplier:Supplier
}
const GeneralInfos = ({ supplier }: GeneralInfosProps) => {
    const defaultProfileImage = '../../../../images/AdditionalImages/defaultProfileImage.webp';
    const openWhatsAppChat = (phoneNumber: string) => {
        const whatsappURL = `https://wa.me/${phoneNumber}`;
        window.open(whatsappURL, '_blank');
    };
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
            <Card >
                <CardContent>
            <Grid container>
            <Grid container spacing={2} xs={6}>
                <Grid item>
                    <Avatar
                        src={supplier.profileImage ? supplier.profileImage : defaultProfileImage}
                        alt=""
                        sx={{ width: "50px", height: "50px", borderRadius: '50%' }}></Avatar>
                </Grid>
                <Grid item  justifyItems={"center"}>
                            <Typography variant="h6" component="h1" >
                                {supplier.name}
                            </Typography>   
                </Grid>     
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
            <Typography variant="h6" >Contact Via :</Typography>

            </Grid>
            <Grid item xs={12} md={4} container justifyContent="flex-end" spacing={1}>
 
                                <Grid item>
                                    <Button
                                        onClick={() => openWhatsAppChat(supplier.phoneNumber)}
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
            </CardContent>
            </Card>                    
         </Grid>
        {/* <Box sx={{ px: { xs: 2, md: 6 } }}>
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
        </Box> */}
    </Grid>
);
}
export default GeneralInfos;