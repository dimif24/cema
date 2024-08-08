import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { ContactPerson } from '../../../../../models/contactPerson';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteContactPerson } from '../../../../api/admin';
interface ContactPeronCardProps {
    contactPerson: ContactPerson;
    onDelete: (id: number) => void;


}

const ContactPeronCard = ({ contactPerson,onDelete  }: ContactPeronCardProps) => {
    const defaultProfileImage = '../../../../images/AdditionalImages/defaultProfileImage.webp';
    const openWhatsAppChat = (phoneNumber: string) => {
        const whatsappURL = `https://wa.me/${phoneNumber.replace(/\s+/g, '')}`;
        window.open(whatsappURL, '_blank');
    };
    const handleEdit = (id: number) => {
        // Implement edit logic here
        console.log('Edit contact person with id:', id);
    };
    
    const handleDelete = async (id: number) => {
        // Implement delete logic here
        await deleteContactPerson(id);
        onDelete(id);
        console.log('Delete contact person with id:', id);
    };
    return (
      
                <Grid item xs={12} sm={12} md={6} lg={4} key={contactPerson.id}>
                    <Card sx={{ display: 'flex', height: '100%' }}>
                        <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column',position: 'relative'  }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                        <Avatar alt={contactPerson.name} src={defaultProfileImage} sx={{ marginRight: '16px' }} />
                                <Typography component="div" variant="h6">
                                    {contactPerson.name}
                                </Typography>
                                </Box>
                                <Box sx={{ position: 'absolute', top: 8, right: 8, display: 'flex' }}>

                                <IconButton
                    onClick={() => handleEdit(contactPerson.id)}
                    color="primary"
                    size="small"
                    aria-label="edit"
                >
                    <EditIcon fontSize="small" />
                </IconButton>
                <IconButton
                    onClick={() => handleDelete(contactPerson.id)}
                    color="error"
                    size="small"
                    aria-label="delete"
                >
                    <DeleteIcon fontSize="small" />
                </IconButton>
                                    </Box>
                           
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