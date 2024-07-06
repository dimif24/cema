// src/components/Admin/supplier/SupplierCard.tsx
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
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
        <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
          <img
            src={profileImage ? profileImage : defaultProfileImage}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent>
          <Typography fontSize="xl" fontWeight="lg">
            {name}
          </Typography>
          <Sheet
            sx={{
              bgcolor: 'background.level1',
              borderRadius: 'sm',
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
              <Typography level="body-xs" fontWeight="lg">
                Business Type
              </Typography>
              <Typography fontWeight="lg">{businessType}</Typography>
            </Box>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Balance
              </Typography>
              <Typography fontWeight="lg">{balance} {currency}</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Country
              </Typography>
              <Typography fontWeight="lg">{country}</Typography>
            </div>
            <Box sx={{
              display: { xs: 'none', md: 'block' }, // Hide on small screens
            }}>
              <Typography level="body-xs" fontWeight="lg">
                Year Established
              </Typography>
              <Typography fontWeight="lg">{yearEstablished}</Typography>
            </Box>
          </Sheet>
          <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
            <Box sx={{ display: 'flex', width: '100%' }}>
              <Button
                sx={{ flex: 1, margin: '0 4px' }}
                component="a"
                href={`mailto:${email}?subject=Inquiry from &body=Hello ${name},`}
              >
                <MailOutlineIcon />
              </Button>
              <Button
                sx={{ flex: 1, margin: '0 4px' }}
                onClick={() => openWhatsAppChat(phoneNumber)}
                variant="outlined"
                color="primary"

              >
                <WhatsAppIcon />
              </Button>
              <Button
                sx={{ flex: 2, margin: '0 4px' }}
                variant="outlined"
                color="neutral"
              >
                View Profile
              </Button>
            </Box>


          </Box>
        </CardContent>
      </Card>
    </Box >
  );
}

export default SupplierCard;
