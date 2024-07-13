import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Paper,
  IconButton,
  Avatar
} from '@mui/material';
import { Supplier } from '../../../models/supplier';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const defaultProfileImage = '../../../../images/AdditionalImages/defaultProfileImage.webp';
const openWhatsAppChat = (phoneNumber: string) => {
  const whatsappURL = `https://wa.me/${phoneNumber}`;
  window.open(whatsappURL, '_blank');
};

const SupplierCard = ({ profileImage, name, businessType, balance, yearEstablished, country, currency, email, phoneNumber }: Supplier) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Adjust layout based on screen size
        alignItems: 'center',
        gap: 2,
        overflow: { xs: 'auto', sm: 'initial' },
      }}
      key={email}
    >
      <Card
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Adjust layout based on screen size
          alignItems: 'center',
          gap: 2,
          overflow: 'auto',
        }}
      >
        <Box sx={{ position: 'relative', minWidth: 182, maxHeight: 182 }}>
          <Avatar
            src={profileImage ? profileImage : defaultProfileImage}
            sx={{ width: '100%', height: '100%', borderRadius: 0 }}
            variant="square"
          />
        </Box>
        <CardContent>
          <Typography variant="h5" fontWeight="bold">
            {name}
          </Typography>
          <Paper
            sx={{
              backgroundColor: 'background.paper',
              borderRadius: 1,
              p: 1.5,
              my: 1.5,
              display: 'flex',
              gap: 2,
              '& > div': { flex: 1 },
            }}
          >
            <Box sx={{
              display: { xs: 'none', md: 'block' }, // Hide on small screens
            }}>
              <Typography variant="body2" fontWeight="bold">
                Business Type
              </Typography>
              <Typography fontWeight="bold">{businessType}</Typography>
            </Box>
            <div>
              <Typography variant="body2" fontWeight="bold">
                Balance
              </Typography>
              <Typography fontWeight="bold">{balance} {currency}</Typography>
            </div>
            <div>
              <Typography variant="body2" fontWeight="bold">
                Country
              </Typography>
              <Typography fontWeight="bold">{country}</Typography>
            </div>
            <Box sx={{
              display: { xs: 'none', md: 'block' }, // Hide on small screens
            }}>
              <Typography variant="body2" fontWeight="bold">
                Year Established
              </Typography>
              <Typography fontWeight="bold">{yearEstablished}</Typography>
            </Box>
          </Paper>
          <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
            <Box sx={{ display: 'flex', width: '100%' }}>
              <IconButton
                sx={{ flex: 1, margin: '0 4px' }}
                component="a"
                href={`mailto:${email}?subject=Inquiry from &body=Hello ${name},`}
              >
                <MailOutlineIcon />
              </IconButton>
              <IconButton
                sx={{ flex: 1, margin: '0 4px' }}
                onClick={() => openWhatsAppChat(phoneNumber)}
                color="primary"
              >
                <WhatsAppIcon />
              </IconButton>
              <Button
                sx={{ flex: 2, margin: '0 4px' }}
                variant="outlined"
                color="primary"
              >
                View Profile
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default SupplierCard;
