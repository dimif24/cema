import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Supplier } from '../../../models/supplier';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

const defaultProfileImage = '../../../../images/AdditionalImages/defaultProfileImage.webp';
const openWhatsAppChat = (phoneNumber: string) => {
  const whatsappURL = `https://wa.me/${phoneNumber.replace(/\s+/g, '')}`;
  window.open(whatsappURL, '_blank');
};

const SupplierCard = ({id, profileImage, name, businessType, balance, yearEstablished, country, currency, email, phoneNumber,cr,db }: Supplier) => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/admin/supplier/${id}`);
  };
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        overflow: 'hidden',
        boxShadow: 3,
        borderRadius: 2,
        transition: 'box-shadow 0.3s',
        '&:hover': {
          boxShadow: 6,
        },
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', sm: 200 },
          height: { xs: 200, sm: 'auto' },
          position: 'relative',
        }}
      >
        <Box
          component="img"
          src={profileImage || defaultProfileImage}
          alt={name}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {name}
        </Typography>
        <Paper
          elevation={0}
          sx={{
            bgcolor: 'background.default',
            borderRadius: 2,
            p: 2,
            mb: 2,
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
            gap: 2,
          }}
        >
          {[
            { label: 'Business Type', value: businessType },
            { label: 'Balance', value: `${cr || db ? cr-db:0} ${currency? currency:"--"}` },
            { label: 'Country', value: country },
            { label: 'Year Established', value: yearEstablished },
          ].map(({ label, value }) => (
            <Box key={label}>
              <Typography variant="body2" color="text.secondary">
                {label}
              </Typography>
              <Typography variant="body1" fontWeight="medium">
                {value}
              </Typography>
            </Box>
          ))}
        </Paper>
        <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
          <Button
            startIcon={<MailOutlineIcon />}
            variant="outlined"
            component="a"
            href={`mailto:${email}?subject=Inquiry for ${name}&body=Hello ${name},`}
            sx={{ flex: 1 }}
          >
            
          </Button>
          <Button
            startIcon={<WhatsAppIcon />}
            variant="outlined"
            onClick={() => openWhatsAppChat(phoneNumber)}
            sx={{ flex: 1 }}
          >
            
          </Button>
          <Button
            startIcon={<PersonIcon />}
            variant="contained"
            color="primary"
            sx={{ flex: 1 }}
            onClick={handleViewClick}

          >
            View 
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default SupplierCard;