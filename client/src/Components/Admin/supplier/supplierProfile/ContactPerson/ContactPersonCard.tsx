import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { ContactPerson } from '../../../../../models/contactPerson';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Button } from '@mui/material';
interface ContactPeronCardProps {
    contactPerson: ContactPerson;
}

const ContactPeronCard = ({ contactPerson }: ContactPeronCardProps) => {
    const defaultProfileImage = '../../../../images/AdditionalImages/defaultProfileImage.webp';
    const openWhatsAppChat = (phoneNumber: string) => {
        const whatsappURL = `https://wa.me/${phoneNumber}`;
        window.open(whatsappURL, '_blank');
    };
    return (
      
                <Grid item xs={12} sm={12} md={6} lg={4} key={contactPerson.id}>
                    <Card sx={{ display: 'flex', height: '100%' }}>
                        <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                <Avatar alt={contactPerson.name} src={defaultProfileImage} sx={{ marginRight: '16px' }} />
                                <Typography component="div" variant="h6">
                                    {contactPerson.name}
                                </Typography>
                            </div>
                            <Typography variant="body2" color="text.secondary" component="div">
                                <span style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Contact Via : </span>
                                <Button
                                        onClick={() => openWhatsAppChat(contactPerson.phoneNumber)}
                                        color="primary"
                                        startIcon={<WhatsAppIcon />}
                                    >
                                        
                                    </Button>
                                
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component="div">
                                <span style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Contact Via : </span>
                                <Button
                                        component="a"
                                        href={`mailto:${contactPerson.email}?subject=Inquiry from &body=Hello ${contactPerson.name},`}
                                        startIcon={<MailOutlineIcon />}
                                    >
                                        
                                    </Button>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
      
    );
}

export default ContactPeronCard;