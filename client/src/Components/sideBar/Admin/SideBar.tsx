import React from 'react';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Collapse from '@mui/material/Collapse';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import SupportRoundedIcon from '@mui/icons-material/SupportRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    border: 'none',
    boxShadow: theme.shadows[1],
    transition: 'transform 0.3s',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

const SearchBox = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[100],
  '&:hover': {
    backgroundColor: theme.palette.grey[200],
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
interface SidebarProps {
  open: boolean;
}
const Sidebar = ({ open }: SidebarProps) => {
  const [openUsers, setOpenUsers] = React.useState(false);
  const [openSuppliers, setOpenSuppliers] = React.useState(false);
  const supplierMenuItems = [
    { text: 'All Suppliers', link: '/admin/' },
    { text: 'Add Supplier', link: '/admin/add-supplier' },
    { text: 'Add Contact Person', link: '/admin/add-contact' }
  ];
  return (
    <StyledDrawer variant="permanent" sx={{ display: open ? 'block' : 'none' }}>
      <Box sx={{ pt: 10, pb: 2.5, display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton size="small" color="primary">
          {/* Add your logo icon here */}
        </IconButton>
        <Typography variant="h6">Cema</Typography>
      </Box>
      <SearchBox>
        <SearchIconWrapper>
          <SearchRoundedIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
        />
      </SearchBox>
      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
        <List>
          {[
            { text: 'Home', icon: <HomeRoundedIcon />, to: '/admin' },
            { text: 'Dashboard', icon: <DashboardRoundedIcon />, to: '/admin' },
            { text: 'Orders', icon: <ShoppingCartRoundedIcon />, to: '/admin' },
            { text: 'P&L Report', icon: <AssessmentRoundedIcon />, to: '/admin' },
            { text: 'Add Product', icon: <AddCircleRoundedIcon />, to: '/admin' },
          ].map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton component={Link} to={item.to}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton onClick={() => setOpenUsers(!openUsers)}>
              <ListItemIcon>
                <GroupRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
              <KeyboardArrowDownIcon sx={{ transform: openUsers ? 'rotate(180deg)' : 'none' }} />
            </ListItemButton>
          </ListItem>
          <Collapse in={openUsers} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {['My profile', 'Create a new user', 'Roles & permission'].map((text) => (
                <ListItemButton key={text} sx={{ pl: 4 }}>
                  <ListItemText primary={text} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setOpenSuppliers(!openSuppliers)}>
              <ListItemIcon>
                <BusinessRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Supplier" />
              <KeyboardArrowDownIcon sx={{ transform: openSuppliers ? 'rotate(180deg)' : 'none' }} />
            </ListItemButton>
          </ListItem>
          <Collapse in={openSuppliers} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {supplierMenuItems.map((item) => (
                <ListItemButton key={item.text} sx={{ pl: 4 }} component={Link} to={item.link}>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </List>
        <Box sx={{ flexGrow: 1 }} />
        <List>
          {[
            { text: 'Support', icon: <SupportRoundedIcon /> },
            { text: 'Settings', icon: <SettingsRoundedIcon /> },
          ].map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider />
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Avatar
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
          sx={{ width: 32, height: 32 }}
        />
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography variant="subtitle2" noWrap>
            Siriwat K.
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            siriwatk@test.com
          </Typography>
        </Box>
        <IconButton size="small">
          <LogoutRoundedIcon />
        </IconButton>
      </Box>
    </StyledDrawer>
  );
};

export default Sidebar;
